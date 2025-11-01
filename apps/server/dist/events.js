"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBus = void 0;
const node_events_1 = require("node:events");
class SentinelOpsEventEmitter extends node_events_1.EventEmitter {
    broadcastAgentActivity(activity) {
        this.emit("agent:activity", activity);
    }
    broadcastIncidentEvent(event) {
        this.emit("incident:event", event);
    }
    broadcastAlertCreated(alert) {
        this.emit("incident:event", {
            type: "alert_created",
            incidentId: alert.id,
            data: alert,
            timestamp: new Date().toISOString(),
        });
    }
    broadcastAlertAcknowledged(alert) {
        this.emit("incident:event", {
            type: "alert_acked",
            incidentId: alert.id,
            data: alert,
            timestamp: new Date().toISOString(),
        });
    }
    broadcastAlertResolved(alert) {
        this.emit("incident:event", {
            type: "alert_resolved",
            incidentId: alert.id,
            data: alert,
            timestamp: new Date().toISOString(),
        });
    }
    broadcastActionCreated(actionId, incidentId) {
        this.emit("incident:event", {
            type: "action_created",
            incidentId,
            data: { actionId },
            timestamp: new Date().toISOString(),
        });
    }
    broadcastActionUpdate(actionId, incidentId, status) {
        this.emit("incident:event", {
            type: status === "APPROVED" ? "action_approved" : "action_rejected",
            incidentId,
            data: { actionId, status },
            timestamp: new Date().toISOString(),
        });
    }
}
exports.eventBus = new SentinelOpsEventEmitter();
//# sourceMappingURL=events.js.map