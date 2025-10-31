"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.createServer = void 0;
exports.bootstrapServer = bootstrapServer;
const env_1 = require("./env");
const server_1 = require("./server");
Object.defineProperty(exports, "createServer", { enumerable: true, get: function () { return server_1.createServer; } });
Object.defineProperty(exports, "startServer", { enumerable: true, get: function () { return server_1.startServer; } });
async function bootstrapServer() {
    const app = await (0, server_1.startServer)();
    app.log.info({
        msg: "SentinelOps MCP server ready",
        host: env_1.env.SERVER_HOST,
        port: env_1.env.SERVER_PORT,
        environment: env_1.env.NODE_ENV,
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
//# sourceMappingURL=index.js.map