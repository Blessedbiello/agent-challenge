"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listStrategiesTool = exports.createStrategyTool = exports.CreateStrategyInputSchema = exports.StrategySchema = void 0;
exports.createStrategy = createStrategy;
exports.listStrategies = listStrategies;
exports.clearStrategies = clearStrategies;
const node_crypto_1 = require("node:crypto");
const tools_1 = require("@mastra/core/tools");
const zod_1 = require("zod");
const persistence_1 = require("@sentinelops/persistence");
exports.StrategySchema = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    focusArea: zod_1.z.string(),
    constraints: zod_1.z.string().nullable(),
    plan: zod_1.z.string(),
    metrics: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).nullable(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.CreateStrategyInputSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    focusArea: zod_1.z.string().min(3),
    constraints: zod_1.z.string().optional(),
    plan: zod_1.z.string().min(10),
    metrics: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
function createStrategy(input) {
    const db = (0, persistence_1.getDb)();
    const now = new Date().toISOString();
    const record = {
        id: (0, node_crypto_1.randomUUID)(),
        title: input.title,
        focusArea: input.focusArea,
        constraints: input.constraints ?? null,
        plan: input.plan,
        metrics: input.metrics ?? null,
        createdAt: now,
        updatedAt: now,
    };
    db.prepare(`INSERT INTO hackathon_strategies (id, title, focus_area, constraints, plan, metrics, created_at, updated_at)
     VALUES (@id, @title, @focusArea, @constraints, @plan, @metrics, @createdAt, @updatedAt)`).run({
        ...record,
        constraints: record.constraints,
        metrics: record.metrics ? JSON.stringify(record.metrics) : null,
    });
    return record;
}
function listStrategies() {
    const db = (0, persistence_1.getDb)();
    const rows = db.prepare(`SELECT * FROM hackathon_strategies ORDER BY created_at DESC`).all();
    return rows.map((row) => ({
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
function clearStrategies() {
    const db = (0, persistence_1.getDb)();
    db.prepare(`DELETE FROM hackathon_strategies`).run();
}
exports.createStrategyTool = (0, tools_1.createTool)({
    id: "strategies.create",
    description: "Document a hackathon optimisation strategy",
    inputSchema: exports.CreateStrategyInputSchema,
    outputSchema: exports.StrategySchema,
    execute: async ({ context }) => createStrategy(context),
});
exports.listStrategiesTool = (0, tools_1.createTool)({
    id: "strategies.list",
    description: "List saved hackathon strategies",
    inputSchema: zod_1.z.object({}).optional(),
    outputSchema: zod_1.z.object({ strategies: zod_1.z.array(exports.StrategySchema) }),
    execute: async () => ({ strategies: listStrategies() }),
});
//# sourceMappingURL=strategies.js.map