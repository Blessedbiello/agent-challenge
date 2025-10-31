"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeAlertsTool = exports.resolveAlertTool = exports.ackAlertTool = exports.createAlertTool = exports.ResolveAlertInputSchema = exports.AckAlertInputSchema = exports.CreateAlertInputSchema = exports.AlertSeveritySchema = void 0;
exports.createAlert = createAlert;
exports.ackAlert = ackAlert;
exports.resolveAlert = resolveAlert;
exports.listAlerts = listAlerts;
exports.getAlert = getAlert;
exports.listAlertSubscribers = listAlertSubscribers;
exports.clearAlerts = clearAlerts;
const node_crypto_1 = require("node:crypto");
const tools_1 = require("@mastra/core/tools");
const zod_1 = require("zod");
const persistence_1 = require("@sentinelops/persistence");
exports.AlertSeveritySchema = zod_1.z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]);
const AlertMetadataSchema = zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional();
exports.CreateAlertInputSchema = zod_1.z.object({
    service: zod_1.z.string().min(1),
    severity: exports.AlertSeveritySchema,
    summary: zod_1.z.string().min(1),
    metadata: AlertMetadataSchema.default({}),
});
exports.AckAlertInputSchema = zod_1.z.object({
    alertId: zod_1.z.string().min(1),
    user: zod_1.z.string().min(1),
});
exports.ResolveAlertInputSchema = zod_1.z.object({
    alertId: zod_1.z.string().min(1),
    resolution: zod_1.z.string().min(1),
    resolvedBy: zod_1.z.string().optional(),
});
const SubscribeAlertInputSchema = zod_1.z.object({
    handlerUrl: zod_1.z.string().url(),
});
const AlertRecordSchema = zod_1.z.object({
    id: zod_1.z.string(),
    service: zod_1.z.string(),
    severity: exports.AlertSeveritySchema,
    summary: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()),
    status: zod_1.z.enum(["OPEN", "ACKED", "RESOLVED"]),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    ackedBy: zod_1.z.string().optional(),
    resolvedBy: zod_1.z.string().optional(),
    resolution: zod_1.z.string().optional(),
});
function deserializeAlert(row) {
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
function createAlert(input) {
    const db = (0, persistence_1.getDb)();
    const now = new Date().toISOString();
    const alert = {
        id: (0, node_crypto_1.randomUUID)(),
        service: input.service,
        severity: input.severity,
        summary: input.summary,
        metadata: input.metadata ?? {},
        status: "OPEN",
        createdAt: now,
        updatedAt: now,
    };
    db.prepare(`INSERT INTO alerts (id, service, severity, summary, metadata, status, created_at, updated_at)
     VALUES (@id, @service, @severity, @summary, @metadata, @status, @createdAt, @updatedAt)`).run({
        ...alert,
        metadata: JSON.stringify(alert.metadata),
    });
    return alert;
}
exports.createAlertTool = (0, tools_1.createTool)({
    id: "alerts.create",
    description: "Create a new alert record and broadcast to subscribers",
    inputSchema: exports.CreateAlertInputSchema,
    outputSchema: AlertRecordSchema,
    execute: async ({ context }) => {
        return createAlert(context);
    },
});
function ackAlert(input) {
    const db = (0, persistence_1.getDb)();
    const existing = db
        .prepare(`SELECT * FROM alerts WHERE id = ?`)
        .get(input.alertId);
    if (!existing) {
        throw new Error(`Alert ${input.alertId} not found`);
    }
    const now = new Date().toISOString();
    db.prepare(`UPDATE alerts
     SET status = ?, acked_by = ?, updated_at = ?
     WHERE id = ?`).run("ACKED", input.user, now, input.alertId);
    const updated = db.prepare(`SELECT * FROM alerts WHERE id = ?`).get(input.alertId);
    return deserializeAlert(updated);
}
exports.ackAlertTool = (0, tools_1.createTool)({
    id: "alerts.ack",
    description: "Acknowledge an alert on behalf of a user",
    inputSchema: exports.AckAlertInputSchema,
    outputSchema: AlertRecordSchema,
    execute: async ({ context }) => {
        return ackAlert(context);
    },
});
function resolveAlert(input) {
    const db = (0, persistence_1.getDb)();
    const existing = db
        .prepare(`SELECT * FROM alerts WHERE id = ?`)
        .get(input.alertId);
    if (!existing) {
        throw new Error(`Alert ${input.alertId} not found`);
    }
    const now = new Date().toISOString();
    db.prepare(`UPDATE alerts
     SET status = ?, resolution = ?, resolved_by = ?, updated_at = ?
     WHERE id = ?`).run("RESOLVED", input.resolution, input.resolvedBy ?? null, now, input.alertId);
    const updated = db.prepare(`SELECT * FROM alerts WHERE id = ?`).get(input.alertId);
    return deserializeAlert(updated);
}
exports.resolveAlertTool = (0, tools_1.createTool)({
    id: "alerts.resolve",
    description: "Resolve an alert after remediation",
    inputSchema: exports.ResolveAlertInputSchema,
    outputSchema: AlertRecordSchema,
    execute: async ({ context }) => {
        return resolveAlert(context);
    },
});
exports.subscribeAlertsTool = (0, tools_1.createTool)({
    id: "alerts.subscribe",
    description: "Register a webhook endpoint for alert fan-out",
    inputSchema: SubscribeAlertInputSchema,
    outputSchema: zod_1.z.object({ success: zod_1.z.boolean(), subscribers: zod_1.z.number() }),
    execute: async ({ context }) => {
        const db = (0, persistence_1.getDb)();
        db.prepare(`INSERT INTO alert_subscribers (handler_url, subscribed_at)
       VALUES (?, ?)
       ON CONFLICT(handler_url) DO UPDATE SET subscribed_at = excluded.subscribed_at`).run(context.handlerUrl, new Date().toISOString());
        const count = db.prepare(`SELECT COUNT(*) AS count FROM alert_subscribers`).get();
        return { success: true, subscribers: count.count };
    },
});
function listAlerts() {
    const db = (0, persistence_1.getDb)();
    const rows = db.prepare(`SELECT * FROM alerts ORDER BY created_at DESC`).all();
    return rows.map(deserializeAlert);
}
function getAlert(alertId) {
    const db = (0, persistence_1.getDb)();
    const row = db.prepare(`SELECT * FROM alerts WHERE id = ?`).get(alertId);
    return row ? deserializeAlert(row) : undefined;
}
function listAlertSubscribers() {
    const db = (0, persistence_1.getDb)();
    const rows = db
        .prepare(`SELECT handler_url FROM alert_subscribers ORDER BY handler_url ASC`)
        .all();
    return rows.map((row) => row.handler_url);
}
function clearAlerts() {
    const db = (0, persistence_1.getDb)();
    db.prepare(`DELETE FROM alerts`).run();
    db.prepare(`DELETE FROM alert_subscribers`).run();
}
//# sourceMappingURL=alerts.js.map