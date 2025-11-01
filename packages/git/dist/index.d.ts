export declare class GitIntegrationDisabledError extends Error {
    constructor();
}
export declare class GitRepositoryNotFoundError extends Error {
    constructor(root: string);
}
export type GitFileChange = {
    path: string;
    headStatus: string;
    worktreeStatus: string;
};
export type GitRenamedFile = {
    from: string;
    to: string;
};
export type GitStatusSummary = {
    branch: string | null;
    tracking: string | null;
    ahead: number;
    behind: number;
    isClean: boolean;
    staged: GitFileChange[];
    unstaged: GitFileChange[];
    untracked: string[];
    created: string[];
    deleted: string[];
    modified: string[];
    conflicted: string[];
    renamed: GitRenamedFile[];
};
export type GitDiffFile = {
    file: string;
    changes: number;
    insertions: number;
    deletions: number;
};
export type GitDiffSummary = {
    cached: boolean;
    files: GitDiffFile[];
    insertions: number;
    deletions: number;
    changes: number;
};
export type GitStageOptions = {
    paths?: string[];
};
export type GitCommitOptions = {
    message: string;
    allowEmpty?: boolean;
    signoff?: boolean;
    author?: {
        name: string;
        email?: string;
    };
};
export type GitCommitResult = {
    sha: string;
    summary: string;
};
export type GitPushOptions = {
    remote?: string;
    branch?: string;
    force?: boolean;
};
export type GitPushResult = {
    remote: string;
    branch: string;
};
export type GitBranchOptions = {
    name: string;
    base?: string;
    checkout?: boolean;
};
export type GitBranchResult = {
    name: string;
    checkedOut: boolean;
};
export declare function gitIntegrationEnabled(): boolean;
export declare function getGitRoot(): string;
export declare function getStatusSummary(): Promise<GitStatusSummary>;
export declare function getDiffSummary(options?: {
    cached?: boolean;
}): Promise<GitDiffSummary>;
export declare function stageChanges(options?: GitStageOptions): Promise<void>;
export declare function commitChanges(options: GitCommitOptions): Promise<GitCommitResult>;
export declare function pushChanges(options?: GitPushOptions): Promise<GitPushResult>;
export declare function createBranch(options: GitBranchOptions): Promise<GitBranchResult>;
