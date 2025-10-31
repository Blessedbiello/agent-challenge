import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { getDb } from "@sentinelops/persistence";

export const StrategySchema = z.object({
  id: z.string(),
  title: z.string(),
  focusArea: z.string(),
  constraints: z.string().nullable(),
  plan: z.string(),
  metrics: z.record(z.string(), z.any()).nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type StrategyRecord = z.infer<typeof StrategySchema>;

export const CreateStrategyInputSchema = z.object({
  title: z.string().min(3),
  focusArea: z.string().min(3),
  constraints: z.string().optional(),
  plan: z.string().min(10),
  metrics: z.record(z.string(), z.any()).optional(),
});

export function createStrategy(input: z.infer<typeof CreateStrategyInputSchema>): StrategyRecord {
  const db = getDb();
  const now = new Date().toISOString();
  const record: StrategyRecord = {
    id: randomUUID(),
    title: input.title,
    focusArea: input.focusArea,
    constraints: input.constraints ?? null,
    plan: input.plan,
    metrics: input.metrics ?? null,
    createdAt: now,
    updatedAt: now,
  };

  db.prepare(
    `INSERT INTO hackathon_strategies (id, title, focus_area, constraints, plan, metrics, created_at, updated_at)
     VALUES (@id, @title, @focusArea, @constraints, @plan, @metrics, @createdAt, @updatedAt)`
  ).run({
    ...record,
    constraints: record.constraints,
    metrics: record.metrics ? JSON.stringify(record.metrics) : null,
  });

  return record;
}

export function listStrategies(): StrategyRecord[] {
  const db = getDb();
  const rows = db.prepare(`SELECT * FROM hackathon_strategies ORDER BY created_at DESC`).all();
  return rows.map((row: any) => ({
    id: row.id,
    title: row.title,
    focusArea: row.focus_area,
    constraints: row.constraints ?? null,
    plan: row.plan,
    metrics: row.metrics ? JSON.parse(row.metrics) : null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

export function clearStrategies() {
  const db = getDb();
  db.prepare(`DELETE FROM hackathon_strategies`).run();
}

export const createStrategyTool = createTool({
  id: "strategies.create",
  description: "Document a hackathon optimisation strategy",
  inputSchema: CreateStrategyInputSchema,
  outputSchema: StrategySchema,
  execute: async ({ context }) => createStrategy(context),
});

export const listStrategiesTool = createTool({
  id: "strategies.list",
  description: "List saved hackathon strategies",
  inputSchema: z.object({}).optional(),
  outputSchema: z.object({ strategies: z.array(StrategySchema) }),
  execute: async () => ({ strategies: listStrategies() }),
});
