import { createAlert, createIncidentAction, ingestLog } from "@sentinelops/tools";
import { eventBus } from "./events";

const CHAOS_SCENARIOS = [
  {
    name: "OOM in Inference Pipeline",
    service: "gpu-worker-3",
    severity: "HIGH" as const,
    summary: "Out of memory detected in inference pipeline - batch size too large",
    logs: [
      { level: "ERROR" as const, message: "OutOfMemoryError: Failed to allocate tensor of shape [1024, 2048, 512]" },
      { level: "WARN" as const, message: "GPU memory utilization at 97%" },
      { level: "ERROR" as const, message: "Worker crashed with exit code 137 (OOM killed)" },
    ],
  },
  {
    name: "Database Connection Pool Exhausted",
    service: "api-gateway",
    severity: "CRITICAL" as const,
    summary: "Connection pool exhausted - too many concurrent requests",
    logs: [
      { level: "ERROR" as const, message: "Connection pool exhausted: max 100 connections reached" },
      { level: "WARN" as const, message: "Request queue depth: 347 pending requests" },
      { level: "ERROR" as const, message: "Timeout acquiring database connection after 30s" },
    ],
  },
  {
    name: "Cascade Failure from Auth Service",
    service: "auth-service",
    severity: "HIGH" as const,
    summary: "Auth service degraded causing downstream failures",
    logs: [
      { level: "ERROR" as const, message: "Auth token validation taking >5s (p99)" },
      { level: "WARN" as const, message: "Circuit breaker opened for auth-service" },
      { level: "ERROR" as const, message: "503 Service Unavailable from 15 dependent services" },
    ],
  },
  {
    name: "Deployment Rollout Issue",
    service: "deploy-proxy",
    severity: "MEDIUM" as const,
    summary: "New deployment v2024.10.30 showing 5x error rate increase",
    logs: [
      { level: "WARN" as const, message: "Error rate spike detected: 0.2% -> 1.1% after deployment" },
      { level: "ERROR" as const, message: "Null pointer exception in new feature code path" },
      { level: "INFO" as const, message: "Rollback candidate identified: v2024.10.29" },
    ],
  },
];

export async function triggerChaosIncident(scenarioIndex?: number): Promise<{ incidentId: string; scenario: string }> {
  const scenario = scenarioIndex !== undefined
    ? CHAOS_SCENARIOS[scenarioIndex % CHAOS_SCENARIOS.length]
    : CHAOS_SCENARIOS[Math.floor(Math.random() * CHAOS_SCENARIOS.length)];

  // Broadcast chaos mode activation
  eventBus.broadcastAgentActivity({
    agentName: "ChaosEngineer",
    activity: `Injecting ${scenario.name} incident for demo`,
    status: "started",
    timestamp: new Date().toISOString(),
    metadata: { scenario: scenario.name, service: scenario.service },
  });

  // Create the alert
  const alert = createAlert({
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
  eventBus.broadcastAlertCreated(alert);

  // Ingest related logs with a small delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  for (const log of scenario.logs) {
    ingestLog({
      incidentId: alert.id,
      source: scenario.service,
      level: log.level,
      message: log.message,
      metadata: { chaosMode: true },
    });

    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  // Broadcast completion
  eventBus.broadcastAgentActivity({
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

export function listChaosScenarios() {
  return CHAOS_SCENARIOS.map((scenario, index) => ({
    index,
    name: scenario.name,
    service: scenario.service,
    severity: scenario.severity,
  }));
}
