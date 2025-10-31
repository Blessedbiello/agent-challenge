"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDeploysTool = exports.getJobStatusTool = exports.rollbackDeployTool = exports.startDeployTool = exports.DeploySpecSchema = void 0;
exports.createDeployJob = createDeployJob;
exports.createRollbackJob = createRollbackJob;
exports.upsertJob = upsertJob;
exports.listJobs = listJobs;
exports.clearJobs = clearJobs;
const node_crypto_1 = require("node:crypto");
const tools_1 = require("@mastra/core/tools");
const zod_1 = require("zod");
const persistence_1 = require("@sentinelops/persistence");
exports.DeploySpecSchema = zod_1.z.object({
    service: zod_1.z.string().min(1),
    image: zod_1.z.string().min(1),
    version: zod_1.z.string().min(1).default("latest"),
    command: zod_1.z.array(zod_1.z.string()).default([]),
    env: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).default({}),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
const StartDeployInputSchema = zod_1.z.object({
    spec: exports.DeploySpecSchema,
});
const RollbackInputSchema = zod_1.z.object({
    target: zod_1.z.string().min(1).describe("Job ID or release identifier"),
    reason: zod_1.z.string().optional(),
});
const GetJobStatusInputSchema = zod_1.z.object({
    jobId: zod_1.z.string().min(1),
});
const ListDeploysInputSchema = zod_1.z.object({
    service: zod_1.z.string().optional(),
    since: zod_1.z.string().datetime({ offset: true }).optional(),
});
const DeployJobSchema = zod_1.z.object({
    id: zod_1.z.string(),
    service: zod_1.z.string(),
    status: zod_1.z.enum(["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    spec: exports.DeploySpecSchema,
    type: zod_1.z.enum(["DEPLOY", "ROLLBACK"]),
    parentJobId: zod_1.z.string().optional(),
    outcome: zod_1.z.string().optional(),
});
function deserializeJob(row) {
    return {
        id: row.id,
        service: row.service,
        status: row.status,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        spec: JSON.parse(row.spec),
        type: row.type,
        parentJobId: row.parent_job_id ?? undefined,
        outcome: row.outcome ?? undefined,
    };
}
function createDeployJob(spec, overrides) {
    const db = (0, persistence_1.getDb)();
    const now = new Date().toISOString();
    const job = {
        id: overrides?.id ?? (0, node_crypto_1.randomUUID)(),
        service: spec.service,
        status: overrides?.status ?? "PENDING",
        createdAt: overrides?.createdAt ?? now,
        updatedAt: overrides?.updatedAt ?? now,
        spec,
        type: overrides?.type ?? "DEPLOY",
        parentJobId: overrides?.parentJobId,
        outcome: overrides?.outcome,
    };
    db.prepare(`INSERT INTO deploy_jobs (id, service, status, created_at, updated_at, spec, type, parent_job_id, outcome)
     VALUES (@id, @service, @status, @createdAt, @updatedAt, @spec, @type, @parentJobId, @outcome)`).run({
        ...job,
        spec: JSON.stringify(spec),
        parentJobId: job.parentJobId ?? null,
        outcome: job.outcome ?? null,
    });
    return job;
}
function createRollbackJob(target, releaseId, overrides) {
    const spec = target?.spec ?? {
        service: target?.service ?? "unknown",
        image: target?.spec.image ?? "",
        version: releaseId,
        command: [],
        env: {},
        metadata: target?.spec.metadata,
    };
    return createDeployJob(spec, {
        ...overrides,
        service: target?.service ?? spec.service,
        type: "ROLLBACK",
        parentJobId: target?.id,
    });
}
exports.startDeployTool = (0, tools_1.createTool)({
    id: "deploy.start",
    description: "Trigger a deployment on the Nosana network",
    inputSchema: StartDeployInputSchema,
    outputSchema: DeployJobSchema,
    execute: async ({ context }) => {
        return createDeployJob(context.spec);
    },
});
exports.rollbackDeployTool = (0, tools_1.createTool)({
    id: "deploy.rollback",
    description: "Create a rollback job for a previous deployment",
    inputSchema: RollbackInputSchema,
    outputSchema: DeployJobSchema,
    execute: async ({ context }) => {
        const targetJob = getJob(context.target) ?? findJobByRelease(context.target);
        return createRollbackJob(targetJob ?? undefined, context.target, { outcome: context.reason });
    },
});
exports.getJobStatusTool = (0, tools_1.createTool)({
    id: "deploy.status",
    description: "Retrieve the latest status for a deployment job",
    inputSchema: GetJobStatusInputSchema,
    outputSchema: DeployJobSchema,
    execute: async ({ context }) => {
        const job = getJob(context.jobId);
        if (!job) {
            throw new Error(`Job ${context.jobId} not found`);
        }
        return job;
    },
});
exports.listDeploysTool = (0, tools_1.createTool)({
    id: "deploy.list",
    description: "List recent deployments with optional filters",
    inputSchema: ListDeploysInputSchema,
    outputSchema: zod_1.z.object({
        count: zod_1.z.number(),
        jobs: zod_1.z.array(DeployJobSchema),
    }),
    execute: async ({ context }) => {
        const db = (0, persistence_1.getDb)();
        const conditions = [];
        const params = [];
        if (context.service) {
            conditions.push("service = ?");
            params.push(context.service);
        }
        if (context.since) {
            conditions.push("created_at >= ?");
            params.push(context.since);
        }
        const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
        const rows = db
            .prepare(`SELECT * FROM deploy_jobs ${whereClause} ORDER BY created_at DESC`)
            .all(...params);
        const jobs = rows.map(deserializeJob);
        return { count: jobs.length, jobs };
    },
});
function getJob(id) {
    const db = (0, persistence_1.getDb)();
    const row = db.prepare(`SELECT * FROM deploy_jobs WHERE id = ?`).get(id);
    return row ? deserializeJob(row) : null;
}
function findJobByRelease(releaseId) {
    const db = (0, persistence_1.getDb)();
    const row = db.prepare(`SELECT * FROM deploy_jobs WHERE json_extract(spec, '$.version') = ?`).get(releaseId);
    return row ? deserializeJob(row) : undefined;
}
function upsertJob(job) {
    const db = (0, persistence_1.getDb)();
    db.prepare(`INSERT INTO deploy_jobs (id, service, status, created_at, updated_at, spec, type, parent_job_id, outcome)
     VALUES (@id, @service, @status, @createdAt, @updatedAt, @spec, @type, @parentJobId, @outcome)
     ON CONFLICT(id) DO UPDATE SET
       service = excluded.service,
       status = excluded.status,
       created_at = excluded.created_at,
       updated_at = excluded.updated_at,
       spec = excluded.spec,
       type = excluded.type,
       parent_job_id = excluded.parent_job_id,
       outcome = excluded.outcome`).run({
        ...job,
        spec: JSON.stringify(job.spec),
        parentJobId: job.parentJobId ?? null,
        outcome: job.outcome ?? null,
    });
}
function listJobs() {
    const db = (0, persistence_1.getDb)();
    const rows = db.prepare(`SELECT * FROM deploy_jobs ORDER BY created_at DESC`).all();
    return rows.map(deserializeJob);
}
function clearJobs() {
    const db = (0, persistence_1.getDb)();
    db.prepare(`DELETE FROM deploy_jobs`).run();
}
//# sourceMappingURL=deploys.js.map