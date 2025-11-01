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

class SentinelOpsEventEmitter extends EventEmitter {
  broadcastAgentActivity(activity: AgentActivity) {
    this.emit("agent:activity", activity);
  }

  broadcastIncidentEvent(event: IncidentEvent) {
    this.emit("incident:event", event);
  }

  broadcastAlertCreated(alert: AlertRecord) {
    this.emit("incident:event", {
      type: "alert_created",
      incidentId: alert.id,
      data: alert,
      timestamp: new Date().toISOString(),
    });
  }

  broadcastAlertAcknowledged(alert: AlertRecord) {
    this.emit("incident:event", {
      type: "alert_acked",
      incidentId: alert.id,
      data: alert,
      timestamp: new Date().toISOString(),
    });
  }

  broadcastAlertResolved(alert: AlertRecord) {
    this.emit("incident:event", {
      type: "alert_resolved",
      incidentId: alert.id,
      data: alert,
      timestamp: new Date().toISOString(),
    });
  }

  broadcastActionCreated(actionId: string, incidentId: string) {
    this.emit("incident:event", {
      type: "action_created",
      incidentId,
      data: { actionId },
      timestamp: new Date().toISOString(),
    });
  }

  broadcastActionUpdate(actionId: string, incidentId: string, status: string) {
    this.emit("incident:event", {
      type: status === "APPROVED" ? "action_approved" : "action_rejected",
      incidentId,
      data: { actionId, status },
      timestamp: new Date().toISOString(),
    });
  }
}

export const eventBus = new SentinelOpsEventEmitter();
