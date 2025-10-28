import Fastify, { type FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { agentsRegistry } from "@sentinelops/agents";
import { mcpServersRegistry } from "../../src/mastra/mcp";
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
} from "@sentinelops/tools";
import { z } from "zod";
import { env } from "./env";

export type Server = FastifyInstance;

export function createServer(): Server {
  const app = Fastify({
    logger: {
      level: env.LOG_LEVEL,
    },
  });

  ensureMockData();

  app.register(cors, {
    origin: true,
    credentials: false,
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
      description: agent.description ?? null,
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

  app.post("/v1/alerts", async (request, reply) => {
    const result = CreateAlertInputSchema.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({ error: "Invalid alert payload", issues: result.error.format() });
    }

    const alert = createAlert(result.data);
    return reply.status(201).send(alert);
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
    const params = z.object({ jobId: z.string().min(1) }).parse(request.params);
    const jobs = listJobs();
    const target = jobs.find((job) => job.id === params.jobId);
    const job = createRollbackJob(target, target?.spec.version ?? params.jobId, {});
    return reply.status(201).send(job);
  });

  app.post("/v1/incidents/:incidentId/triage", async (request, reply) => {
    const params = z.object({ incidentId: z.string().min(1) }).parse(request.params);
    const alerts = listAlerts();
    const incidentAlert = alerts.find((alert) => alert.id === params.incidentId);

    if (!incidentAlert) {
      return reply.status(404).send({ error: `Incident ${params.incidentId} not found` });
    }

    const logs = listLogs().filter((log) => log.incidentId === incidentAlert.id);
    const postmortems = listPostmortems().filter((pm) => pm.incidentId === incidentAlert.id);
    const snapshot = getDashboardSnapshot();
    const suggestedActions = snapshot.actions
      .filter((action) => action.label.toLowerCase().includes(incidentAlert.service.toLowerCase()) || action.relatedJobId)
      .slice(0, 2)
      .map((action) => ({
        actionId: action.id,
        type: action.label.toLowerCase().includes("rollback") ? "rollback" : "investigate",
        justification: action.label,
        risk: action.risk.toUpperCase(),
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
