import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { getDb } from "@sentinelops/persistence";

export type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";

export type LogRecord = {
  id: string;
  incidentId: string;
  source: string;
  level: LogLevel;
  message: string;
  metadata: Record<string, unknown>;
  timestamp: string;
};

const LogLevelSchema = z.enum(["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]);

export const IngestLogInputSchema = z.object({
  incidentId: z.string().min(1),
  source: z.string().default("unspecified"),
  level: LogLevelSchema.default("INFO"),
  message: z.string().min(1),
  metadata: z.record(z.string(), z.any()).default({}),
});

const LogRecordSchema: z.ZodType<LogRecord> = z.object({
  id: z.string(),
  incidentId: z.string(),
  source: z.string(),
  level: LogLevelSchema,
  message: z.string(),
  metadata: z.record(z.string(), z.any()),
  timestamp: z.string(),
});

const TimeRangeSchema = z.object({
  from: z.string().datetime({ offset: true }).optional(),
  to: z.string().datetime({ offset: true }).optional(),
});

const QueryLogsInputSchema = z.object({
  query: z.string().min(1),
  timeRange: TimeRangeSchema.optional(),
  limit: z.number().int().positive().max(1000).default(100),
});

const SampleLogsInputSchema = z.object({
  incidentId: z.string().min(1),
  ttlSeconds: z.number().int().positive().default(300),
});

function deserializeLog(row: any): LogRecord {
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

export function ingestLog(input: z.infer<typeof IngestLogInputSchema>): LogRecord {
  const db = getDb();
  const record: LogRecord = {
    id: randomUUID(),
    incidentId: input.incidentId,
    source: input.source,
    level: input.level,
    message: input.message,
    metadata: input.metadata,
    timestamp: new Date().toISOString(),
  };

  db.prepare(
    `INSERT INTO logs (id, incident_id, source, level, message, metadata, timestamp)
     VALUES (@id, @incidentId, @source, @level, @message, @metadata, @timestamp)`
  ).run({
    ...record,
    metadata: JSON.stringify(record.metadata),
  });

  return record;
}

export const ingestLogTool = createTool({
  id: "logs.ingest",
  description: "Persist a log entry for a tracked incident",
  inputSchema: IngestLogInputSchema,
  outputSchema: LogRecordSchema,
  execute: async ({ context }) => {
    return ingestLog(context);
  },
});

export const queryLogsTool = createTool({
  id: "logs.query",
  description: "Query stored logs using a simple substring filter",
  inputSchema: QueryLogsInputSchema,
  outputSchema: z.object({
    count: z.number(),
    logs: z.array(LogRecordSchema),
  }),
  execute: async ({ context }) => {
    const db = getDb();
    const conditions: string[] = [];
    const params: any[] = [];

    const pattern = `%${context.query.toLowerCase()}%`;
    conditions.push("(LOWER(message) LIKE ? OR LOWER(COALESCE(metadata, '')) LIKE ?)");
    params.push(pattern, pattern);

    if (context.timeRange?.from) {
      conditions.push("timestamp >= ?");
      params.push(context.timeRange.from);
    }

    if (context.timeRange?.to) {
      conditions.push("timestamp <= ?");
      params.push(context.timeRange.to);
    }

    const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
    const rows = db
      .prepare(`SELECT * FROM logs ${whereClause} ORDER BY timestamp DESC LIMIT ?`)
      .all(...params, context.limit);

    const logs = rows.map(deserializeLog);
    return { count: logs.length, logs };
  },
});

export const sampleLogsTool = createTool({
  id: "logs.sample",
  description: "Fetch representative logs for an incident with a TTL",
  inputSchema: SampleLogsInputSchema,
  outputSchema: z.object({
    incidentId: z.string(),
    logs: z.array(LogRecordSchema),
    expiresAt: z.string(),
  }),
  execute: async ({ context }) => {
    const db = getDb();
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

export function listLogs(): LogRecord[] {
  const db = getDb();
  const rows = db.prepare(`SELECT * FROM logs ORDER BY timestamp DESC`).all();
  return rows.map(deserializeLog);
}

export function clearLogs() {
  const db = getDb();
  db.prepare(`DELETE FROM logs`).run();
}
