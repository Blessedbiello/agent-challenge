"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleLogsTool = exports.queryLogsTool = exports.ingestLogTool = exports.IngestLogInputSchema = void 0;
exports.ingestLog = ingestLog;
exports.listLogs = listLogs;
exports.clearLogs = clearLogs;
const node_crypto_1 = require("node:crypto");
const tools_1 = require("@mastra/core/tools");
const zod_1 = require("zod");
const persistence_1 = require("@sentinelops/persistence");
const LogLevelSchema = zod_1.z.enum(["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]);
exports.IngestLogInputSchema = zod_1.z.object({
    incidentId: zod_1.z.string().min(1),
    source: zod_1.z.string().default("unspecified"),
    level: LogLevelSchema.default("INFO"),
    message: zod_1.z.string().min(1),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).default({}),
});
const LogRecordSchema = zod_1.z.object({
    id: zod_1.z.string(),
    incidentId: zod_1.z.string(),
    source: zod_1.z.string(),
    level: LogLevelSchema,
    message: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()),
    timestamp: zod_1.z.string(),
});
const TimeRangeSchema = zod_1.z.object({
    from: zod_1.z.string().datetime({ offset: true }).optional(),
    to: zod_1.z.string().datetime({ offset: true }).optional(),
});
const QueryLogsInputSchema = zod_1.z.object({
    query: zod_1.z.string().min(1),
    timeRange: TimeRangeSchema.optional(),
    limit: zod_1.z.number().int().positive().max(1000).default(100),
});
const SampleLogsInputSchema = zod_1.z.object({
    incidentId: zod_1.z.string().min(1),
    ttlSeconds: zod_1.z.number().int().positive().default(300),
});
function deserializeLog(row) {
    return {
        id: row.id,
        incidentId: row.incident_id,
        source: row.source,
        level: row.level,
        message: row.message,
        metadata: row.metadata ? JSON.parse(row.metadata) : {},
        timestamp: row.timestamp,
    };
}
function ingestLog(input) {
    const db = (0, persistence_1.getDb)();
    const record = {
        id: (0, node_crypto_1.randomUUID)(),
        incidentId: input.incidentId,
        source: input.source,
        level: input.level,
        message: input.message,
        metadata: input.metadata,
        timestamp: new Date().toISOString(),
    };
    db.prepare(`INSERT INTO logs (id, incident_id, source, level, message, metadata, timestamp)
     VALUES (@id, @incidentId, @source, @level, @message, @metadata, @timestamp)`).run({
        ...record,
        metadata: JSON.stringify(record.metadata),
    });
    return record;
}
exports.ingestLogTool = (0, tools_1.createTool)({
    id: "logs.ingest",
    description: "Persist a log entry for a tracked incident",
    inputSchema: exports.IngestLogInputSchema,
    outputSchema: LogRecordSchema,
    execute: async ({ context }) => {
        return ingestLog(context);
    },
});
exports.queryLogsTool = (0, tools_1.createTool)({
    id: "logs.query",
    description: "Query stored logs using a simple substring filter",
    inputSchema: QueryLogsInputSchema,
    outputSchema: zod_1.z.object({
        count: zod_1.z.number(),
        logs: zod_1.z.array(LogRecordSchema),
    }),
    execute: async ({ context }) => {
        const db = (0, persistence_1.getDb)();
        const rows = db.prepare(`SELECT * FROM logs ORDER BY timestamp DESC`).all();
        let logs = rows.map(deserializeLog);
        const query = context.query.toLowerCase();
        logs = logs.filter((log) => log.message.toLowerCase().includes(query) ||
            JSON.stringify(log.metadata).toLowerCase().includes(query));
        if (context.timeRange?.from) {
            const from = context.timeRange.from;
            logs = logs.filter((log) => log.timestamp >= from);
        }
        if (context.timeRange?.to) {
            const to = context.timeRange.to;
            logs = logs.filter((log) => log.timestamp <= to);
        }
        logs.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
        const limited = logs.slice(0, context.limit);
        return { count: limited.length, logs: limited };
    },
});
exports.sampleLogsTool = (0, tools_1.createTool)({
    id: "logs.sample",
    description: "Fetch representative logs for an incident with a TTL",
    inputSchema: SampleLogsInputSchema,
    outputSchema: zod_1.z.object({
        incidentId: zod_1.z.string(),
        logs: zod_1.z.array(LogRecordSchema),
        expiresAt: zod_1.z.string(),
    }),
    execute: async ({ context }) => {
        const db = (0, persistence_1.getDb)();
        const rows = db
            .prepare(`SELECT * FROM logs WHERE incident_id = ? ORDER BY timestamp DESC`)
            .all(context.incidentId);
        const logs = rows.map(deserializeLog);
        const expiresAt = new Date(Date.now() + context.ttlSeconds * 1000).toISOString();
        return {
            incidentId: context.incidentId,
            logs,
            expiresAt,
        };
    },
});
function listLogs() {
    const db = (0, persistence_1.getDb)();
    const rows = db.prepare(`SELECT * FROM logs ORDER BY timestamp DESC`).all();
    return rows.map(deserializeLog);
}
function clearLogs() {
    const db = (0, persistence_1.getDb)();
    db.prepare(`DELETE FROM logs`).run();
}
//# sourceMappingURL=logs.js.map