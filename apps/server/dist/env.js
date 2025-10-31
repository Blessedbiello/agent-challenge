"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const EnvSchema = zod_1.z.object({
    NODE_ENV: zod_1.z
        .enum(["development", "test", "production"])
        .default("development"),
    SERVER_HOST: zod_1.z.string().min(1).default("0.0.0.0"),
    SERVER_PORT: zod_1.z
        .union([zod_1.z.string(), zod_1.z.number()])
        .transform((value) => Number(value))
        .refine((value) => Number.isInteger(value) && value > 0 && value < 65536, {
        message: "SERVER_PORT must be a valid TCP port",
    })
        .default(4111),
    LOG_LEVEL: zod_1.z
        .enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
        .default("info"),
});
exports.env = EnvSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
    SERVER_HOST: process.env.SERVER_HOST ?? process.env.HOST,
    SERVER_PORT: process.env.SERVER_PORT ?? process.env.PORT,
    LOG_LEVEL: process.env.LOG_LEVEL,
});
//# sourceMappingURL=env.js.map