import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

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

const alertsStore = new Map<string, AlertRecord>();
const alertSubscribers = new Set<string>();

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

export function createAlert(input: z.infer<typeof CreateAlertInputSchema>): AlertRecord {
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

  alertsStore.set(alert.id, alert);

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
  const alert = alertsStore.get(input.alertId);
  if (!alert) {
    throw new Error(`Alert ${input.alertId} not found`);
  }

  const now = new Date().toISOString();
  const updated: AlertRecord = {
    ...alert,
    status: "ACKED",
    ackedBy: input.user,
    updatedAt: now,
  };

  alertsStore.set(alert.id, updated);

  return updated;
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
  const alert = alertsStore.get(input.alertId);
  if (!alert) {
    throw new Error(`Alert ${input.alertId} not found`);
  }

  const now = new Date().toISOString();
  const updated: AlertRecord = {
    ...alert,
    status: "RESOLVED",
    resolution: input.resolution,
    resolvedBy: input.resolvedBy,
    updatedAt: now,
  };

  alertsStore.set(alert.id, updated);

  return updated;
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
    alertSubscribers.add(context.handlerUrl);
    return { success: true, subscribers: alertSubscribers.size };
  },
});

export function listAlerts(): AlertRecord[] {
  return Array.from(alertsStore.values()).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getAlert(alertId: string): AlertRecord | undefined {
  return alertsStore.get(alertId);
}

export function listAlertSubscribers(): string[] {
  return Array.from(alertSubscribers.values());
}

export function clearAlerts() {
  alertsStore.clear();
  alertSubscribers.clear();
}
