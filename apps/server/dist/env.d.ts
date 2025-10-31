import { z } from "zod";
declare const EnvSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<["development", "test", "production"]>>;
    SERVER_HOST: z.ZodDefault<z.ZodString>;
    SERVER_PORT: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>>;
    LOG_LEVEL: z.ZodDefault<z.ZodEnum<["fatal", "error", "warn", "info", "debug", "trace", "silent"]>>;
}, "strip", z.ZodTypeAny, {
    NODE_ENV: "development" | "test" | "production";
    SERVER_HOST: string;
    SERVER_PORT: number;
    LOG_LEVEL: "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent";
}, {
    NODE_ENV?: "development" | "test" | "production" | undefined;
    SERVER_HOST?: string | undefined;
    SERVER_PORT?: string | number | undefined;
    LOG_LEVEL?: "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent" | undefined;
}>;
export type Env = z.infer<typeof EnvSchema>;
export declare const env: Env;
export {};
