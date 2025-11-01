declare module "@sentinelops/agents" {
  export { agentsRegistry } from "../../../../packages/agents/src";
  export type { AgentsRegistry } from "../../../../packages/agents/src";
}

declare module "@sentinelops/agents/memory" {
  import { HumanOpsMemorySchema } from "../../../../packages/agents/src/memory";
  export { HumanOpsMemorySchema };
}

declare module "@sentinelops/ui" {
  import { SentinelOpsPlaceholder } from "../../../../packages/ui/src";
  export { SentinelOpsPlaceholder };
}

declare module "@sentinelops/tools" {
  export {
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
    createStrategy,
    listStrategies,
    listAlerts,
    getAlert,
    listLogs,
    listJobs,
    listIncidentActions,
  } from "../../../../packages/tools/src";
}
