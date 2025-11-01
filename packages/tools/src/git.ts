import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import {
  gitIntegrationEnabled,
  getStatusSummary,
  getDiffSummary,
  stageChanges,
  commitChanges,
  pushChanges,
  createBranch,
  GitIntegrationDisabledError,
  GitRepositoryNotFoundError,
} from "@sentinelops/git";

const GitFileChangeSchema = z.object({
  path: z.string(),
  headStatus: z.string(),
  worktreeStatus: z.string(),
});

const GitRenamedFileSchema = z.object({
  from: z.string(),
  to: z.string(),
});

const GitStatusSchema = z.object({
  branch: z.string().nullable(),
  tracking: z.string().nullable(),
  ahead: z.number(),
  behind: z.number(),
  isClean: z.boolean(),
  staged: z.array(GitFileChangeSchema),
  unstaged: z.array(GitFileChangeSchema),
  untracked: z.array(z.string()),
  created: z.array(z.string()),
  deleted: z.array(z.string()),
  modified: z.array(z.string()),
  conflicted: z.array(z.string()),
  renamed: z.array(GitRenamedFileSchema),
});

const GitDiffFileSchema = z.object({
  file: z.string(),
  changes: z.number(),
  insertions: z.number(),
  deletions: z.number(),
});

const GitDiffSchema = z.object({
  cached: z.boolean(),
  files: z.array(GitDiffFileSchema),
  insertions: z.number(),
  deletions: z.number(),
  changes: z.number(),
});

const GitStatusOutputSchema = z.object({
  enabled: z.boolean(),
  status: GitStatusSchema.nullable(),
  error: z
    .object({
      message: z.string(),
      code: z.string(),
    })
    .optional(),
});

const GitDiffOutputSchema = z.object({
  enabled: z.boolean(),
  diff: GitDiffSchema.nullable(),
  error: z
    .object({
      message: z.string(),
      code: z.string(),
    })
    .optional(),
});

const GitStageInputSchema = z.object({
  paths: z.array(z.string().min(1)).optional(),
});

const GitStageOutputSchema = z.object({
  enabled: z.boolean(),
  success: z.boolean(),
  error: z
    .object({
      message: z.string(),
      code: z.string(),
    })
    .optional(),
});

const GitCommitInputSchema = z.object({
  message: z.string().min(1),
  allowEmpty: z.boolean().optional(),
  signoff: z.boolean().optional(),
  author: z
    .object({
      name: z.string().min(1),
      email: z.string().email().optional(),
    })
    .optional(),
});

const GitCommitOutputSchema = z.object({
  enabled: z.boolean(),
  commit: z
    .object({
      sha: z.string(),
      summary: z.string(),
    })
    .nullable(),
  error: z
    .object({
      message: z.string(),
      code: z.string(),
    })
    .optional(),
});

const GitPushInputSchema = z.object({
  remote: z.string().min(1).optional(),
  branch: z.string().min(1).optional(),
  force: z.boolean().optional(),
});

const GitPushOutputSchema = z.object({
  enabled: z.boolean(),
  result: z
    .object({
      remote: z.string(),
      branch: z.string(),
    })
    .nullable(),
  error: z
    .object({
      message: z.string(),
      code: z.string(),
    })
    .optional(),
});

const GitBranchInputSchema = z.object({
  name: z.string().min(1),
  base: z.string().min(1).optional(),
  checkout: z.boolean().optional(),
});

const GitBranchOutputSchema = z.object({
  enabled: z.boolean(),
  branch: z
    .object({
      name: z.string(),
      checkedOut: z.boolean(),
    })
    .nullable(),
  error: z
    .object({
      message: z.string(),
      code: z.string(),
    })
    .optional(),
});

function toErrorPayload(error: unknown) {
  if (error instanceof GitIntegrationDisabledError) {
    return { code: "GIT_DISABLED", message: error.message };
  }

  if (error instanceof GitRepositoryNotFoundError) {
    return { code: "GIT_REPOSITORY_NOT_FOUND", message: error.message };
  }

  if (error instanceof Error) {
    return { code: "GIT_ERROR", message: error.message };
  }

  return { code: "GIT_ERROR", message: "Unknown git error encountered" };
}

export const gitStatusTool = createTool({
  id: "git.status",
  description: "Return a snapshot of the current Git repository status.",
  inputSchema: z.object({}).optional(),
  outputSchema: GitStatusOutputSchema,
  execute: async () => {
    if (!gitIntegrationEnabled()) {
      return { enabled: false, status: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
    }

    try {
      const status = await getStatusSummary();
      return { enabled: true, status, error: undefined };
    } catch (error) {
      return { enabled: false, status: null, error: toErrorPayload(error) };
    }
  },
});

const GitDiffInputSchema = z.object({
  cached: z.boolean().optional(),
});

export const gitDiffTool = createTool({
  id: "git.diff",
  description: "Summarise current Git diff optionally restricted to staged changes.",
  inputSchema: GitDiffInputSchema.optional(),
  outputSchema: GitDiffOutputSchema,
  execute: async ({ context }) => {
    if (!gitIntegrationEnabled()) {
      return { enabled: false, diff: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
    }

    try {
      const diff = await getDiffSummary({ cached: context?.cached });
      return { enabled: true, diff, error: undefined };
    } catch (error) {
      return { enabled: false, diff: null, error: toErrorPayload(error) };
    }
  },
});

export const gitStageTool = createTool({
  id: "git.stage",
  description: "Stage one or more paths (defaults to all tracked changes).",
  inputSchema: GitStageInputSchema.optional(),
  outputSchema: GitStageOutputSchema,
  execute: async ({ context }) => {
    if (!gitIntegrationEnabled()) {
      return { enabled: false, success: false, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
    }

    try {
      await stageChanges({ paths: context?.paths });
      return { enabled: true, success: true };
    } catch (error) {
      return { enabled: true, success: false, error: toErrorPayload(error) };
    }
  },
});

export const gitCommitTool = createTool({
  id: "git.commit",
  description: "Commit staged changes with an optional author override.",
  inputSchema: GitCommitInputSchema,
  outputSchema: GitCommitOutputSchema,
  execute: async ({ context }) => {
    if (!gitIntegrationEnabled()) {
      return { enabled: false, commit: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
    }

    try {
      const result = await commitChanges({
        message: context.message,
        allowEmpty: context.allowEmpty,
        signoff: context.signoff,
        author: context.author,
      });
      return { enabled: true, commit: result };
    } catch (error) {
      return { enabled: true, commit: null, error: toErrorPayload(error) };
    }
  },
});

export const gitPushTool = createTool({
  id: "git.push",
  description: "Push the current branch (or specified branch) to a remote.",
  inputSchema: GitPushInputSchema.optional(),
  outputSchema: GitPushOutputSchema,
  execute: async ({ context }) => {
    if (!gitIntegrationEnabled()) {
      return { enabled: false, result: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
    }

    try {
      const result = await pushChanges({
        remote: context?.remote,
        branch: context?.branch,
        force: context?.force,
      });
      return { enabled: true, result };
    } catch (error) {
      return { enabled: true, result: null, error: toErrorPayload(error) };
    }
  },
});

export const gitBranchTool = createTool({
  id: "git.branch",
  description: "Create (and optionally checkout) a new branch.",
  inputSchema: GitBranchInputSchema,
  outputSchema: GitBranchOutputSchema,
  execute: async ({ context }) => {
    if (!gitIntegrationEnabled()) {
      return { enabled: false, branch: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
    }

    try {
      const branch = await createBranch({
        name: context.name,
        base: context.base,
        checkout: context.checkout,
      });
      return { enabled: true, branch };
    } catch (error) {
      return { enabled: true, branch: null, error: toErrorPayload(error) };
    }
  },
});

export {
  GitStatusSchema,
  GitDiffSchema,
  GitFileChangeSchema,
  GitDiffFileSchema,
  GitStatusOutputSchema,
  GitDiffOutputSchema,
  GitDiffInputSchema,
  GitStageInputSchema,
  GitStageOutputSchema,
  GitCommitInputSchema,
  GitCommitOutputSchema,
  GitPushInputSchema,
  GitPushOutputSchema,
  GitBranchInputSchema,
  GitBranchOutputSchema,
};
