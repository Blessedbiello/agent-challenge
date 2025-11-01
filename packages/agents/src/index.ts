import "dotenv/config";
import { createOllama } from "ollama-ai-provider-v2";
import { Agent } from "@mastra/core/agent";
import {
  ackAlertTool,
  createAlertTool,
  createIncidentActionTool,
  createPostmortemTool,
  getJobStatusTool,
  ingestLogTool,
  listDeploysTool,
  listPostmortemsTool,
  createStrategyTool,
  listStrategiesTool,
  approveIncidentActionTool,
  rejectIncidentActionTool,
  publishPostmortemTool,
  queryLogsTool,
  resolveAlertTool,
  rollbackDeployTool,
  sampleLogsTool,
  startDeployTool,
  subscribeAlertsTool,
  weatherTool,
  gitStatusTool,
  gitDiffTool,
  gitStageTool,
  gitCommitTool,
  gitPushTool,
  gitBranchTool,
} from "../../tools/src";
import { initDb } from "../../persistence/src";
import { LibSQLStore } from "@mastra/libsql";
import { Memory } from "@mastra/memory";
import { z } from "zod";
import { HumanOpsMemorySchema } from "./memory";
import {
  DEVOPS_GPT_PROMPT,
  DISCORD_TRIAGE_PROMPT,
  FORENSICS_AGENT_PROMPT,
  HUMAN_OPS_PROMPT,
  INCIDENT_COMMANDER_PROMPT,
  MONITOR_AGENT_PROMPT,
  AGENT_BPRIME_PROMPT,
  CODE_EXPERT_PROMPT,
} from "./prompts";

const ollama = createOllama({
  baseURL: process.env.NOS_OLLAMA_API_URL || process.env.OLLAMA_API_URL,
});

if (process.env.SENTINELOPS_SKIP_DB === "1") {
  // In lightweight test environments we skip the native SQLite dependency.
  console.debug("[agents] Skipping initDb because SENTINELOPS_SKIP_DB=1");
} else {
  initDb();
}

const defaultModelName = process.env.NOS_MODEL_NAME_AT_ENDPOINT || process.env.MODEL_NAME_AT_ENDPOINT || "qwen3:8b";

const createMemory = <Schema extends z.ZodTypeAny>(schema: Schema) =>
  new Memory({
    storage: new LibSQLStore({ url: "file::memory:" }),
    options: {
      workingMemory: {
        enabled: true,
        schema: schema as any,
      },
    },
  });

const DevOpsMemorySchema = z.object({
  openApprovals: z
    .array(
      z.object({
        actionId: z.string(),
        summary: z.string(),
        status: z.enum(["awaiting", "approved", "rejected"]).default("awaiting"),
        createdAt: z.string().datetime().optional(),
      })
    )
    .default([]),
});

const IncidentMemorySchema = z.object({
  incidents: z
    .array(
      z.object({
        id: z.string(),
        lastSummary: z.string().optional(),
        hypotheses: z.array(z.string()).default([]),
        updatedAt: z.string().datetime().optional(),
      })
    )
    .default([]),
});

const MonitorMemorySchema = z.object({
  recentAlerts: z
    .array(
      z.object({
        service: z.string(),
        signature: z.string(),
        createdAt: z.string().datetime(),
      })
    )
    .default([]),
});

const ForensicsMemorySchema = z.object({
  drafts: z
    .array(
      z.object({
        postmortemId: z.string(),
        incidentId: z.string(),
        status: z.enum(["draft", "published"]).default("draft"),
      })
    )
    .default([]),
});

const DiscordMemorySchema = z.object({
  recentThreads: z
    .array(
      z.object({
        threadId: z.string(),
        incidentId: z.string().optional(),
        lastMessageId: z.string().optional(),
      })
    )
    .default([]),
});

const AgentBprimeMemorySchema = z.object({
  focusAreas: z.array(z.string()).default([]),
  latestStrategyId: z.string().optional(),
});

const CodeExpertMemorySchema = z.object({
  activeReviews: z
    .array(
      z.object({
        branch: z.string().optional(),
        summary: z.string().optional(),
        createdAt: z.string().datetime().optional(),
      })
    )
    .default([]),
  suggestionsBacklog: z
    .array(
      z.object({
        path: z.string(),
        description: z.string(),
        status: z.enum(["open", "done"]).default("open"),
      })
    )
    .default([]),
});

export const devOpsAgent = new Agent({
  name: "DevOpsGPT",
  description: "Orchestrates releases, approvals, and deployment hygiene.",
  instructions: DEVOPS_GPT_PROMPT,
  model: ollama(defaultModelName),
  tools: {
    startDeployTool,
    listDeploysTool,
    getJobStatusTool,
    listPostmortemsTool,
    approveIncidentActionTool,
    rejectIncidentActionTool,
  },
  memory: createMemory(DevOpsMemorySchema),
});

export const incidentCommanderAgent = new Agent({
  name: "IncidentCommanderAgent",
  description: "Triages incidents, proposes mitigations, and coordinates remediation.",
  instructions: INCIDENT_COMMANDER_PROMPT,
  model: ollama(defaultModelName),
  tools: {
    createAlertTool,
    ackAlertTool,
    resolveAlertTool,
    queryLogsTool,
    sampleLogsTool,
    rollbackDeployTool,
    listDeploysTool,
    createPostmortemTool,
    createIncidentActionTool,
  },
  memory: createMemory(IncidentMemorySchema),
});

export const monitorAgent = new Agent({
  name: "MonitorAgent",
  description: "Streams telemetry, detects anomalies, and raises alerts.",
  instructions: MONITOR_AGENT_PROMPT,
  model: ollama(defaultModelName),
  tools: {
    ingestLogTool,
    createAlertTool,
    subscribeAlertsTool,
    listDeploysTool,
  },
  memory: createMemory(MonitorMemorySchema),
});

export const forensicsAgent = new Agent({
  name: "ForensicsAgent",
  description: "Drafts postmortems with timelines, root cause analysis, and action items.",
  instructions: FORENSICS_AGENT_PROMPT,
  model: ollama(defaultModelName),
  tools: {
    createPostmortemTool,
    publishPostmortemTool,
    listPostmortemsTool,
    sampleLogsTool,
    queryLogsTool,
  },
  memory: createMemory(ForensicsMemorySchema),
});

export const humanOpsAgent = new Agent({
  name: "HumanOpsAgent",
  description: "Dashboard copilot for on-call operators.",
  instructions: HUMAN_OPS_PROMPT,
  model: ollama(defaultModelName),
  tools: {
    listDeploysTool,
    listPostmortemsTool,
    queryLogsTool,
    getJobStatusTool,
    approveIncidentActionTool,
    rejectIncidentActionTool,
    listStrategiesTool,
  },
  memory: createMemory(HumanOpsMemorySchema),
});

export const codeExpertAgent = new Agent({
  name: "CodeExpertAgent",
  description: "Hands-on coding expert for diff analysis, implementation planning, and review.",
  instructions: CODE_EXPERT_PROMPT,
  model: ollama(defaultModelName),
  tools: {
    gitStatusTool,
    gitDiffTool,
    gitStageTool,
    gitCommitTool,
    gitPushTool,
    gitBranchTool,
    listDeploysTool,
    listPostmortemsTool,
    queryLogsTool,
    createStrategyTool,
  },
  memory: createMemory(CodeExpertMemorySchema),
});

export const discordTriageAgent = new Agent({
  name: "DiscordTriageAgent",
  description: "Handles Discord triage interactions, offering safe troubleshooting steps.",
  instructions: DISCORD_TRIAGE_PROMPT,
  model: ollama(defaultModelName),
  tools: {
    sampleLogsTool,
    createAlertTool,
    ingestLogTool,
    weatherTool, // temporary fallback for lightweight responses; remove once repo tool is ready
  },
  memory: createMemory(DiscordMemorySchema),
});

export const agentBprime = new Agent({
  name: "AgentBprime",
  description: "Coding strategist optimising SentinelOps for BlueShift competitions.",
  instructions: AGENT_BPRIME_PROMPT,
  model: ollama(defaultModelName),
  tools: {
    listDeploysTool,
    listStrategiesTool,
    createStrategyTool,
    listPostmortemsTool,
    queryLogsTool,
  },
  memory: createMemory(AgentBprimeMemorySchema),
});

export const agentsRegistry = {
  devOpsAgent,
  incidentCommanderAgent,
  monitorAgent,
  forensicsAgent,
  humanOpsAgent,
  codeExpertAgent,
  discordTriageAgent,
  agentBprime,
} as const;

export type AgentsRegistry = typeof agentsRegistry;

export { HumanOpsMemorySchema } from "./memory";
