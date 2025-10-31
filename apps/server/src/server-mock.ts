import Fastify, { type FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";
import type { WebSocket } from "ws";
import { z } from "zod";
import { env } from "./env";

const wsClients = new Set<WebSocket>();

export function createMockServer(): FastifyInstance {
  const app = Fastify({
    logger: {
      level: env.LOG_LEVEL,
    },
  });

  app.register(cors, {
    origin: true,
    credentials: false,
  });

  app.register(websocket);

  // WebSocket endpoint
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

    socket.on("error", (error) => {
      app.log.error({ err: error }, "WebSocket error");
      wsClients.delete(socket);
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

  app.get("/v1/dashboard", async () => {
    return {
      stats: [
        { label: "Active Alerts", value: "3", trend: "+2 this hour", tone: "critical" },
        { label: "Agents Online", value: "7/7", trend: "100% uptime", tone: "positive" },
        { label: "Avg Response Time", value: "45s", trend: "↓ 30% faster", tone: "positive" },
        { label: "Incidents Resolved", value: "127", trend: "+12 today", tone: "neutral" },
      ],
      roster: [
        { name: "IncidentCommander", focus: "Triage & Planning", status: "online", heartbeat: "2s ago", tasks: 3 },
        { name: "DevOpsGPT", focus: "Deployments", status: "online", heartbeat: "5s ago", tasks: 1 },
        { name: "MonitorAgent", focus: "Anomaly Detection", status: "online", heartbeat: "1s ago", tasks: 0 },
        { name: "ForensicsAgent", focus: "Postmortems", status: "online", heartbeat: "3s ago", tasks: 2 },
        { name: "HumanOpsAgent", focus: "Dashboard Copilot", status: "online", heartbeat: "now", tasks: 0 },
        { name: "DiscordTriage", focus: "Community Support", status: "online", heartbeat: "4s ago", tasks: 0 },
        { name: "AgentBprime", focus: "Optimization", status: "online", heartbeat: "2s ago", tasks: 1 },
      ],
      incidents: [
        { id: "INC-001", service: "gpu-worker-3", severity: "high", summary: "OOM in inference pipeline", timestamp: new Date().toISOString() },
        { id: "INC-002", service: "api-gateway", severity: "critical", summary: "Connection pool exhausted", timestamp: new Date(Date.now() - 300000).toISOString() },
        { id: "INC-003", service: "auth-service", severity: "moderate", summary: "High latency on token validation", timestamp: new Date(Date.now() - 600000).toISOString() },
      ],
      memory: ["Keep humans in the loop", "Low-risk actions first", "Document everything"],
      generatedAt: new Date().toISOString(),
    };
  });

  app.get("/v1/incidents/:incidentId/actions", async (request, reply) => {
    return {
      actions: [
        { id: "act-001", label: "Scale gpu-worker-3 from 4→6 replicas", owner: "IncidentCommander", status: "awaiting", risk: "low" },
        { id: "act-002", label: "Investigate batch_size config", owner: "ForensicsAgent", status: "awaiting", risk: "low" },
      ]
    };
  });

  app.post("/v1/actions/:actionId/approve", async (request, reply) => {
    const params = z.object({ actionId: z.string() }).parse(request.params);

    // Broadcast approval
    const message = JSON.stringify({
      type: "incident:event",
      data: {
        type: "action_approved",
        incidentId: "INC-001",
        data: { actionId: params.actionId },
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date().toISOString(),
    });

    wsClients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });

    return { id: params.actionId, status: "APPROVED", approvedBy: "api" };
  });

  app.get("/v1/chaos/scenarios", async () => {
    return {
      scenarios: [
        { index: 0, name: "OOM in Inference Pipeline", service: "gpu-worker-3", severity: "HIGH" },
        { index: 1, name: "Database Connection Pool Exhausted", service: "api-gateway", severity: "CRITICAL" },
        { index: 2, name: "Cascade Failure from Auth Service", service: "auth-service", severity: "HIGH" },
        { index: 3, name: "Deployment Rollout Issue", service: "deploy-proxy", severity: "MEDIUM" },
      ]
    };
  });

  app.post("/v1/chaos/trigger", async (request, reply) => {
    // Broadcast chaos trigger
    const message = JSON.stringify({
      type: "agent:activity",
      data: {
        agentName: "ChaosEngineer",
        activity: "Injecting OOM incident for demo",
        status: "started",
        timestamp: new Date().toISOString(),
        metadata: { scenario: "OOM in Inference Pipeline" },
      },
      timestamp: new Date().toISOString(),
    });

    wsClients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });

    // Simulate incident commander triage
    setTimeout(() => {
      const triageMessage = JSON.stringify({
        type: "agent:activity",
        data: {
          agentName: "IncidentCommander",
          activity: "Triaging incident INC-004 (gpu-worker-3)",
          status: "in_progress",
          timestamp: new Date().toISOString(),
          metadata: { incidentId: "INC-004", severity: "HIGH" },
        },
        timestamp: new Date().toISOString(),
      });

      wsClients.forEach((client) => {
        if (client.readyState === 1) {
          client.send(triageMessage);
        }
      });
    }, 2000);

    return reply.status(201).send({
      success: true,
      incidentId: "INC-004",
      scenario: "OOM in Inference Pipeline",
      message: "Chaos incident triggered successfully",
    });
  });

  app.get("/v1/strategies", async () => {
    return {
      strategies: [
        { id: "strat-001", title: "Gradual Rollout Strategy", focusArea: "deployment", status: "active" },
        { id: "strat-002", title: "Auto-scaling Optimization", focusArea: "performance", status: "active" },
      ]
    };
  });

  return app;
}

export async function startMockServer(): Promise<FastifyInstance> {
  const app = createMockServer();

  await app.listen({
    host: env.SERVER_HOST,
    port: env.SERVER_PORT,
  });

  return app;
}

if (require.main === module) {
  startMockServer()
    .then((app) => {
      app.log.info({
        msg: "SentinelOps Mock Server Ready",
        host: env.SERVER_HOST,
        port: env.SERVER_PORT,
        environment: env.NODE_ENV,
      });
    })
    .catch((error) => {
      console.error("Failed to start server", error);
      process.exit(1);
    });
}
