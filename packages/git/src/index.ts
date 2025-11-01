import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const ENABLED_VALUES = new Set(["1", "true", "yes", "on"]);

export class GitIntegrationDisabledError extends Error {
  constructor() {
    super("Git integration is disabled (set SENTINELOPS_GIT_ENABLED=1 to enable)");
    this.name = "GitIntegrationDisabledError";
  }
}

export class GitRepositoryNotFoundError extends Error {
  constructor(root: string) {
    super(`Git repository not found at ${root}`);
    this.name = "GitRepositoryNotFoundError";
  }
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

let cachedRoot: string | null = null;

export function gitIntegrationEnabled(): boolean {
  const raw = process.env.SENTINELOPS_GIT_ENABLED ?? "";
  return ENABLED_VALUES.has(raw.toLowerCase());
}

export function getGitRoot(): string {
  if (cachedRoot) {
    return cachedRoot;
  }

  const root = process.env.SENTINELOPS_GIT_ROOT
    ? path.resolve(process.env.SENTINELOPS_GIT_ROOT)
    : process.cwd();

  cachedRoot = root;
  return root;
}

function assertGitReady(): void {
  if (!gitIntegrationEnabled()) {
    throw new GitIntegrationDisabledError();
  }

  const root = getGitRoot();
  if (!fs.existsSync(path.join(root, ".git"))) {
    throw new GitRepositoryNotFoundError(root);
  }
}

async function runGit(args: string[]): Promise<string> {
  assertGitReady();
  const root = getGitRoot();
  const { stdout } = await execFileAsync("git", args, { cwd: root });
  return stdout;
}

function parseBranchHeader(header: string): {
  branch: string | null;
  tracking: string | null;
  ahead: number;
  behind: number;
} {
  if (!header.startsWith("##")) {
    return { branch: null, tracking: null, ahead: 0, behind: 0 };
  }

  const content = header.slice(2).trim();
  let branch: string | null = null;
  let tracking: string | null = null;
  let ahead = 0;
  let behind = 0;

  const [main, meta] = content.split(" ", 2);
  if (main) {
    const parts = main.split("...");
    branch = parts[0] ?? null;
    tracking = parts[1] ?? null;
  }

  if (meta) {
    const matchAhead = meta.match(/ahead (\d+)/);
    const matchBehind = meta.match(/behind (\d+)/);
    ahead = matchAhead ? Number(matchAhead[1]) : 0;
    behind = matchBehind ? Number(matchBehind[1]) : 0;
  }

  return { branch, tracking, ahead, behind };
}

function parseStatusLine(line: string) {
  const status = line.slice(0, 2);
  const pathSpec = line.slice(3);

  let path = pathSpec;
  let renamed: GitRenamedFile | null = null;

  if (status.startsWith("R") && pathSpec.includes(" -> ")) {
    const [from, to] = pathSpec.split(" -> ");
    renamed = { from, to };
    path = to;
  }

  return {
    headStatus: status[0],
    worktreeStatus: status[1],
    path,
    renamed,
    rawPath: pathSpec,
  };
}

export async function getStatusSummary(): Promise<GitStatusSummary> {
  const output = await runGit(["status", "--porcelain=1", "-b"]);
  const lines = output.split(/\r?\n/).filter((line) => line.length > 0);

  const header = lines.shift() ?? "";
  const { branch, tracking, ahead, behind } = parseBranchHeader(header);

  const staged: GitFileChange[] = [];
  const unstaged: GitFileChange[] = [];
  const untracked: string[] = [];
  const created: string[] = [];
  const deleted: string[] = [];
  const modified: string[] = [];
  const conflicted: string[] = [];
  const renamed: GitRenamedFile[] = [];

  lines.forEach((line) => {
    if (line.startsWith("??")) {
      const filePath = line.slice(3);
      untracked.push(filePath);
      return;
    }

    const parsed = parseStatusLine(line);

    if (parsed.renamed) {
      renamed.push(parsed.renamed);
    }

    const change: GitFileChange = {
      path: parsed.path,
      headStatus: parsed.headStatus,
      worktreeStatus: parsed.worktreeStatus,
    };

    if (parsed.headStatus !== " ") {
      staged.push(change);
    }

    if (parsed.worktreeStatus !== " ") {
      unstaged.push(change);
    }

    if (parsed.headStatus === "A" || parsed.worktreeStatus === "A") {
      created.push(parsed.path);
    }

    if (parsed.headStatus === "D" || parsed.worktreeStatus === "D") {
      deleted.push(parsed.path);
    }

    if (parsed.headStatus === "M" || parsed.worktreeStatus === "M") {
      modified.push(parsed.path);
    }

    if (parsed.headStatus === "U" || parsed.worktreeStatus === "U") {
      conflicted.push(parsed.path);
    }
  });

  const isClean =
    staged.length === 0 &&
    unstaged.length === 0 &&
    untracked.length === 0 &&
    created.length === 0 &&
    deleted.length === 0 &&
    modified.length === 0 &&
    conflicted.length === 0;

  return {
    branch,
    tracking,
    ahead,
    behind,
    isClean,
    staged,
    unstaged,
    untracked,
    created,
    deleted,
    modified,
    conflicted,
    renamed,
  };
}

function parseDiffNumstat(output: string): GitDiffFile[] {
  const files: GitDiffFile[] = [];
  const lines = output.split(/\r?\n/).filter(Boolean);

  lines.forEach((line) => {
    const [insertionsRaw, deletionsRaw, file] = line.split("\t");
    if (!file) return;

    const insertions = insertionsRaw === "-" ? 0 : Number(insertionsRaw);
    const deletions = deletionsRaw === "-" ? 0 : Number(deletionsRaw);
    const changes = insertions + deletions;

    files.push({
      file,
      insertions,
      deletions,
      changes,
    });
  });

  return files;
}

export async function getDiffSummary(options?: { cached?: boolean }): Promise<GitDiffSummary> {
  const args = ["diff", "--numstat"];
  if (options?.cached) {
    args.push("--cached");
  }

  const output = await runGit(args);
  const files = parseDiffNumstat(output);

  const summary = files.reduce(
    (acc, file) => {
      acc.insertions += file.insertions;
      acc.deletions += file.deletions;
      acc.changes += file.changes > 0 ? 1 : 0;
      return acc;
    },
    { insertions: 0, deletions: 0, changes: 0 }
  );

  return {
    cached: Boolean(options?.cached),
    files,
    insertions: summary.insertions,
    deletions: summary.deletions,
    changes: summary.changes,
  };
}

export async function stageChanges(options?: GitStageOptions): Promise<void> {
  const paths = options?.paths ?? [];
  if (paths.length === 0) {
    await runGit(["add", "--all"]);
    return;
  }

  await runGit(["add", "--", ...paths]);
}

export async function commitChanges(options: GitCommitOptions): Promise<GitCommitResult> {
  if (!options.message || options.message.trim().length === 0) {
    throw new Error("Commit message cannot be empty");
  }

  const args = ["commit", "-m", options.message];

  if (options.allowEmpty) {
    args.push("--allow-empty");
  }
  if (options.signoff) {
    args.push("--signoff");
  }
  if (options.author?.name) {
    const authorString = options.author.email
      ? `${options.author.name} <${options.author.email}>`
      : options.author.name;
    args.push(`--author=${authorString}`);
  }

  await runGit(args);

  const sha = (await runGit(["rev-parse", "HEAD"])).trim();
  const summary = (await runGit(["log", "-1", "--pretty=%s"])).trim();

  return { sha, summary };
}

export async function pushChanges(options?: GitPushOptions): Promise<GitPushResult> {
  const remote = options?.remote ?? "origin";
  const currentBranch = options?.branch ?? (await getStatusSummary()).branch ?? "";

  if (!currentBranch) {
    throw new Error("Unable to determine current branch for push");
  }

  const args = ["push", remote, currentBranch];
  if (options?.force) {
    args.push("--force-with-lease");
  }

  await runGit(args);

  return {
    remote,
    branch: currentBranch,
  };
}

export async function createBranch(options: GitBranchOptions): Promise<GitBranchResult> {
  if (!options.name || options.name.trim().length === 0) {
    throw new Error("Branch name cannot be empty");
  }

  const name = options.name.trim();
  const base = options.base?.trim();
  const checkout = options.checkout ?? true;

  if (checkout) {
    const args = ["switch", "-c", name];
    if (base) {
      args.push(base);
    }
    await runGit(args);
    return { name, checkedOut: true };
  }

  const args = ["branch", name];
  if (base) {
    args.push(base);
  }
  await runGit(args);
  return { name, checkedOut: false };
}
