import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { getDb } from "@sentinelops/persistence";

type AlertStatus = "OPEN" | "ACKED" | "RESOLVED";

export type AlertRecord = {
  id: string;
  service: string;
  severity: AlertSeverity;
  summary: string;
  metadata: Record<string, unknown>;
  status: AlertStatus;
  createdAt: string;
  updatedAt: string;
  ackedBy?: string;
  resolvedBy?: string;
  resolution?: string;
};

export const AlertSeveritySchema = z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]);
export type AlertSeverity = z.infer<typeof AlertSeveritySchema>;

const AlertMetadataSchema = z.record(z.string(), z.any()).optional();

export const CreateAlertInputSchema = z.object({
  service: z.string().min(1),
  severity: AlertSeveritySchema,
  summary: z.string().min(1),
  metadata: AlertMetadataSchema.default({}),
});

export const AckAlertInputSchema = z.object({
  alertId: z.string().min(1),
  user: z.string().min(1),
});

export const ResolveAlertInputSchema = z.object({
  alertId: z.string().min(1),
  resolution: z.string().min(1),
  resolvedBy: z.string().optional(),
});

const SubscribeAlertInputSchema = z.object({
  handlerUrl: z.string().url(),
});

const AlertRecordSchema = z.object({
  id: z.string(),
  service: z.string(),
  severity: AlertSeveritySchema,
  summary: z.string(),
  metadata: z.record(z.string(), z.any()),
  status: z.enum(["OPEN", "ACKED", "RESOLVED"]),
  createdAt: z.string(),
  updatedAt: z.string(),
  ackedBy: z.string().optional(),
  resolvedBy: z.string().optional(),
  resolution: z.string().optional(),
});

function deserializeAlert(row: any): AlertRecord {
  return {
    id: row.id,
    service: row.service,
    severity: row.severity,
    summary: row.summary,
    metadata: row.metadata ? JSON.parse(row.metadata) : {},
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    ackedBy: row.acked_by ?? undefined,
    resolvedBy: row.resolved_by ?? undefined,
    resolution: row.resolution ?? undefined,
  };
}

export function createAlert(input: z.infer<typeof CreateAlertInputSchema>): AlertRecord {
  const db = getDb();
  const now = new Date().toISOString();
  const alert: AlertRecord = {
    id: randomUUID(),
    service: input.service,
    severity: input.severity,
    summary: input.summary,
    metadata: input.metadata ?? {},
    status: "OPEN",
    createdAt: now,
    updatedAt: now,
  };

  db.prepare(
    `INSERT INTO alerts (id, service, severity, summary, metadata, status, created_at, updated_at)
     VALUES (@id, @service, @severity, @summary, @metadata, @status, @createdAt, @updatedAt)`
  ).run({
    ...alert,
    metadata: JSON.stringify(alert.metadata),
  });

  return alert;
}

export const createAlertTool = createTool({
  id: "alerts.create",
  description: "Create a new alert record and broadcast to subscribers",
  inputSchema: CreateAlertInputSchema,
  outputSchema: AlertRecordSchema,
  execute: async ({ context }) => {
    return createAlert(context);
  },
});

export function ackAlert(input: z.infer<typeof AckAlertInputSchema>): AlertRecord {
  const db = getDb();
  const existing = db
    .prepare(`SELECT * FROM alerts WHERE id = ?`)
    .get(input.alertId);

  if (!existing) {
    throw new Error(`Alert ${input.alertId} not found`);
  }

  const now = new Date().toISOString();
  db.prepare(
    `UPDATE alerts
     SET status = ?, acked_by = ?, updated_at = ?
     WHERE id = ?`
  ).run("ACKED", input.user, now, input.alertId);

  const updated = db.prepare(`SELECT * FROM alerts WHERE id = ?`).get(input.alertId);
  return deserializeAlert(updated);
}

export const ackAlertTool = createTool({
  id: "alerts.ack",
  description: "Acknowledge an alert on behalf of a user",
  inputSchema: AckAlertInputSchema,
  outputSchema: AlertRecordSchema,
  execute: async ({ context }) => {
    return ackAlert(context);
  },
});

export function resolveAlert(input: z.infer<typeof ResolveAlertInputSchema>): AlertRecord {
  const db = getDb();
  const existing = db
    .prepare(`SELECT * FROM alerts WHERE id = ?`)
    .get(input.alertId);

  if (!existing) {
    throw new Error(`Alert ${input.alertId} not found`);
  }

  const now = new Date().toISOString();
  db.prepare(
    `UPDATE alerts
     SET status = ?, resolution = ?, resolved_by = ?, updated_at = ?
     WHERE id = ?`
  ).run("RESOLVED", input.resolution, input.resolvedBy ?? null, now, input.alertId);

  const updated = db.prepare(`SELECT * FROM alerts WHERE id = ?`).get(input.alertId);
  return deserializeAlert(updated);
}

export const resolveAlertTool = createTool({
  id: "alerts.resolve",
  description: "Resolve an alert after remediation",
  inputSchema: ResolveAlertInputSchema,
  outputSchema: AlertRecordSchema,
  execute: async ({ context }) => {
    return resolveAlert(context);
  },
});

export const subscribeAlertsTool = createTool({
  id: "alerts.subscribe",
  description: "Register a webhook endpoint for alert fan-out",
  inputSchema: SubscribeAlertInputSchema,
  outputSchema: z.object({ success: z.boolean(), subscribers: z.number() }),
  execute: async ({ context }) => {
    const db = getDb();
    db.prepare(
      `INSERT INTO alert_subscribers (handler_url, subscribed_at)
       VALUES (?, ?)
       ON CONFLICT(handler_url) DO UPDATE SET subscribed_at = excluded.subscribed_at`
    ).run(context.handlerUrl, new Date().toISOString());

    const count = db.prepare(`SELECT COUNT(*) AS count FROM alert_subscribers`).get() as { count: number };
    return { success: true, subscribers: count.count };
  },
});

export function listAlerts(): AlertRecord[] {
  const db = getDb();
  const rows = db.prepare(`SELECT * FROM alerts ORDER BY created_at DESC`).all();
  return rows.map(deserializeAlert);
}

export function getAlert(alertId: string): AlertRecord | undefined {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM alerts WHERE id = ?`).get(alertId);
  return row ? deserializeAlert(row) : undefined;
}

export function listAlertSubscribers(): string[] {
  const db = getDb();
  const rows = db
    .prepare(`SELECT handler_url FROM alert_subscribers ORDER BY handler_url ASC`)
    .all() as Array<{ handler_url: string }>;
  return rows.map((row) => row.handler_url);
}

export function clearAlerts() {
  const db = getDb();
  db.prepare(`DELETE FROM alerts`).run();
  db.prepare(`DELETE FROM alert_subscribers`).run();
}
