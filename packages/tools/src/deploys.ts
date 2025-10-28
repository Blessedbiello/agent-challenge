import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export type DeployStatus = "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";

export type DeployJob = {
  id: string;
  service: string;
  status: DeployStatus;
  createdAt: string;
  updatedAt: string;
  spec: DeploySpec;
  type: "DEPLOY" | "ROLLBACK";
  parentJobId?: string;
  outcome?: string;
};

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

const DeployJobSchema: z.ZodType<DeployJob> = z.object({
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

const jobsStore = new Map<string, DeployJob>();

export function createDeployJob(spec: DeploySpec, overrides?: Partial<DeployJob>): DeployJob {
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

  jobsStore.set(job.id, job);

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
    const targetJob = jobsStore.get(context.target) ?? findJobByRelease(context.target);

    return createRollbackJob(targetJob, context.target, { outcome: context.reason });
  },
});

export const getJobStatusTool = createTool({
  id: "deploy.status",
  description: "Retrieve the latest status for a deployment job",
  inputSchema: GetJobStatusInputSchema,
  outputSchema: DeployJobSchema,
  execute: async ({ context }) => {
    const job = jobsStore.get(context.jobId);
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
    let jobs = Array.from(jobsStore.values());

    if (context.service) {
      jobs = jobs.filter((job) => job.service === context.service);
    }

    if (context.since) {
      const boundary = context.since;
      jobs = jobs.filter((job) => job.createdAt >= boundary);
    }

    jobs.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

    return { count: jobs.length, jobs };
  },
});

function findJobByRelease(releaseId: string) {
  return Array.from(jobsStore.values()).find((job) => job.spec.version === releaseId);
}

export function upsertJob(job: DeployJob) {
  jobsStore.set(job.id, job);
}

export function listJobs(): DeployJob[] {
  return Array.from(jobsStore.values());
}

export function clearJobs() {
  jobsStore.clear();
}
