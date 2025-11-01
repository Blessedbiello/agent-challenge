"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchOutputSchema = exports.GitBranchInputSchema = exports.GitPushOutputSchema = exports.GitPushInputSchema = exports.GitCommitOutputSchema = exports.GitCommitInputSchema = exports.GitStageOutputSchema = exports.GitStageInputSchema = exports.GitDiffInputSchema = exports.GitDiffOutputSchema = exports.GitStatusOutputSchema = exports.GitDiffFileSchema = exports.GitFileChangeSchema = exports.GitDiffSchema = exports.GitStatusSchema = exports.gitBranchTool = exports.gitPushTool = exports.gitCommitTool = exports.gitStageTool = exports.gitDiffTool = exports.gitStatusTool = void 0;
const tools_1 = require("@mastra/core/tools");
const zod_1 = require("zod");
const git_1 = require("@sentinelops/git");
const GitFileChangeSchema = zod_1.z.object({
    path: zod_1.z.string(),
    headStatus: zod_1.z.string(),
    worktreeStatus: zod_1.z.string(),
});
exports.GitFileChangeSchema = GitFileChangeSchema;
const GitRenamedFileSchema = zod_1.z.object({
    from: zod_1.z.string(),
    to: zod_1.z.string(),
});
const GitStatusSchema = zod_1.z.object({
    branch: zod_1.z.string().nullable(),
    tracking: zod_1.z.string().nullable(),
    ahead: zod_1.z.number(),
    behind: zod_1.z.number(),
    isClean: zod_1.z.boolean(),
    staged: zod_1.z.array(GitFileChangeSchema),
    unstaged: zod_1.z.array(GitFileChangeSchema),
    untracked: zod_1.z.array(zod_1.z.string()),
    created: zod_1.z.array(zod_1.z.string()),
    deleted: zod_1.z.array(zod_1.z.string()),
    modified: zod_1.z.array(zod_1.z.string()),
    conflicted: zod_1.z.array(zod_1.z.string()),
    renamed: zod_1.z.array(GitRenamedFileSchema),
});
exports.GitStatusSchema = GitStatusSchema;
const GitDiffFileSchema = zod_1.z.object({
    file: zod_1.z.string(),
    changes: zod_1.z.number(),
    insertions: zod_1.z.number(),
    deletions: zod_1.z.number(),
});
exports.GitDiffFileSchema = GitDiffFileSchema;
const GitDiffSchema = zod_1.z.object({
    cached: zod_1.z.boolean(),
    files: zod_1.z.array(GitDiffFileSchema),
    insertions: zod_1.z.number(),
    deletions: zod_1.z.number(),
    changes: zod_1.z.number(),
});
exports.GitDiffSchema = GitDiffSchema;
const GitStatusOutputSchema = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    status: GitStatusSchema.nullable(),
    error: zod_1.z
        .object({
        message: zod_1.z.string(),
        code: zod_1.z.string(),
    })
        .optional(),
});
exports.GitStatusOutputSchema = GitStatusOutputSchema;
const GitDiffOutputSchema = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    diff: GitDiffSchema.nullable(),
    error: zod_1.z
        .object({
        message: zod_1.z.string(),
        code: zod_1.z.string(),
    })
        .optional(),
});
exports.GitDiffOutputSchema = GitDiffOutputSchema;
const GitStageInputSchema = zod_1.z.object({
    paths: zod_1.z.array(zod_1.z.string().min(1)).optional(),
});
exports.GitStageInputSchema = GitStageInputSchema;
const GitStageOutputSchema = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    success: zod_1.z.boolean(),
    error: zod_1.z
        .object({
        message: zod_1.z.string(),
        code: zod_1.z.string(),
    })
        .optional(),
});
exports.GitStageOutputSchema = GitStageOutputSchema;
const GitCommitInputSchema = zod_1.z.object({
    message: zod_1.z.string().min(1),
    allowEmpty: zod_1.z.boolean().optional(),
    signoff: zod_1.z.boolean().optional(),
    author: zod_1.z
        .object({
        name: zod_1.z.string().min(1),
        email: zod_1.z.string().email().optional(),
    })
        .optional(),
});
exports.GitCommitInputSchema = GitCommitInputSchema;
const GitCommitOutputSchema = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    commit: zod_1.z
        .object({
        sha: zod_1.z.string(),
        summary: zod_1.z.string(),
    })
        .nullable(),
    error: zod_1.z
        .object({
        message: zod_1.z.string(),
        code: zod_1.z.string(),
    })
        .optional(),
});
exports.GitCommitOutputSchema = GitCommitOutputSchema;
const GitPushInputSchema = zod_1.z.object({
    remote: zod_1.z.string().min(1).optional(),
    branch: zod_1.z.string().min(1).optional(),
    force: zod_1.z.boolean().optional(),
});
exports.GitPushInputSchema = GitPushInputSchema;
const GitPushOutputSchema = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    result: zod_1.z
        .object({
        remote: zod_1.z.string(),
        branch: zod_1.z.string(),
    })
        .nullable(),
    error: zod_1.z
        .object({
        message: zod_1.z.string(),
        code: zod_1.z.string(),
    })
        .optional(),
});
exports.GitPushOutputSchema = GitPushOutputSchema;
const GitBranchInputSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    base: zod_1.z.string().min(1).optional(),
    checkout: zod_1.z.boolean().optional(),
});
exports.GitBranchInputSchema = GitBranchInputSchema;
const GitBranchOutputSchema = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    branch: zod_1.z
        .object({
        name: zod_1.z.string(),
        checkedOut: zod_1.z.boolean(),
    })
        .nullable(),
    error: zod_1.z
        .object({
        message: zod_1.z.string(),
        code: zod_1.z.string(),
    })
        .optional(),
});
exports.GitBranchOutputSchema = GitBranchOutputSchema;
function toErrorPayload(error) {
    if (error instanceof git_1.GitIntegrationDisabledError) {
        return { code: "GIT_DISABLED", message: error.message };
    }
    if (error instanceof git_1.GitRepositoryNotFoundError) {
        return { code: "GIT_REPOSITORY_NOT_FOUND", message: error.message };
    }
    if (error instanceof Error) {
        return { code: "GIT_ERROR", message: error.message };
    }
    return { code: "GIT_ERROR", message: "Unknown git error encountered" };
}
exports.gitStatusTool = (0, tools_1.createTool)({
    id: "git.status",
    description: "Return a snapshot of the current Git repository status.",
    inputSchema: zod_1.z.object({}).optional(),
    outputSchema: GitStatusOutputSchema,
    execute: async () => {
        if (!(0, git_1.gitIntegrationEnabled)()) {
            return { enabled: false, status: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
        }
        try {
            const status = await (0, git_1.getStatusSummary)();
            return { enabled: true, status, error: undefined };
        }
        catch (error) {
            return { enabled: false, status: null, error: toErrorPayload(error) };
        }
    },
});
const GitDiffInputSchema = zod_1.z.object({
    cached: zod_1.z.boolean().optional(),
});
exports.GitDiffInputSchema = GitDiffInputSchema;
exports.gitDiffTool = (0, tools_1.createTool)({
    id: "git.diff",
    description: "Summarise current Git diff optionally restricted to staged changes.",
    inputSchema: GitDiffInputSchema.optional(),
    outputSchema: GitDiffOutputSchema,
    execute: async ({ context }) => {
        if (!(0, git_1.gitIntegrationEnabled)()) {
            return { enabled: false, diff: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
        }
        try {
            const diff = await (0, git_1.getDiffSummary)({ cached: context?.cached });
            return { enabled: true, diff, error: undefined };
        }
        catch (error) {
            return { enabled: false, diff: null, error: toErrorPayload(error) };
        }
    },
});
exports.gitStageTool = (0, tools_1.createTool)({
    id: "git.stage",
    description: "Stage one or more paths (defaults to all tracked changes).",
    inputSchema: GitStageInputSchema.optional(),
    outputSchema: GitStageOutputSchema,
    execute: async ({ context }) => {
        if (!(0, git_1.gitIntegrationEnabled)()) {
            return { enabled: false, success: false, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
        }
        try {
            await (0, git_1.stageChanges)({ paths: context?.paths });
            return { enabled: true, success: true };
        }
        catch (error) {
            return { enabled: true, success: false, error: toErrorPayload(error) };
        }
    },
});
exports.gitCommitTool = (0, tools_1.createTool)({
    id: "git.commit",
    description: "Commit staged changes with an optional author override.",
    inputSchema: GitCommitInputSchema,
    outputSchema: GitCommitOutputSchema,
    execute: async ({ context }) => {
        if (!(0, git_1.gitIntegrationEnabled)()) {
            return { enabled: false, commit: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
        }
        try {
            const result = await (0, git_1.commitChanges)({
                message: context.message,
                allowEmpty: context.allowEmpty,
                signoff: context.signoff,
                author: context.author,
            });
            return { enabled: true, commit: result };
        }
        catch (error) {
            return { enabled: true, commit: null, error: toErrorPayload(error) };
        }
    },
});
exports.gitPushTool = (0, tools_1.createTool)({
    id: "git.push",
    description: "Push the current branch (or specified branch) to a remote.",
    inputSchema: GitPushInputSchema.optional(),
    outputSchema: GitPushOutputSchema,
    execute: async ({ context }) => {
        if (!(0, git_1.gitIntegrationEnabled)()) {
            return { enabled: false, result: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
        }
        try {
            const result = await (0, git_1.pushChanges)({
                remote: context?.remote,
                branch: context?.branch,
                force: context?.force,
            });
            return { enabled: true, result };
        }
        catch (error) {
            return { enabled: true, result: null, error: toErrorPayload(error) };
        }
    },
});
exports.gitBranchTool = (0, tools_1.createTool)({
    id: "git.branch",
    description: "Create (and optionally checkout) a new branch.",
    inputSchema: GitBranchInputSchema,
    outputSchema: GitBranchOutputSchema,
    execute: async ({ context }) => {
        if (!(0, git_1.gitIntegrationEnabled)()) {
            return { enabled: false, branch: null, error: { code: "GIT_DISABLED", message: "Git integration disabled" } };
        }
        try {
            const branch = await (0, git_1.createBranch)({
                name: context.name,
                base: context.base,
                checkout: context.checkout,
            });
            return { enabled: true, branch };
        }
        catch (error) {
            return { enabled: true, branch: null, error: toErrorPayload(error) };
        }
    },
});
//# sourceMappingURL=git.js.map