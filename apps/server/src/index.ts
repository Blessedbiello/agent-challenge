import { env } from "./env";
import { createServer, startServer } from "./server";

export { createServer, startServer };

export async function bootstrapServer() {
  const app = await startServer();
  app.log.info({
    msg: "SentinelOps MCP server ready",
    host: env.SERVER_HOST,
    port: env.SERVER_PORT,
    environment: env.NODE_ENV,
  });

  return app;
}

if (require.main === module) {
  bootstrapServer().catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to start SentinelOps server", error);
    process.exit(1);
  });
}
