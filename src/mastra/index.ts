import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";
import { agentsRegistry } from "./agents";
import { ConsoleLogger, LogLevel } from "@mastra/core/logger";
import { mcpServersRegistry } from "./mcp";

const LOG_LEVEL = process.env.LOG_LEVEL as LogLevel || "info";

export const mastra = new Mastra({
  agents: agentsRegistry,
  mcpServers: mcpServersRegistry,
  storage: new LibSQLStore({
    url: ":memory:"
  }),
  logger: new ConsoleLogger({
    level: LOG_LEVEL,
  }),
});
