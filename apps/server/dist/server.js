"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = createServer;
exports.startServer = startServer;
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const websocket_1 = __importDefault(require("@fastify/websocket"));
const agents_1 = require("@sentinelops/agents");
const mcpRegistry_1 = require("./mcpRegistry");
const persistence_1 = require("@sentinelops/persistence");
const mock_data_1 = require("./mock-data");
const tools_1 = require("@sentinelops/tools");
const zod_1 = require("zod");
const env_1 = require("./env");
const events_1 = require("./events");
function createServer() {
    const app = (0, fastify_1.default)({
        logger: {
            level: env_1.env.LOG_LEVEL,
        },
    });
    (0, persistence_1.initDb)();
    (0, mock_data_1.ensureMockData)();
    app.register(cors_1.default, {
        origin: true,
        credentials: false,
    });
    app.register(websocket_1.default);
    // WebSocket clients registry
    const wsClients = new Set();
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
        socket.on("error", (error) => {
            app.log.error({ err: error }, "WebSocket error");
            wsClients.delete(socket);
        });
    });
    // Broadcast agent activities to all connected clients
    events_1.eventBus.on("agent:activity", (activity) => {
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
    events_1.eventBus.on("incident:event", (event) => {
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
            environment: env_1.env.NODE_ENV,
        };
    });
    app.get("/v1/agents", async () => {
        const agents = Object.entries(agents_1.agentsRegistry).map(([key, agent]) => ({
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
            environment: env_1.env.NODE_ENV,
            agents: Object.keys(agents_1.agentsRegistry).length,
            mcpServers: Object.keys(mcpRegistry_1.mcpServersRegistry).length,
        };
    });
    app.get("/v1/dashboard", async () => {
        return (0, mock_data_1.getDashboardSnapshot)();
    });
    // SSE endpoint for live incident stream
    app.get("/v1/events/stream", async (request, reply) => {
        reply.raw.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
        });
        const sendEvent = (data) => {
            reply.raw.write(`data: ${JSON.stringify(data)}\n\n`);
        };
        // Send initial connection event
        sendEvent({
            type: "connected",
            timestamp: new Date().toISOString(),
            message: "Connected to SentinelOps event stream",
        });
        // Handler for agent activities
        const agentActivityHandler = (activity) => {
            sendEvent({ type: "agent:activity", data: activity });
        };
        // Handler for incident events
        const incidentEventHandler = (event) => {
            sendEvent({ type: "incident:event", data: event });
        };
        events_1.eventBus.on("agent:activity", agentActivityHandler);
        events_1.eventBus.on("incident:event", incidentEventHandler);
        // Cleanup on connection close
        request.raw.on("close", () => {
            events_1.eventBus.off("agent:activity", agentActivityHandler);
            events_1.eventBus.off("incident:event", incidentEventHandler);
        });
    });
    app.get("/v1/alerts", async () => {
        const data = (0, mock_data_1.getDashboardSnapshot)();
        return { alerts: data.alerts };
    });
    app.get("/v1/deploys", async () => {
        const data = (0, mock_data_1.getDashboardSnapshot)();
        return { deploys: data.deploys };
    });
    app.get("/v1/postmortems", async () => {
        const data = (0, mock_data_1.getDashboardSnapshot)();
        return { postmortems: data.postmortems };
    });
    app.get("/v1/logs", async () => {
        const data = (0, mock_data_1.getDashboardSnapshot)();
        return { logs: data.logs };
    });
    app.get("/v1/strategies", async () => ({ strategies: (0, tools_1.listStrategies)() }));
    app.get("/v1/actions", async () => {
        const actions = (0, tools_1.listIncidentActions)();
        return { actions };
    });
    app.get("/v1/incidents/:incidentId/actions", async (request, reply) => {
        const params = zod_1.z.object({ incidentId: zod_1.z.string().min(1) }).parse(request.params);
        const actions = (0, tools_1.listIncidentActions)({ incidentId: params.incidentId });
        return reply.status(200).send({ actions });
    });
    app.post("/v1/alerts", async (request, reply) => {
        const result = tools_1.CreateAlertInputSchema.safeParse(request.body);
        if (!result.success) {
            return reply.status(400).send({ error: "Invalid alert payload", issues: result.error.format() });
        }
        const alert = (0, tools_1.createAlert)(result.data);
        // Broadcast alert creation in real-time
        events_1.eventBus.broadcastAlertCreated(alert);
        return reply.status(201).send(alert);
    });
    app.post("/v1/incidents/:incidentId/actions", async (request, reply) => {
        const params = zod_1.z.object({ incidentId: zod_1.z.string().min(1) }).parse(request.params);
        const result = tools_1.CreateIncidentActionSchema.safeParse({
            ...(request.body ?? {}),
            incidentId: params.incidentId,
        });
        if (!result.success) {
            return reply.status(400).send({ error: "Invalid action payload", issues: result.error.format() });
        }
        const action = (0, tools_1.createIncidentAction)(result.data);
        return reply.status(201).send(action);
    });
    app.post("/v1/strategies", async (request, reply) => {
        const bodySchema = zod_1.z.object({
            title: zod_1.z.string().min(3),
            focusArea: zod_1.z.string().min(3),
            constraints: zod_1.z.string().optional(),
            plan: zod_1.z.string().min(10),
            metrics: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
        });
        const result = bodySchema.safeParse(request.body);
        if (!result.success) {
            return reply.status(400).send({ error: "Invalid strategy payload", issues: result.error.format() });
        }
        const strategy = (0, tools_1.createStrategy)(result.data);
        return reply.status(201).send(strategy);
    });
    app.post("/v1/alerts/:alertId/ack", async (request, reply) => {
        const params = zod_1.z.object({ alertId: zod_1.z.string().min(1) }).parse(request.params);
        const result = tools_1.AckAlertInputSchema.safeParse({ ...(request.body ?? {}), alertId: params.alertId });
        if (!result.success) {
            return reply.status(400).send({ error: "Invalid acknowledgement payload", issues: result.error.format() });
        }
        const alert = (0, tools_1.ackAlert)(result.data);
        return reply.status(200).send(alert);
    });
    app.post("/v1/alerts/:alertId/resolve", async (request, reply) => {
        const params = zod_1.z.object({ alertId: zod_1.z.string().min(1) }).parse(request.params);
        const result = tools_1.ResolveAlertInputSchema.safeParse({ ...(request.body ?? {}), alertId: params.alertId });
        if (!result.success) {
            return reply.status(400).send({ error: "Invalid resolution payload", issues: result.error.format() });
        }
        const alert = (0, tools_1.resolveAlert)(result.data);
        return reply.status(200).send(alert);
    });
    app.post("/v1/deploys", async (request, reply) => {
        const result = tools_1.DeploySpecSchema.safeParse(request.body);
        if (!result.success) {
            return reply.status(400).send({ error: "Invalid deployment spec", issues: result.error.format() });
        }
        const job = (0, tools_1.createDeployJob)(result.data);
        return reply.status(201).send(job);
    });
    app.post("/v1/deploys/:jobId/rollback", async (request, reply) => {
        const paramResult = zod_1.z.object({ jobId: zod_1.z.string().min(1) }).safeParse(request.params);
        if (!paramResult.success) {
            return reply.status(400).send({ error: "Invalid job identifier", issues: paramResult.error.format() });
        }
        const { jobId } = paramResult.data;
        const jobs = (0, tools_1.listJobs)();
        const target = jobs.find((job) => job.id === jobId);
        if (!target) {
            return reply.status(404).send({ error: `Deployment job ${jobId} not found` });
        }
        const job = (0, tools_1.createRollbackJob)(target, target.spec.version, {});
        return reply.status(201).send(job);
    });
    app.post("/v1/actions/:actionId/approve", async (request, reply) => {
        const paramResult = zod_1.z.object({ actionId: zod_1.z.string().min(1) }).safeParse(request.params);
        if (!paramResult.success) {
            return reply.status(400).send({ error: "Invalid action identifier", issues: paramResult.error.format() });
        }
        const bodyResult = zod_1.z
            .object({
            approvedBy: zod_1.z.string().optional(),
            metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
        })
            .safeParse(request.body ?? {});
        if (!bodyResult.success) {
            return reply.status(400).send({ error: "Invalid approval payload", issues: bodyResult.error.format() });
        }
        try {
            const action = (0, tools_1.updateIncidentActionStatus)(paramResult.data.actionId, {
                status: "APPROVED",
                approvedBy: bodyResult.data.approvedBy ?? "api",
                metadata: bodyResult.data.metadata,
            });
            // Broadcast action approval in real-time
            events_1.eventBus.broadcastActionUpdate(action.id, action.incidentId, "APPROVED");
            return reply.status(200).send(action);
        }
        catch (error) {
            return reply.status(404).send({ error: error.message });
        }
    });
    app.post("/v1/actions/:actionId/reject", async (request, reply) => {
        const paramResult = zod_1.z.object({ actionId: zod_1.z.string().min(1) }).safeParse(request.params);
        if (!paramResult.success) {
            return reply.status(400).send({ error: "Invalid action identifier", issues: paramResult.error.format() });
        }
        const bodyResult = zod_1.z
            .object({
            rejectedBy: zod_1.z.string().optional(),
            reason: zod_1.z.string().optional(),
            metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
        })
            .safeParse(request.body ?? {});
        if (!bodyResult.success) {
            return reply.status(400).send({ error: "Invalid rejection payload", issues: bodyResult.error.format() });
        }
        try {
            const action = (0, tools_1.updateIncidentActionStatus)(paramResult.data.actionId, {
                status: "REJECTED",
                rejectedBy: bodyResult.data.rejectedBy ?? "api",
                rejectionReason: bodyResult.data.reason,
                metadata: bodyResult.data.metadata,
            });
            // Broadcast action rejection in real-time
            events_1.eventBus.broadcastActionUpdate(action.id, action.incidentId, "REJECTED");
            return reply.status(200).send(action);
        }
        catch (error) {
            return reply.status(404).send({ error: error.message });
        }
    });
    app.post("/v1/incidents/:incidentId/triage", async (request, reply) => {
        const params = zod_1.z.object({ incidentId: zod_1.z.string().min(1) }).parse(request.params);
        const alerts = (0, tools_1.listAlerts)();
        const incidentAlert = alerts.find((alert) => alert.id === params.incidentId);
        if (!incidentAlert) {
            return reply.status(404).send({ error: `Incident ${params.incidentId} not found` });
        }
        // Broadcast agent activity start
        events_1.eventBus.broadcastAgentActivity({
            agentName: "IncidentCommander",
            activity: `Triaging incident ${incidentAlert.id} (${incidentAlert.service})`,
            status: "started",
            timestamp: new Date().toISOString(),
            metadata: { incidentId: incidentAlert.id, severity: incidentAlert.severity },
        });
        const agentResponse = await agents_1.incidentCommanderAgent.generate([
            {
                role: "user",
                content: `Triage incident ${incidentAlert.id}: ${incidentAlert.service} - ${incidentAlert.summary}. Severity: ${incidentAlert.severity}. Alert metadata: ${JSON.stringify(incidentAlert.metadata)}`,
            },
        ]);
        // Broadcast agent activity completion
        events_1.eventBus.broadcastAgentActivity({
            agentName: "IncidentCommander",
            activity: `Completed triage for incident ${incidentAlert.id}`,
            status: "completed",
            timestamp: new Date().toISOString(),
            metadata: { incidentId: incidentAlert.id },
        });
        let actionsForIncident = (0, tools_1.listIncidentActions)({ incidentId: incidentAlert.id });
        try {
            // Extract text content from agent response
            const responseText = agentResponse.text || "";
            const parsedOutput = responseText ? JSON.parse(responseText) : {};
            if (parsedOutput?.suggestedActions && Array.isArray(parsedOutput.suggestedActions)) {
                const existingLabels = new Set(actionsForIncident.map((action) => action.label.toLowerCase()));
                parsedOutput.suggestedActions.forEach((suggestion) => {
                    const labelCandidate = typeof suggestion.justification === "string" && suggestion.justification.trim().length > 0
                        ? suggestion.justification.trim()
                        : typeof suggestion.label === "string" && suggestion.label.trim().length > 0
                            ? suggestion.label.trim()
                            : `${suggestion.type ?? "Action"} suggestion`;
                    if (existingLabels.has(labelCandidate.toLowerCase())) {
                        return;
                    }
                    const created = (0, tools_1.createIncidentAction)({
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
                actionsForIncident = (0, tools_1.listIncidentActions)({ incidentId: incidentAlert.id });
            }
        }
        catch (error) {
            request.log.warn({ err: error }, "Failed to parse IncidentCommander response");
        }
        const logs = (0, tools_1.listLogs)().filter((log) => log.incidentId === incidentAlert.id);
        const postmortems = (0, tools_1.listPostmortems)().filter((pm) => pm.incidentId === incidentAlert.id);
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
        const { listChaosScenarios } = await Promise.resolve().then(() => __importStar(require("./chaos")));
        return { scenarios: listChaosScenarios() };
    });
    app.post("/v1/chaos/trigger", async (request, reply) => {
        const bodySchema = zod_1.z.object({
            scenarioIndex: zod_1.z.number().int().min(0).optional(),
        });
        const result = bodySchema.safeParse(request.body ?? {});
        if (!result.success) {
            return reply.status(400).send({ error: "Invalid chaos trigger payload", issues: result.error.format() });
        }
        try {
            const { triggerChaosIncident } = await Promise.resolve().then(() => __importStar(require("./chaos")));
            const { incidentId, scenario } = await triggerChaosIncident(result.data.scenarioIndex);
            return reply.status(201).send({
                success: true,
                incidentId,
                scenario,
                message: `Chaos incident triggered: ${scenario}`,
            });
        }
        catch (error) {
            return reply.status(500).send({ error: error.message });
        }
    });
    return app;
}
async function startServer() {
    const app = createServer();
    await app.listen({
        host: env_1.env.SERVER_HOST,
        port: env_1.env.SERVER_PORT,
    });
    return app;
}
function normalizeActionType(value) {
    const normalized = String(value ?? "INVESTIGATE").toUpperCase();
    if (["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"].includes(normalized)) {
        return normalized;
    }
    return "INVESTIGATE";
}
function normalizeActionRisk(value) {
    const normalized = String(value ?? "MEDIUM").toUpperCase();
    if (["LOW", "MEDIUM", "HIGH"].includes(normalized)) {
        return normalized;
    }
    return "MEDIUM";
}
//# sourceMappingURL=server.js.map