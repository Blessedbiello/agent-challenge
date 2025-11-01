"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcpServersRegistry = void 0;
const mcp_1 = require("@mastra/mcp");
const tools_1 = require("@sentinelops/tools");
function loadAgentsRegistry() {
    if (process.env.SENTINELOPS_SKIP_DB === "1") {
        return {};
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const module = require("@sentinelops/agents");
    return module.agentsRegistry;
}
const agentsRegistry = loadAgentsRegistry();
exports.mcpServersRegistry = {
    core: new mcp_1.MCPServer({
        name: "SentinelOps MCP",
        version: "1.0.0",
        tools: {
            weatherTool: tools_1.weatherTool,
            createAlertTool: tools_1.createAlertTool,
            ackAlertTool: tools_1.ackAlertTool,
            resolveAlertTool: tools_1.resolveAlertTool,
            subscribeAlertsTool: tools_1.subscribeAlertsTool,
            startDeployTool: tools_1.startDeployTool,
            rollbackDeployTool: tools_1.rollbackDeployTool,
            getJobStatusTool: tools_1.getJobStatusTool,
            listDeploysTool: tools_1.listDeploysTool,
            ingestLogTool: tools_1.ingestLogTool,
            queryLogsTool: tools_1.queryLogsTool,
            sampleLogsTool: tools_1.sampleLogsTool,
            createPostmortemTool: tools_1.createPostmortemTool,
            publishPostmortemTool: tools_1.publishPostmortemTool,
            listPostmortemsTool: tools_1.listPostmortemsTool,
            createIncidentActionTool: tools_1.createIncidentActionTool,
            approveIncidentActionTool: tools_1.approveIncidentActionTool,
            rejectIncidentActionTool: tools_1.rejectIncidentActionTool,
            createStrategyTool: tools_1.createStrategyTool,
            listStrategiesTool: tools_1.listStrategiesTool,
            gitStatusTool: tools_1.gitStatusTool,
            gitDiffTool: tools_1.gitDiffTool,
            gitStageTool: tools_1.gitStageTool,
            gitCommitTool: tools_1.gitCommitTool,
            gitPushTool: tools_1.gitPushTool,
            gitBranchTool: tools_1.gitBranchTool,
        },
        agents: agentsRegistry,
    }),
};
//# sourceMappingURL=mcpRegistry.js.map