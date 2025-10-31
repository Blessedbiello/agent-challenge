"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerChaosIncident = triggerChaosIncident;
exports.listChaosScenarios = listChaosScenarios;
const tools_1 = require("@sentinelops/tools");
const events_1 = require("./events");
const CHAOS_SCENARIOS = [
    {
        name: "OOM in Inference Pipeline",
        service: "gpu-worker-3",
        severity: "HIGH",
        summary: "Out of memory detected in inference pipeline - batch size too large",
        logs: [
            { level: "ERROR", message: "OutOfMemoryError: Failed to allocate tensor of shape [1024, 2048, 512]" },
            { level: "WARN", message: "GPU memory utilization at 97%" },
            { level: "ERROR", message: "Worker crashed with exit code 137 (OOM killed)" },
        ],
    },
    {
        name: "Database Connection Pool Exhausted",
        service: "api-gateway",
        severity: "CRITICAL",
        summary: "Connection pool exhausted - too many concurrent requests",
        logs: [
            { level: "ERROR", message: "Connection pool exhausted: max 100 connections reached" },
            { level: "WARN", message: "Request queue depth: 347 pending requests" },
            { level: "ERROR", message: "Timeout acquiring database connection after 30s" },
        ],
    },
    {
        name: "Cascade Failure from Auth Service",
        service: "auth-service",
        severity: "HIGH",
        summary: "Auth service degraded causing downstream failures",
        logs: [
            { level: "ERROR", message: "Auth token validation taking >5s (p99)" },
            { level: "WARN", message: "Circuit breaker opened for auth-service" },
            { level: "ERROR", message: "503 Service Unavailable from 15 dependent services" },
        ],
    },
    {
        name: "Deployment Rollout Issue",
        service: "deploy-proxy",
        severity: "MEDIUM",
        summary: "New deployment v2024.10.30 showing 5x error rate increase",
        logs: [
            { level: "WARN", message: "Error rate spike detected: 0.2% -> 1.1% after deployment" },
            { level: "ERROR", message: "Null pointer exception in new feature code path" },
            { level: "INFO", message: "Rollback candidate identified: v2024.10.29" },
        ],
    },
];
async function triggerChaosIncident(scenarioIndex) {
    const scenario = scenarioIndex !== undefined
        ? CHAOS_SCENARIOS[scenarioIndex % CHAOS_SCENARIOS.length]
        : CHAOS_SCENARIOS[Math.floor(Math.random() * CHAOS_SCENARIOS.length)];
    // Broadcast chaos mode activation
    events_1.eventBus.broadcastAgentActivity({
        agentName: "ChaosEngineer",
        activity: `Injecting ${scenario.name} incident for demo`,
        status: "started",
        timestamp: new Date().toISOString(),
        metadata: { scenario: scenario.name, service: scenario.service },
    });
    // Create the alert
    const alert = (0, tools_1.createAlert)({
        service: scenario.service,
        severity: scenario.severity,
        summary: scenario.summary,
        metadata: {
            chaosMode: true,
            scenario: scenario.name,
            triggeredAt: new Date().toISOString(),
        },
    });
    // Broadcast alert creation
    events_1.eventBus.broadcastAlertCreated(alert);
    // Ingest related logs with a small delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    for (const log of scenario.logs) {
        (0, tools_1.ingestLog)({
            incidentId: alert.id,
            source: scenario.service,
            level: log.level,
            message: log.message,
            metadata: { chaosMode: true },
        });
        await new Promise((resolve) => setTimeout(resolve, 200));
    }
    // Broadcast completion
    events_1.eventBus.broadcastAgentActivity({
        agentName: "ChaosEngineer",
        activity: `Chaos incident ${alert.id} injected successfully`,
        status: "completed",
        timestamp: new Date().toISOString(),
        metadata: { incidentId: alert.id },
    });
    return {
        incidentId: alert.id,
        scenario: scenario.name,
    };
}
function listChaosScenarios() {
    return CHAOS_SCENARIOS.map((scenario, index) => ({
        index,
        name: scenario.name,
        service: scenario.service,
        severity: scenario.severity,
    }));
}
//# sourceMappingURL=chaos.js.map