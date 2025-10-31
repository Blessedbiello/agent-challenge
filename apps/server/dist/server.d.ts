import { type FastifyInstance } from "fastify";
export type Server = FastifyInstance;
export declare function createServer(): Server;
export declare function startServer(): Promise<Server>;
