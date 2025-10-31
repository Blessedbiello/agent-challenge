import { Mastra } from "@mastra/core";
import { agentsRegistry } from "@sentinelops/agents";

export const mastra = new Mastra({
  agents: agentsRegistry,
});
