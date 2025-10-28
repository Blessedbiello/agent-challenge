import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

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

const logsStore = new Map<string, LogRecord>();

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

export function ingestLog(input: z.infer<typeof IngestLogInputSchema>): LogRecord {
  const record: LogRecord = {
    id: randomUUID(),
    incidentId: input.incidentId,
    source: input.source,
    level: input.level,
    message: input.message,
    metadata: input.metadata,
    timestamp: new Date().toISOString(),
  };

  logsStore.set(record.id, record);

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
    let logs = Array.from(logsStore.values());

    const query = context.query.toLowerCase();
    logs = logs.filter((log) =>
      log.message.toLowerCase().includes(query) ||
      JSON.stringify(log.metadata).toLowerCase().includes(query)
    );

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
    const now = Date.now();
    const logs = Array.from(logsStore.values()).filter((log) => log.incidentId === context.incidentId);
    logs.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));

    const expiresAt = new Date(now + context.ttlSeconds * 1000).toISOString();

    return {
      incidentId: context.incidentId,
      logs,
      expiresAt,
    };
  },
});

export function listLogs(): LogRecord[] {
  return Array.from(logsStore.values());
}

export function clearLogs() {
  logsStore.clear();
}
