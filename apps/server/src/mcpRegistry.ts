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
} from "@sentinelops/tools";
import { agentsRegistry } from "@sentinelops/agents";

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
    },
    agents: agentsRegistry,
  }),
};

export type MCPPresetRegistry = typeof mcpServersRegistry;
