"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectIncidentActionTool = exports.approveIncidentActionTool = exports.createIncidentActionTool = exports.IncidentActionSchema = exports.RejectIncidentActionSchema = exports.ApproveIncidentActionSchema = exports.UpdateIncidentActionStatusSchema = exports.CreateIncidentActionSchema = exports.ActionTypeSchema = exports.ActionRiskSchema = exports.ActionStatusSchema = void 0;
exports.createIncidentAction = createIncidentAction;
exports.updateIncidentActionStatus = updateIncidentActionStatus;
exports.approveIncidentAction = approveIncidentAction;
exports.rejectIncidentAction = rejectIncidentAction;
exports.listIncidentActions = listIncidentActions;
exports.getIncidentAction = getIncidentAction;
exports.clearIncidentActions = clearIncidentActions;
const node_crypto_1 = require("node:crypto");
const zod_1 = require("zod");
const persistence_1 = require("@sentinelops/persistence");
const tools_1 = require("@mastra/core/tools");
exports.ActionStatusSchema = zod_1.z.enum([
    "PENDING",
    "APPROVED",
    "REJECTED",
    "RUNNING",
    "COMPLETED",
]);
exports.ActionRiskSchema = zod_1.z.enum(["LOW", "MEDIUM", "HIGH"]);
exports.ActionTypeSchema = zod_1.z.enum(["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]);
exports.CreateIncidentActionSchema = zod_1.z.object({
    incidentId: zod_1.z.string().min(1),
    label: zod_1.z.string().min(1),
    type: exports.ActionTypeSchema,
    risk: exports.ActionRiskSchema,
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
exports.UpdateIncidentActionStatusSchema = zod_1.z.object({
    status: exports.ActionStatusSchema,
    approvedBy: zod_1.z.string().optional(),
    rejectedBy: zod_1.z.string().optional(),
    rejectionReason: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
exports.ApproveIncidentActionSchema = zod_1.z.object({
    actionId: zod_1.z.string().min(1),
    approvedBy: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
exports.RejectIncidentActionSchema = zod_1.z.object({
    actionId: zod_1.z.string().min(1),
    rejectedBy: zod_1.z.string().optional(),
    reason: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
exports.IncidentActionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    incidentId: zod_1.z.string(),
    label: zod_1.z.string(),
    type: exports.ActionTypeSchema,
    risk: exports.ActionRiskSchema,
    status: exports.ActionStatusSchema,
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    approvedBy: zod_1.z.string().optional(),
    rejectedBy: zod_1.z.string().optional(),
    rejectionReason: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
function deserializeAction(row) {
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
function createIncidentAction(input) {
    const db = (0, persistence_1.getDb)();
    const now = new Date().toISOString();
    const action = {
        id: (0, node_crypto_1.randomUUID)(),
        incidentId: input.incidentId,
        label: input.label,
        type: input.type,
        risk: input.risk,
        status: "PENDING",
        createdAt: now,
        updatedAt: now,
        metadata: input.metadata,
    };
    db.prepare(`INSERT INTO incident_actions (id, incident_id, label, type, risk, status, created_at, updated_at, metadata)
     VALUES (@id, @incidentId, @label, @type, @risk, @status, @createdAt, @updatedAt, @metadata)`).run({
        ...action,
        metadata: action.metadata ? JSON.stringify(action.metadata) : null,
    });
    return action;
}
exports.createIncidentActionTool = (0, tools_1.createTool)({
    id: "actions.create",
    description: "Create an incident remediation action that requires approval.",
    inputSchema: exports.CreateIncidentActionSchema,
    outputSchema: exports.IncidentActionSchema,
    execute: async ({ context }) => {
        return createIncidentAction(context);
    },
});
function updateIncidentActionStatus(actionId, input) {
    const db = (0, persistence_1.getDb)();
    const existing = db.prepare(`SELECT * FROM incident_actions WHERE id = ?`).get(actionId);
    if (!existing) {
        throw new Error(`Incident action ${actionId} not found`);
    }
    const now = new Date().toISOString();
    db.prepare(`UPDATE incident_actions
     SET status = ?,
         updated_at = ?,
         approved_by = ?,
         rejected_by = ?,
         rejection_reason = ?,
         metadata = COALESCE(?, metadata)
     WHERE id = ?`).run(input.status, now, input.approvedBy ?? null, input.rejectedBy ?? null, input.rejectionReason ?? null, input.metadata ? JSON.stringify(input.metadata) : null, actionId);
    const updated = db.prepare(`SELECT * FROM incident_actions WHERE id = ?`).get(actionId);
    return deserializeAction(updated);
}
function approveIncidentAction(input) {
    return updateIncidentActionStatus(input.actionId, {
        status: "APPROVED",
        approvedBy: input.approvedBy ?? "agent",
        metadata: input.metadata,
    });
}
function rejectIncidentAction(input) {
    return updateIncidentActionStatus(input.actionId, {
        status: "REJECTED",
        rejectedBy: input.rejectedBy ?? "agent",
        rejectionReason: input.reason,
        metadata: input.metadata,
    });
}
exports.approveIncidentActionTool = (0, tools_1.createTool)({
    id: "actions.approve",
    description: "Approve an incident remediation action.",
    inputSchema: exports.ApproveIncidentActionSchema,
    outputSchema: exports.IncidentActionSchema,
    execute: async ({ context }) => approveIncidentAction(context),
});
exports.rejectIncidentActionTool = (0, tools_1.createTool)({
    id: "actions.reject",
    description: "Reject an incident remediation action with an optional reason.",
    inputSchema: exports.RejectIncidentActionSchema,
    outputSchema: exports.IncidentActionSchema,
    execute: async ({ context }) => rejectIncidentAction(context),
});
function listIncidentActions(options) {
    const db = (0, persistence_1.getDb)();
    const conditions = [];
    const params = [];
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
function getIncidentAction(actionId) {
    const db = (0, persistence_1.getDb)();
    const row = db.prepare(`SELECT * FROM incident_actions WHERE id = ?`).get(actionId);
    return row ? deserializeAction(row) : undefined;
}
function clearIncidentActions() {
    const db = (0, persistence_1.getDb)();
    db.prepare(`DELETE FROM incident_actions`).run();
}
//# sourceMappingURL=actions.js.map