import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  SERVER_HOST: z.string().min(1).default("0.0.0.0"),
  SERVER_PORT: z
    .union([z.string(), z.number()])
    .transform((value) => Number(value))
    .refine((value) => Number.isInteger(value) && value > 0 && value < 65536, {
      message: "SERVER_PORT must be a valid TCP port",
    })
    .default(4111),
  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
    .default("info"),
});

export type Env = z.infer<typeof EnvSchema>;

export const env: Env = EnvSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  SERVER_HOST: process.env.SERVER_HOST ?? process.env.HOST,
  SERVER_PORT: process.env.SERVER_PORT ?? process.env.PORT,
  LOG_LEVEL: process.env.LOG_LEVEL,
});
