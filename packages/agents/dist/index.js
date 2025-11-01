"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanOpsMemorySchema = exports.agentsRegistry = exports.agentBprime = exports.discordTriageAgent = exports.codeExpertAgent = exports.humanOpsAgent = exports.forensicsAgent = exports.monitorAgent = exports.incidentCommanderAgent = exports.devOpsAgent = void 0;
require("dotenv/config");
const ollama_ai_provider_v2_1 = require("ollama-ai-provider-v2");
const agent_1 = require("@mastra/core/agent");
const src_1 = require("../../tools/src");
const src_2 = require("../../persistence/src");
const libsql_1 = require("@mastra/libsql");
const memory_1 = require("@mastra/memory");
const zod_1 = require("zod");
const memory_2 = require("./memory");
const prompts_1 = require("./prompts");
const ollama = (0, ollama_ai_provider_v2_1.createOllama)({
    baseURL: process.env.NOS_OLLAMA_API_URL || process.env.OLLAMA_API_URL,
});
if (process.env.SENTINELOPS_SKIP_DB === "1") {
    // In lightweight test environments we skip the native SQLite dependency.
    console.debug("[agents] Skipping initDb because SENTINELOPS_SKIP_DB=1");
}
else {
    (0, src_2.initDb)();
}
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
const CodeExpertMemorySchema = zod_1.z.object({
    activeReviews: zod_1.z
        .array(zod_1.z.object({
        branch: zod_1.z.string().optional(),
        summary: zod_1.z.string().optional(),
        createdAt: zod_1.z.string().datetime().optional(),
    }))
        .default([]),
    suggestionsBacklog: zod_1.z
        .array(zod_1.z.object({
        path: zod_1.z.string(),
        description: zod_1.z.string(),
        status: zod_1.z.enum(["open", "done"]).default("open"),
    }))
        .default([]),
});
exports.devOpsAgent = new agent_1.Agent({
    name: "DevOpsGPT",
    description: "Orchestrates releases, approvals, and deployment hygiene.",
    instructions: prompts_1.DEVOPS_GPT_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        startDeployTool: src_1.startDeployTool,
        listDeploysTool: src_1.listDeploysTool,
        getJobStatusTool: src_1.getJobStatusTool,
        listPostmortemsTool: src_1.listPostmortemsTool,
        approveIncidentActionTool: src_1.approveIncidentActionTool,
        rejectIncidentActionTool: src_1.rejectIncidentActionTool,
    },
    memory: createMemory(DevOpsMemorySchema),
});
exports.incidentCommanderAgent = new agent_1.Agent({
    name: "IncidentCommanderAgent",
    description: "Triages incidents, proposes mitigations, and coordinates remediation.",
    instructions: prompts_1.INCIDENT_COMMANDER_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        createAlertTool: src_1.createAlertTool,
        ackAlertTool: src_1.ackAlertTool,
        resolveAlertTool: src_1.resolveAlertTool,
        queryLogsTool: src_1.queryLogsTool,
        sampleLogsTool: src_1.sampleLogsTool,
        rollbackDeployTool: src_1.rollbackDeployTool,
        listDeploysTool: src_1.listDeploysTool,
        createPostmortemTool: src_1.createPostmortemTool,
        createIncidentActionTool: src_1.createIncidentActionTool,
    },
    memory: createMemory(IncidentMemorySchema),
});
exports.monitorAgent = new agent_1.Agent({
    name: "MonitorAgent",
    description: "Streams telemetry, detects anomalies, and raises alerts.",
    instructions: prompts_1.MONITOR_AGENT_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        ingestLogTool: src_1.ingestLogTool,
        createAlertTool: src_1.createAlertTool,
        subscribeAlertsTool: src_1.subscribeAlertsTool,
        listDeploysTool: src_1.listDeploysTool,
    },
    memory: createMemory(MonitorMemorySchema),
});
exports.forensicsAgent = new agent_1.Agent({
    name: "ForensicsAgent",
    description: "Drafts postmortems with timelines, root cause analysis, and action items.",
    instructions: prompts_1.FORENSICS_AGENT_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        createPostmortemTool: src_1.createPostmortemTool,
        publishPostmortemTool: src_1.publishPostmortemTool,
        listPostmortemsTool: src_1.listPostmortemsTool,
        sampleLogsTool: src_1.sampleLogsTool,
        queryLogsTool: src_1.queryLogsTool,
    },
    memory: createMemory(ForensicsMemorySchema),
});
exports.humanOpsAgent = new agent_1.Agent({
    name: "HumanOpsAgent",
    description: "Dashboard copilot for on-call operators.",
    instructions: prompts_1.HUMAN_OPS_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        listDeploysTool: src_1.listDeploysTool,
        listPostmortemsTool: src_1.listPostmortemsTool,
        queryLogsTool: src_1.queryLogsTool,
        getJobStatusTool: src_1.getJobStatusTool,
        approveIncidentActionTool: src_1.approveIncidentActionTool,
        rejectIncidentActionTool: src_1.rejectIncidentActionTool,
        listStrategiesTool: src_1.listStrategiesTool,
    },
    memory: createMemory(memory_2.HumanOpsMemorySchema),
});
exports.codeExpertAgent = new agent_1.Agent({
    name: "CodeExpertAgent",
    description: "Hands-on coding expert for diff analysis, implementation planning, and review.",
    instructions: prompts_1.CODE_EXPERT_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        gitStatusTool: src_1.gitStatusTool,
        gitDiffTool: src_1.gitDiffTool,
        gitStageTool: src_1.gitStageTool,
        gitCommitTool: src_1.gitCommitTool,
        gitPushTool: src_1.gitPushTool,
        gitBranchTool: src_1.gitBranchTool,
        listDeploysTool: src_1.listDeploysTool,
        listPostmortemsTool: src_1.listPostmortemsTool,
        queryLogsTool: src_1.queryLogsTool,
        createStrategyTool: src_1.createStrategyTool,
    },
    memory: createMemory(CodeExpertMemorySchema),
});
exports.discordTriageAgent = new agent_1.Agent({
    name: "DiscordTriageAgent",
    description: "Handles Discord triage interactions, offering safe troubleshooting steps.",
    instructions: prompts_1.DISCORD_TRIAGE_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        sampleLogsTool: src_1.sampleLogsTool,
        createAlertTool: src_1.createAlertTool,
        ingestLogTool: src_1.ingestLogTool,
        weatherTool: src_1.weatherTool, // temporary fallback for lightweight responses; remove once repo tool is ready
    },
    memory: createMemory(DiscordMemorySchema),
});
exports.agentBprime = new agent_1.Agent({
    name: "AgentBprime",
    description: "Coding strategist optimising SentinelOps for BlueShift competitions.",
    instructions: prompts_1.AGENT_BPRIME_PROMPT,
    model: ollama(defaultModelName),
    tools: {
        listDeploysTool: src_1.listDeploysTool,
        listStrategiesTool: src_1.listStrategiesTool,
        createStrategyTool: src_1.createStrategyTool,
        listPostmortemsTool: src_1.listPostmortemsTool,
        queryLogsTool: src_1.queryLogsTool,
    },
    memory: createMemory(AgentBprimeMemorySchema),
});
exports.agentsRegistry = {
    devOpsAgent: exports.devOpsAgent,
    incidentCommanderAgent: exports.incidentCommanderAgent,
    monitorAgent: exports.monitorAgent,
    forensicsAgent: exports.forensicsAgent,
    humanOpsAgent: exports.humanOpsAgent,
    codeExpertAgent: exports.codeExpertAgent,
    discordTriageAgent: exports.discordTriageAgent,
    agentBprime: exports.agentBprime,
};
var memory_3 = require("./memory");
Object.defineProperty(exports, "HumanOpsMemorySchema", { enumerable: true, get: function () { return memory_3.HumanOpsMemorySchema; } });
//# sourceMappingURL=index.js.map