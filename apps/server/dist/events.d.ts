import { EventEmitter } from "node:events";
export type AlertRecord = {
    id: string;
    service: string;
    severity: string;
    summary: string;
    metadata: Record<string, unknown>;
    status: string;
    createdAt: string;
    updatedAt: string;
    ackedBy?: string;
    resolvedBy?: string;
    resolution?: string;
};
export type AgentActivity = {
    agentName: string;
    activity: string;
    status: "started" | "in_progress" | "completed" | "failed";
    timestamp: string;
    metadata?: Record<string, unknown>;
};
export type IncidentEvent = {
    type: "alert_created" | "alert_acked" | "alert_resolved" | "action_created" | "action_approved" | "action_rejected";
    incidentId: string;
    data: unknown;
    timestamp: string;
};
declare class SentinelOpsEventEmitter extends EventEmitter {
    broadcastAgentActivity(activity: AgentActivity): void;
    broadcastIncidentEvent(event: IncidentEvent): void;
    broadcastAlertCreated(alert: AlertRecord): void;
    broadcastActionUpdate(actionId: string, incidentId: string, status: string): void;
}
export declare const eventBus: SentinelOpsEventEmitter;
export {};
