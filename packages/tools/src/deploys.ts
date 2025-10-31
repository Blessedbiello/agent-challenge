import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { getDb } from "@sentinelops/persistence";

export type DeployStatus = "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";

export const DeploySpecSchema = z.object({
  service: z.string().min(1),
  image: z.string().min(1),
  version: z.string().min(1).default("latest"),
  command: z.array(z.string()).default([]),
  env: z.record(z.string(), z.string()).default({}),
  metadata: z.record(z.string(), z.any()).optional(),
});

export type DeploySpec = z.infer<typeof DeploySpecSchema>;

const StartDeployInputSchema = z.object({
  spec: DeploySpecSchema,
});

const RollbackInputSchema = z.object({
  target: z.string().min(1).describe("Job ID or release identifier"),
  reason: z.string().optional(),
});

const GetJobStatusInputSchema = z.object({
  jobId: z.string().min(1),
});

const ListDeploysInputSchema = z.object({
  service: z.string().optional(),
  since: z.string().datetime({ offset: true }).optional(),
});

export const DeployJobSchema = z.object({
  id: z.string(),
  service: z.string(),
  status: z.enum(["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]),
  createdAt: z.string(),
  updatedAt: z.string(),
  spec: DeploySpecSchema,
  type: z.enum(["DEPLOY", "ROLLBACK"]),
  parentJobId: z.string().optional(),
  outcome: z.string().optional(),
});

export type DeployJob = z.infer<typeof DeployJobSchema>;

function deserializeJob(row: any): DeployJob {
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

export function createDeployJob(spec: DeploySpec, overrides?: Partial<DeployJob>): DeployJob {
  const db = getDb();
  const now = new Date().toISOString();
  const job: DeployJob = {
    id: overrides?.id ?? randomUUID(),
    service: spec.service,
    status: overrides?.status ?? "PENDING",
    createdAt: overrides?.createdAt ?? now,
    updatedAt: overrides?.updatedAt ?? now,
    spec,
    type: overrides?.type ?? "DEPLOY",
    parentJobId: overrides?.parentJobId,
    outcome: overrides?.outcome,
  };

  db.prepare(
    `INSERT INTO deploy_jobs (id, service, status, created_at, updated_at, spec, type, parent_job_id, outcome)
     VALUES (@id, @service, @status, @createdAt, @updatedAt, @spec, @type, @parentJobId, @outcome)`
  ).run({
    ...job,
    spec: JSON.stringify(spec),
    parentJobId: job.parentJobId ?? null,
    outcome: job.outcome ?? null,
  });

  return job;
}

export function createRollbackJob(target: DeployJob | undefined, releaseId: string, overrides?: Partial<DeployJob>): DeployJob {
  const spec: DeploySpec = target?.spec ?? {
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

export const startDeployTool = createTool({
  id: "deploy.start",
  description: "Trigger a deployment on the Nosana network",
  inputSchema: StartDeployInputSchema,
  outputSchema: DeployJobSchema,
  execute: async ({ context }) => {
    return createDeployJob(context.spec);
  },
});

export const rollbackDeployTool = createTool({
  id: "deploy.rollback",
  description: "Create a rollback job for a previous deployment",
  inputSchema: RollbackInputSchema,
  outputSchema: DeployJobSchema,
  execute: async ({ context }) => {
    const targetJob = getJob(context.target) ?? findJobByRelease(context.target);

    return createRollbackJob(targetJob ?? undefined, context.target, { outcome: context.reason });
  },
});

export const getJobStatusTool = createTool({
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

export const listDeploysTool = createTool({
  id: "deploy.list",
  description: "List recent deployments with optional filters",
  inputSchema: ListDeploysInputSchema,
  outputSchema: z.object({
    count: z.number(),
    jobs: z.array(DeployJobSchema),
  }),
  execute: async ({ context }) => {
    const db = getDb();
    const conditions: string[] = [];
    const params: any[] = [];

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

function getJob(id: string): DeployJob | null {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM deploy_jobs WHERE id = ?`).get(id);
  return row ? deserializeJob(row) : null;
}

function findJobByRelease(releaseId: string): DeployJob | undefined {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM deploy_jobs WHERE json_extract(spec, '$.version') = ?`).get(releaseId);
  return row ? deserializeJob(row) : undefined;
}

export function upsertJob(job: DeployJob) {
  const db = getDb();
  db.prepare(
    `INSERT INTO deploy_jobs (id, service, status, created_at, updated_at, spec, type, parent_job_id, outcome)
     VALUES (@id, @service, @status, @createdAt, @updatedAt, @spec, @type, @parentJobId, @outcome)
     ON CONFLICT(id) DO UPDATE SET
       service = excluded.service,
       status = excluded.status,
       created_at = excluded.created_at,
       updated_at = excluded.updated_at,
       spec = excluded.spec,
       type = excluded.type,
       parent_job_id = excluded.parent_job_id,
       outcome = excluded.outcome`
  ).run({
    ...job,
    spec: JSON.stringify(job.spec),
    parentJobId: job.parentJobId ?? null,
    outcome: job.outcome ?? null,
  });
}

export function listJobs(): DeployJob[] {
  const db = getDb();
  const rows = db.prepare(`SELECT * FROM deploy_jobs ORDER BY created_at DESC`).all();
  return rows.map(deserializeJob);
}

export function clearJobs() {
  const db = getDb();
  db.prepare(`DELETE FROM deploy_jobs`).run();
}
