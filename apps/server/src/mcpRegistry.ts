import { MCPServer } from "@mastra/mcp";
import {
  ackAlertTool,
  createAlertTool,
  createPostmortemTool,
  createIncidentActionTool,
  approveIncidentActionTool,
  rejectIncidentActionTool,
  getJobStatusTool,
  ingestLogTool,
  listDeploysTool,
  listPostmortemsTool,
  listStrategiesTool,
  createStrategyTool,
  queryLogsTool,
  publishPostmortemTool,
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
} from "@sentinelops/tools";
import type { AgentsRegistry } from "@sentinelops/agents";

function loadAgentsRegistry(): AgentsRegistry {
  if (process.env.SENTINELOPS_SKIP_DB === "1") {
    return {} as AgentsRegistry;
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const module = require("@sentinelops/agents") as typeof import("@sentinelops/agents");
  return module.agentsRegistry;
}

const agentsRegistry = loadAgentsRegistry();

export const mcpServersRegistry = {
  core: new MCPServer({
    name: "SentinelOps MCP",
    version: "1.0.0",
    tools: {
      weatherTool,
      createAlertTool,
      ackAlertTool,
      resolveAlertTool,
      subscribeAlertsTool,
      startDeployTool,
      rollbackDeployTool,
      getJobStatusTool,
      listDeploysTool,
      ingestLogTool,
      queryLogsTool,
      sampleLogsTool,
      createPostmortemTool,
      publishPostmortemTool,
      listPostmortemsTool,
      createIncidentActionTool,
      approveIncidentActionTool,
      rejectIncidentActionTool,
      createStrategyTool,
      listStrategiesTool,
      gitStatusTool,
      gitDiffTool,
      gitStageTool,
      gitCommitTool,
      gitPushTool,
      gitBranchTool,
    },
    agents: agentsRegistry,
  }),
};

export type MCPPresetRegistry = typeof mcpServersRegistry;
