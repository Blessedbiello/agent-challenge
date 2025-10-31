import { randomUUID } from "node:crypto";
import { z } from "zod";
import { getDb } from "@sentinelops/persistence";
import { createTool } from "@mastra/core/tools";

export const ActionStatusSchema = z.enum([
  "PENDING",
  "APPROVED",
  "REJECTED",
  "RUNNING",
  "COMPLETED",
]);

export type ActionStatus = z.infer<typeof ActionStatusSchema>;

export const ActionRiskSchema = z.enum(["LOW", "MEDIUM", "HIGH"]);
export type ActionRisk = z.infer<typeof ActionRiskSchema>;

export const ActionTypeSchema = z.enum(["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]);
export type ActionType = z.infer<typeof ActionTypeSchema>;

export const CreateIncidentActionSchema = z.object({
  incidentId: z.string().min(1),
  label: z.string().min(1),
  type: ActionTypeSchema,
  risk: ActionRiskSchema,
  metadata: z.record(z.string(), z.any()).optional(),
});

export const UpdateIncidentActionStatusSchema = z.object({
  status: ActionStatusSchema,
  approvedBy: z.string().optional(),
  rejectedBy: z.string().optional(),
  rejectionReason: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export const ApproveIncidentActionSchema = z.object({
  actionId: z.string().min(1),
  approvedBy: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export const RejectIncidentActionSchema = z.object({
  actionId: z.string().min(1),
  rejectedBy: z.string().optional(),
  reason: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export type IncidentAction = {
  id: string;
  incidentId: string;
  label: string;
  type: ActionType;
  risk: ActionRisk;
  status: ActionStatus;
  createdAt: string;
  updatedAt: string;
  approvedBy?: string;
  rejectedBy?: string;
  rejectionReason?: string;
  metadata?: Record<string, unknown>;
};

export const IncidentActionSchema: z.ZodType<IncidentAction> = z.object({
  id: z.string(),
  incidentId: z.string(),
  label: z.string(),
  type: ActionTypeSchema,
  risk: ActionRiskSchema,
  status: ActionStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  approvedBy: z.string().optional(),
  rejectedBy: z.string().optional(),
  rejectionReason: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

function deserializeAction(row: any): IncidentAction {
  return {
    id: row.id,
    incidentId: row.incident_id,
    label: row.label,
    type: row.type,
    risk: row.risk,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    approvedBy: row.approved_by ?? undefined,
    rejectedBy: row.rejected_by ?? undefined,
    rejectionReason: row.rejection_reason ?? undefined,
    metadata: row.metadata ? JSON.parse(row.metadata) : undefined,
  };
}

export function createIncidentAction(input: z.infer<typeof CreateIncidentActionSchema>): IncidentAction {
  const db = getDb();
  const now = new Date().toISOString();
  const action: IncidentAction = {
    id: randomUUID(),
    incidentId: input.incidentId,
    label: input.label,
    type: input.type,
    risk: input.risk,
    status: "PENDING",
    createdAt: now,
    updatedAt: now,
    metadata: input.metadata,
  };

  db.prepare(
    `INSERT INTO incident_actions (id, incident_id, label, type, risk, status, created_at, updated_at, metadata)
     VALUES (@id, @incidentId, @label, @type, @risk, @status, @createdAt, @updatedAt, @metadata)`
  ).run({
    ...action,
    metadata: action.metadata ? JSON.stringify(action.metadata) : null,
  });

  return action;
}

export const createIncidentActionTool = createTool({
  id: "actions.create",
  description: "Create an incident remediation action that requires approval.",
  inputSchema: CreateIncidentActionSchema,
  outputSchema: IncidentActionSchema,
  execute: async ({ context }) => {
    return createIncidentAction(context);
  },
});

export function updateIncidentActionStatus(actionId: string, input: z.infer<typeof UpdateIncidentActionStatusSchema>): IncidentAction {
  const db = getDb();
  const existing = db.prepare(`SELECT * FROM incident_actions WHERE id = ?`).get(actionId);
  if (!existing) {
    throw new Error(`Incident action ${actionId} not found`);
  }

  const now = new Date().toISOString();
  db.prepare(
    `UPDATE incident_actions
     SET status = ?,
         updated_at = ?,
         approved_by = ?,
         rejected_by = ?,
         rejection_reason = ?,
         metadata = COALESCE(?, metadata)
     WHERE id = ?`
  ).run(
    input.status,
    now,
    input.approvedBy ?? null,
    input.rejectedBy ?? null,
    input.rejectionReason ?? null,
    input.metadata ? JSON.stringify(input.metadata) : null,
    actionId,
  );

  const updated = db.prepare(`SELECT * FROM incident_actions WHERE id = ?`).get(actionId);
  return deserializeAction(updated);
}

export function approveIncidentAction(input: z.infer<typeof ApproveIncidentActionSchema>): IncidentAction {
  return updateIncidentActionStatus(input.actionId, {
    status: "APPROVED",
    approvedBy: input.approvedBy ?? "agent",
    metadata: input.metadata,
  });
}

export function rejectIncidentAction(input: z.infer<typeof RejectIncidentActionSchema>): IncidentAction {
  return updateIncidentActionStatus(input.actionId, {
    status: "REJECTED",
    rejectedBy: input.rejectedBy ?? "agent",
    rejectionReason: input.reason,
    metadata: input.metadata,
  });
}

export const approveIncidentActionTool = createTool({
  id: "actions.approve",
  description: "Approve an incident remediation action.",
  inputSchema: ApproveIncidentActionSchema,
  outputSchema: IncidentActionSchema,
  execute: async ({ context }) => approveIncidentAction(context),
});

export const rejectIncidentActionTool = createTool({
  id: "actions.reject",
  description: "Reject an incident remediation action with an optional reason.",
  inputSchema: RejectIncidentActionSchema,
  outputSchema: IncidentActionSchema,
  execute: async ({ context }) => rejectIncidentAction(context),
});

export function listIncidentActions(options?: { incidentId?: string; status?: ActionStatus }): IncidentAction[] {
  const db = getDb();
  const conditions: string[] = [];
  const params: any[] = [];

  if (options?.incidentId) {
    conditions.push("incident_id = ?");
    params.push(options.incidentId);
  }

  if (options?.status) {
    conditions.push("status = ?");
    params.push(options.status);
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const rows = db
    .prepare(`SELECT * FROM incident_actions ${whereClause} ORDER BY created_at DESC`)
    .all(...params);

  return rows.map(deserializeAction);
}

export function getIncidentAction(actionId: string): IncidentAction | undefined {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM incident_actions WHERE id = ?`).get(actionId);
  return row ? deserializeAction(row) : undefined;
}

export function clearIncidentActions(): void {
  const db = getDb();
  db.prepare(`DELETE FROM incident_actions`).run();
}
