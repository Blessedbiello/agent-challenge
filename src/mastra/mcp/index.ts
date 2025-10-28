import { MCPServer } from "@mastra/mcp"
import {
  ackAlertTool,
  createAlertTool,
  createPostmortemTool,
  getJobStatusTool,
  ingestLogTool,
  listDeploysTool,
  listPostmortemsTool,
  queryLogsTool,
  publishPostmortemTool,
  resolveAlertTool,
  rollbackDeployTool,
  sampleLogsTool,
  startDeployTool,
  subscribeAlertsTool,
  weatherTool,
} from "../tools";
import { agentsRegistry } from "../agents";

export const server = new MCPServer({
  name: "My Custom Server",
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
  },
  agents: agentsRegistry,
  // workflows: {
  // dataProcessingWorkflow, // this workflow will become tool "run_dataProcessingWorkflow"
  // }
});

export const mcpServersRegistry = {
  core: server,
} as const;
