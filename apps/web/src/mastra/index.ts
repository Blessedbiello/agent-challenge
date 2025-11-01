import { Mastra } from "@mastra/core";
import { agentsRegistry } from "../../../../packages/agents/src";

export const mastra = new Mastra({
  agents: agentsRegistry,
});
