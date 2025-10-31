"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanOpsMemorySchema = exports.agentsRegistry = exports.agentBprime = exports.discordTriageAgent = exports.humanOpsAgent = exports.forensicsAgent = exports.monitorAgent = exports.incidentCommanderAgent = exports.devOpsAgent = void 0;
require("dotenv/config");
const ollama_ai_provider_v2_1 = require("ollama-ai-provider-v2");
const agent_1 = require("@mastra/core/agent");
const tools_1 = require("@sentinelops/tools");
const persistence_1 = require("@sentinelops/persistence");
const libsql_1 = require("@mastra/libsql");
const memory_1 = require("@mastra/memory");
const zod_1 = require("zod");
const memory_2 = require("./memory");
const prompts_1 = require("./prompts");
const ollama = (0, ollama_ai_provider_v2_1.createOllama)({
    baseURL: process.env.NOS_OLLAMA_API_URL || process.env.OLLAMA_API_URL,
});
(0, persistence_1.initDb)();
const defaultModelName = process.env.NOS_MODEL_NAME_AT_ENDPOINT || process.env.MODEL_NAME_AT_ENDPOINT || "qwen3:8b";
const createMemory = (schema) => new memory_1.Memory({
    storage: new libsql_1.LibSQLStore({ url: "file::memory:" }),
    options: {
        workingMemory: {
            enabled: true,
            schema: schema,
        },
    },
});
const DevOpsMemorySchema = zod_1.z.object({
    openApprovals: zod_1.z
        .array(zod_1.z.object({
        actionId: zod_1.z.string(),
        summary: zod_1.z.string(),
        status: zod_1.z.enum(["awaiting", "approved", "rejected"]).default("awaiting"),
        createdAt: zod_1.z.string().datetime().optional(),
    }))
        .default([]),
});
const IncidentMemorySchema = zod_1.z.object({
    incidents: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        lastSummary: zod_1.z.string().optional(),
        hypotheses: zod_1.z.array(zod_1.z.string()).default([]),
        updatedAt: zod_1.z.string().datetime().optional(),
    }))
        .default([]),
});
const MonitorMemorySchema = zod_1.z.object({
    recentAlerts: zod_1.z
        .array(zod_1.z.object({
        service: zod_1.z.string(),
        signature: zod_1.z.string(),
        createdAt: zod_1.z.string().datetime(),
    }))
        .default([]),
});
const ForensicsMemorySchema = zod_1.z.object({
    drafts: zod_1.z
        .array(zod_1.z.object({
        postmortemId: zod_1.z.string(),
        incidentId: zod_1.z.string(),
        status: zod_1.z.enum(["draft", "published"]).default("draft"),
    }))
        .default([]),
});
const DiscordMemorySchema = zod_1.z.object({
    recentThreads: zod_1.z
        .array(zod_1.z.object({
        threadId: zod_1.z.string(),
        incidentId: zod_1.z.string().optional(),
        lastMessageId: zod_1.z.string().optional(),
    }))
        .default([]),
});
const AgentBprimeMemorySchema = zod_1.z.object({
    focusAreas: zod_1.z.array(zod_1.z.string()).default([]),
    latestStrategyId: zod_1.z.string().optional(),
});
exports.devOpsAgent = new agent_1.Agent({
    name: "DevOpsGPT",
    description: "Orchestrates releases, approvals, and deployment hygiene.",
    instructions: prompts_1.DEVOPS_GPT_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        startDeployTool: tools_1.startDeployTool,
        listDeploysTool: tools_1.listDeploysTool,
        getJobStatusTool: tools_1.getJobStatusTool,
        listPostmortemsTool: tools_1.listPostmortemsTool,
        approveIncidentActionTool: tools_1.approveIncidentActionTool,
        rejectIncidentActionTool: tools_1.rejectIncidentActionTool,
    },
    memory: createMemory(DevOpsMemorySchema),
});
exports.incidentCommanderAgent = new agent_1.Agent({
    name: "IncidentCommanderAgent",
    description: "Triages incidents, proposes mitigations, and coordinates remediation.",
    instructions: prompts_1.INCIDENT_COMMANDER_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        createAlertTool: tools_1.createAlertTool,
        ackAlertTool: tools_1.ackAlertTool,
        resolveAlertTool: tools_1.resolveAlertTool,
        queryLogsTool: tools_1.queryLogsTool,
        sampleLogsTool: tools_1.sampleLogsTool,
        rollbackDeployTool: tools_1.rollbackDeployTool,
        listDeploysTool: tools_1.listDeploysTool,
        createPostmortemTool: tools_1.createPostmortemTool,
        createIncidentActionTool: tools_1.createIncidentActionTool,
    },
    memory: createMemory(IncidentMemorySchema),
});
exports.monitorAgent = new agent_1.Agent({
    name: "MonitorAgent",
    description: "Streams telemetry, detects anomalies, and raises alerts.",
    instructions: prompts_1.MONITOR_AGENT_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        ingestLogTool: tools_1.ingestLogTool,
        createAlertTool: tools_1.createAlertTool,
        subscribeAlertsTool: tools_1.subscribeAlertsTool,
        listDeploysTool: tools_1.listDeploysTool,
    },
    memory: createMemory(MonitorMemorySchema),
});
exports.forensicsAgent = new agent_1.Agent({
    name: "ForensicsAgent",
    description: "Drafts postmortems with timelines, root cause analysis, and action items.",
    instructions: prompts_1.FORENSICS_AGENT_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        createPostmortemTool: tools_1.createPostmortemTool,
        publishPostmortemTool: tools_1.publishPostmortemTool,
        listPostmortemsTool: tools_1.listPostmortemsTool,
        sampleLogsTool: tools_1.sampleLogsTool,
        queryLogsTool: tools_1.queryLogsTool,
    },
    memory: createMemory(ForensicsMemorySchema),
});
exports.humanOpsAgent = new agent_1.Agent({
    name: "HumanOpsAgent",
    description: "Dashboard copilot for on-call operators.",
    instructions: prompts_1.HUMAN_OPS_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        listDeploysTool: tools_1.listDeploysTool,
        listPostmortemsTool: tools_1.listPostmortemsTool,
        queryLogsTool: tools_1.queryLogsTool,
        getJobStatusTool: tools_1.getJobStatusTool,
        approveIncidentActionTool: tools_1.approveIncidentActionTool,
        rejectIncidentActionTool: tools_1.rejectIncidentActionTool,
        listStrategiesTool: tools_1.listStrategiesTool,
    },
    memory: createMemory(memory_2.HumanOpsMemorySchema),
});
exports.discordTriageAgent = new agent_1.Agent({
    name: "DiscordTriageAgent",
    description: "Handles Discord triage interactions, offering safe troubleshooting steps.",
    instructions: prompts_1.DISCORD_TRIAGE_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        sampleLogsTool: tools_1.sampleLogsTool,
        createAlertTool: tools_1.createAlertTool,
        ingestLogTool: tools_1.ingestLogTool,
        weatherTool: tools_1.weatherTool, // temporary fallback for lightweight responses; remove once repo tool is ready
    },
    memory: createMemory(DiscordMemorySchema),
});
exports.agentBprime = new agent_1.Agent({
    name: "AgentBprime",
    description: "Coding strategist optimising SentinelOps for BlueShift competitions.",
    instructions: prompts_1.AGENT_BPRIME_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        listDeploysTool: tools_1.listDeploysTool,
        listStrategiesTool: tools_1.listStrategiesTool,
        createStrategyTool: tools_1.createStrategyTool,
        listPostmortemsTool: tools_1.listPostmortemsTool,
        queryLogsTool: tools_1.queryLogsTool,
    },
    memory: createMemory(AgentBprimeMemorySchema),
});
exports.agentsRegistry = {
    devOpsAgent: exports.devOpsAgent,
    incidentCommanderAgent: exports.incidentCommanderAgent,
    monitorAgent: exports.monitorAgent,
    forensicsAgent: exports.forensicsAgent,
    humanOpsAgent: exports.humanOpsAgent,
    discordTriageAgent: exports.discordTriageAgent,
    agentBprime: exports.agentBprime,
};
var memory_3 = require("./memory");
Object.defineProperty(exports, "HumanOpsMemorySchema", { enumerable: true, get: function () { return memory_3.HumanOpsMemorySchema; } });
//# sourceMappingURL=index.js.map