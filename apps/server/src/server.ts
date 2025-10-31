import Fastify, { type FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";
import type { WebSocket } from "ws";
import { agentsRegistry, incidentCommanderAgent } from "@sentinelops/agents";
import { mcpServersRegistry } from "./mcpRegistry";
import { initDb } from "@sentinelops/persistence";
import {
  getDashboardSnapshot,
  ensureMockData,
} from "./mock-data";
import {
  CreateAlertInputSchema,
  AckAlertInputSchema,
  ResolveAlertInputSchema,
  createAlert,
  ackAlert,
  resolveAlert,
  listAlerts,
  DeploySpecSchema,
  createDeployJob,
  createRollbackJob,
  listJobs,
  listPostmortems,
  listLogs,
  CreateIncidentActionSchema,
  createIncidentAction,
  listIncidentActions,
  updateIncidentActionStatus,
  createStrategy,
  listStrategies,
} from "@sentinelops/tools";
import { z } from "zod";
import { env } from "./env";
import { eventBus, type AgentActivity, type IncidentEvent } from "./events";

export type Server = FastifyInstance;

export function createServer(): Server {
  const app = Fastify({
    logger: {
      level: env.LOG_LEVEL,
    },
  });

  initDb();
  ensureMockData();

  app.register(cors, {
    origin: true,
    credentials: false,
  });

  app.register(websocket);

  // WebSocket clients registry
  const wsClients = new Set<WebSocket>();

  // WebSocket endpoint for real-time updates
  app.get("/ws", { websocket: true }, (socket, request) => {
    wsClients.add(socket);

    socket.send(JSON.stringify({
      type: "connected",
      timestamp: new Date().toISOString(),
      message: "Connected to SentinelOps real-time stream",
    }));

    socket.on("close", () => {
      wsClients.delete(socket);
    });

    socket.on("error", (error: Error) => {
      app.log.error({ err: error }, "WebSocket error");
      wsClients.delete(socket);
    });
  });

  // Broadcast agent activities to all connected clients
  eventBus.on("agent:activity", (activity: AgentActivity) => {
    const message = JSON.stringify({
      type: "agent:activity",
      data: activity,
      timestamp: new Date().toISOString(),
    });

    wsClients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });
  });

  // Broadcast incident events to all connected clients
  eventBus.on("incident:event", (event: IncidentEvent) => {
    const message = JSON.stringify({
      type: "incident:event",
      data: event,
      timestamp: new Date().toISOString(),
    });

    wsClients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });
  });

  app.get("/healthz", async () => {
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: env.NODE_ENV,
    };
  });

  app.get("/v1/agents", async () => {
    const agents = Object.entries(agentsRegistry).map(([key, agent]) => ({
      id: key,
      name: agent.name,
      description: agent.instructions || null,
      tools: Object.keys(agent.tools ?? {}),
    }));

    return {
      count: agents.length,
      agents,
    };
  });

  app.get("/v1/status", async () => {
    return {
      environment: env.NODE_ENV,
      agents: Object.keys(agentsRegistry).length,
      mcpServers: Object.keys(mcpServersRegistry).length,
    };
  });

  app.get("/v1/dashboard", async () => {
    return getDashboardSnapshot();
  });

  // SSE endpoint for live incident stream
  app.get("/v1/events/stream", async (request, reply) => {
    reply.raw.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });

    const sendEvent = (data: unknown) => {
      reply.raw.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    // Send initial connection event
    sendEvent({
      type: "connected",
      timestamp: new Date().toISOString(),
      message: "Connected to SentinelOps event stream",
    });

    // Handler for agent activities
    const agentActivityHandler = (activity: AgentActivity) => {
      sendEvent({ type: "agent:activity", data: activity });
    };

    // Handler for incident events
    const incidentEventHandler = (event: IncidentEvent) => {
      sendEvent({ type: "incident:event", data: event });
    };

    eventBus.on("agent:activity", agentActivityHandler);
    eventBus.on("incident:event", incidentEventHandler);

    // Cleanup on connection close
    request.raw.on("close", () => {
      eventBus.off("agent:activity", agentActivityHandler);
      eventBus.off("incident:event", incidentEventHandler);
    });
  });

  app.get("/v1/alerts", async () => {
    const data = getDashboardSnapshot();
    return { alerts: data.alerts };
  });

  app.get("/v1/deploys", async () => {
    const data = getDashboardSnapshot();
    return { deploys: data.deploys };
  });

  app.get("/v1/postmortems", async () => {
    const data = getDashboardSnapshot();
    return { postmortems: data.postmortems };
  });

  app.get("/v1/logs", async () => {
    const data = getDashboardSnapshot();
    return { logs: data.logs };
  });

  app.get("/v1/strategies", async () => ({ strategies: listStrategies() }));

  app.get("/v1/actions", async () => {
    const actions = listIncidentActions();
    return { actions };
  });

  app.get("/v1/incidents/:incidentId/actions", async (request, reply) => {
    const params = z.object({ incidentId: z.string().min(1) }).parse(request.params);
    const actions = listIncidentActions({ incidentId: params.incidentId });
    return reply.status(200).send({ actions });
  });

  app.post("/v1/alerts", async (request, reply) => {
    const result = CreateAlertInputSchema.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({ error: "Invalid alert payload", issues: result.error.format() });
    }

    const alert = createAlert(result.data);

    // Broadcast alert creation in real-time
    eventBus.broadcastAlertCreated(alert);

    return reply.status(201).send(alert);
  });

  app.post("/v1/incidents/:incidentId/actions", async (request, reply) => {
    const params = z.object({ incidentId: z.string().min(1) }).parse(request.params);
    const result = CreateIncidentActionSchema.safeParse({
      ...(request.body ?? {}),
      incidentId: params.incidentId,
    });

    if (!result.success) {
      return reply.status(400).send({ error: "Invalid action payload", issues: result.error.format() });
    }

    const action = createIncidentAction(result.data);
    return reply.status(201).send(action);
  });

  app.post("/v1/strategies", async (request, reply) => {
    const bodySchema = z.object({
      title: z.string().min(3),
      focusArea: z.string().min(3),
      constraints: z.string().optional(),
      plan: z.string().min(10),
      metrics: z.record(z.string(), z.any()).optional(),
    });

    const result = bodySchema.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({ error: "Invalid strategy payload", issues: result.error.format() });
    }

    const strategy = createStrategy(result.data);
    return reply.status(201).send(strategy);
  });

  app.post("/v1/alerts/:alertId/ack", async (request, reply) => {
    const params = z.object({ alertId: z.string().min(1) }).parse(request.params);
    const result = AckAlertInputSchema.safeParse({ ...(request.body ?? {}), alertId: params.alertId });

    if (!result.success) {
      return reply.status(400).send({ error: "Invalid acknowledgement payload", issues: result.error.format() });
    }

    const alert = ackAlert(result.data);
    return reply.status(200).send(alert);
  });

  app.post("/v1/alerts/:alertId/resolve", async (request, reply) => {
    const params = z.object({ alertId: z.string().min(1) }).parse(request.params);
    const result = ResolveAlertInputSchema.safeParse({ ...(request.body ?? {}), alertId: params.alertId });

    if (!result.success) {
      return reply.status(400).send({ error: "Invalid resolution payload", issues: result.error.format() });
    }

    const alert = resolveAlert(result.data);
    return reply.status(200).send(alert);
  });

  app.post("/v1/deploys", async (request, reply) => {
    const result = DeploySpecSchema.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({ error: "Invalid deployment spec", issues: result.error.format() });
    }

    const job = createDeployJob(result.data);
    return reply.status(201).send(job);
  });

  app.post("/v1/deploys/:jobId/rollback", async (request, reply) => {
    const paramResult = z.object({ jobId: z.string().min(1) }).safeParse(request.params);
    if (!paramResult.success) {
      return reply.status(400).send({ error: "Invalid job identifier", issues: paramResult.error.format() });
    }

    const { jobId } = paramResult.data;
    const jobs = listJobs();
    const target = jobs.find((job) => job.id === jobId);

    if (!target) {
      return reply.status(404).send({ error: `Deployment job ${jobId} not found` });
    }

    const job = createRollbackJob(target, target.spec.version, {});
    return reply.status(201).send(job);
  });

  app.post("/v1/actions/:actionId/approve", async (request, reply) => {
    const paramResult = z.object({ actionId: z.string().min(1) }).safeParse(request.params);
    if (!paramResult.success) {
      return reply.status(400).send({ error: "Invalid action identifier", issues: paramResult.error.format() });
    }

    const bodyResult = z
      .object({
        approvedBy: z.string().optional(),
        metadata: z.record(z.string(), z.any()).optional(),
      })
      .safeParse(request.body ?? {});

    if (!bodyResult.success) {
      return reply.status(400).send({ error: "Invalid approval payload", issues: bodyResult.error.format() });
    }

    try {
      const action = updateIncidentActionStatus(paramResult.data.actionId, {
        status: "APPROVED",
        approvedBy: bodyResult.data.approvedBy ?? "api",
        metadata: bodyResult.data.metadata,
      });

      // Broadcast action approval in real-time
      eventBus.broadcastActionUpdate(action.id, action.incidentId, "APPROVED");

      return reply.status(200).send(action);
    } catch (error) {
      return reply.status(404).send({ error: (error as Error).message });
    }
  });

  app.post("/v1/actions/:actionId/reject", async (request, reply) => {
    const paramResult = z.object({ actionId: z.string().min(1) }).safeParse(request.params);
    if (!paramResult.success) {
      return reply.status(400).send({ error: "Invalid action identifier", issues: paramResult.error.format() });
    }

    const bodyResult = z
      .object({
        rejectedBy: z.string().optional(),
        reason: z.string().optional(),
        metadata: z.record(z.string(), z.any()).optional(),
      })
      .safeParse(request.body ?? {});

    if (!bodyResult.success) {
      return reply.status(400).send({ error: "Invalid rejection payload", issues: bodyResult.error.format() });
    }

    try {
      const action = updateIncidentActionStatus(paramResult.data.actionId, {
        status: "REJECTED",
        rejectedBy: bodyResult.data.rejectedBy ?? "api",
        rejectionReason: bodyResult.data.reason,
        metadata: bodyResult.data.metadata,
      });

      // Broadcast action rejection in real-time
      eventBus.broadcastActionUpdate(action.id, action.incidentId, "REJECTED");

      return reply.status(200).send(action);
    } catch (error) {
      return reply.status(404).send({ error: (error as Error).message });
    }
  });

  app.post("/v1/incidents/:incidentId/triage", async (request, reply) => {
    const params = z.object({ incidentId: z.string().min(1) }).parse(request.params);
    const alerts = listAlerts();
    const incidentAlert = alerts.find((alert) => alert.id === params.incidentId);

    if (!incidentAlert) {
      return reply.status(404).send({ error: `Incident ${params.incidentId} not found` });
    }

    // Broadcast agent activity start
    eventBus.broadcastAgentActivity({
      agentName: "IncidentCommander",
      activity: `Triaging incident ${incidentAlert.id} (${incidentAlert.service})`,
      status: "started",
      timestamp: new Date().toISOString(),
      metadata: { incidentId: incidentAlert.id, severity: incidentAlert.severity },
    });

    const agentResponse = await incidentCommanderAgent.generate([
      {
        role: "user",
        content: `Triage incident ${incidentAlert.id}: ${incidentAlert.service} - ${incidentAlert.summary}. Severity: ${incidentAlert.severity}. Alert metadata: ${JSON.stringify(incidentAlert.metadata)}`,
      },
    ]);

    // Broadcast agent activity completion
    eventBus.broadcastAgentActivity({
      agentName: "IncidentCommander",
      activity: `Completed triage for incident ${incidentAlert.id}`,
      status: "completed",
      timestamp: new Date().toISOString(),
      metadata: { incidentId: incidentAlert.id },
    });

    let actionsForIncident = listIncidentActions({ incidentId: incidentAlert.id });

    try {
      // Extract text content from agent response
      const responseText = agentResponse.text || "";
      const parsedOutput = responseText ? JSON.parse(responseText) : {};

      if (parsedOutput?.suggestedActions && Array.isArray(parsedOutput.suggestedActions)) {
        const existingLabels = new Set(actionsForIncident.map((action) => action.label.toLowerCase()));

        parsedOutput.suggestedActions.forEach((suggestion: any) => {
          const labelCandidate =
            typeof suggestion.justification === "string" && suggestion.justification.trim().length > 0
              ? suggestion.justification.trim()
              : typeof suggestion.label === "string" && suggestion.label.trim().length > 0
              ? suggestion.label.trim()
              : `${suggestion.type ?? "Action"} suggestion`;

          if (existingLabels.has(labelCandidate.toLowerCase())) {
            return;
          }

          const created = createIncidentAction({
            incidentId: incidentAlert.id,
            label: labelCandidate,
            type: normalizeActionType(suggestion.type),
            risk: normalizeActionRisk(suggestion.risk),
            metadata: {
              suggestedBy: "IncidentCommander",
              raw: suggestion,
            },
          });

          existingLabels.add(labelCandidate.toLowerCase());
          actionsForIncident.push(created);
        });

        actionsForIncident = listIncidentActions({ incidentId: incidentAlert.id });
      }
    } catch (error) {
      request.log.warn({ err: error }, "Failed to parse IncidentCommander response");
    }

    const logs = listLogs().filter((log) => log.incidentId === incidentAlert.id);
    const postmortems = listPostmortems().filter((pm) => pm.incidentId === incidentAlert.id);
    const suggestedActions = actionsForIncident
      .slice(0, 2)
      .map((action) => ({
        actionId: action.id,
        type: action.type.toLowerCase(),
        justification: action.label,
        risk: action.risk,
      }));

    const response = {
      incidentId: incidentAlert.id,
      triage: {
        summary: incidentAlert.summary,
        hypotheses: logs.slice(0, 3).map((log) => `Investigate ${log.source} for '${log.message}'`),
        evidence: [
          ...logs.map((log) => `log:${log.id}`),
          ...postmortems.map((pm) => `postmortem:${pm.id}`),
        ],
      },
      suggestedActions: suggestedActions,
      lastUpdated: new Date().toISOString(),
    };

    return reply.status(200).send(response);
  });

  // Chaos Engineering endpoints for demo
  app.get("/v1/chaos/scenarios", async () => {
    const { listChaosScenarios } = await import("./chaos");
    return { scenarios: listChaosScenarios() };
  });

  app.post("/v1/chaos/trigger", async (request, reply) => {
    const bodySchema = z.object({
      scenarioIndex: z.number().int().min(0).optional(),
    });

    const result = bodySchema.safeParse(request.body ?? {});
    if (!result.success) {
      return reply.status(400).send({ error: "Invalid chaos trigger payload", issues: result.error.format() });
    }

    try {
      const { triggerChaosIncident } = await import("./chaos");
      const { incidentId, scenario } = await triggerChaosIncident(result.data.scenarioIndex);

      return reply.status(201).send({
        success: true,
        incidentId,
        scenario,
        message: `Chaos incident triggered: ${scenario}`,
      });
    } catch (error) {
      return reply.status(500).send({ error: (error as Error).message });
    }
  });

  return app;
}

export async function startServer(): Promise<Server> {
  const app = createServer();

  await app.listen({
    host: env.SERVER_HOST,
    port: env.SERVER_PORT,
  });

  return app;
}

function normalizeActionType(value: unknown): "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM" {
  const normalized = String(value ?? "INVESTIGATE").toUpperCase();
  if (["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"].includes(normalized)) {
    return normalized as "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
  }
  return "INVESTIGATE";
}

function normalizeActionRisk(value: unknown): "LOW" | "MEDIUM" | "HIGH" {
  const normalized = String(value ?? "MEDIUM").toUpperCase();
  if (["LOW", "MEDIUM", "HIGH"].includes(normalized)) {
    return normalized as "LOW" | "MEDIUM" | "HIGH";
  }
  return "MEDIUM";
}
