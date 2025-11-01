"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitRepositoryNotFoundError = exports.GitIntegrationDisabledError = void 0;
exports.gitIntegrationEnabled = gitIntegrationEnabled;
exports.getGitRoot = getGitRoot;
exports.getStatusSummary = getStatusSummary;
exports.getDiffSummary = getDiffSummary;
exports.stageChanges = stageChanges;
exports.commitChanges = commitChanges;
exports.pushChanges = pushChanges;
exports.createBranch = createBranch;
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const node_child_process_1 = require("node:child_process");
const node_util_1 = require("node:util");
const execFileAsync = (0, node_util_1.promisify)(node_child_process_1.execFile);
const ENABLED_VALUES = new Set(["1", "true", "yes", "on"]);
class GitIntegrationDisabledError extends Error {
    constructor() {
        super("Git integration is disabled (set SENTINELOPS_GIT_ENABLED=1 to enable)");
        this.name = "GitIntegrationDisabledError";
    }
}
exports.GitIntegrationDisabledError = GitIntegrationDisabledError;
class GitRepositoryNotFoundError extends Error {
    constructor(root) {
        super(`Git repository not found at ${root}`);
        this.name = "GitRepositoryNotFoundError";
    }
}
exports.GitRepositoryNotFoundError = GitRepositoryNotFoundError;
let cachedRoot = null;
function gitIntegrationEnabled() {
    const raw = process.env.SENTINELOPS_GIT_ENABLED ?? "";
    return ENABLED_VALUES.has(raw.toLowerCase());
}
function getGitRoot() {
    if (cachedRoot) {
        return cachedRoot;
    }
    const root = process.env.SENTINELOPS_GIT_ROOT
        ? node_path_1.default.resolve(process.env.SENTINELOPS_GIT_ROOT)
        : process.cwd();
    cachedRoot = root;
    return root;
}
function assertGitReady() {
    if (!gitIntegrationEnabled()) {
        throw new GitIntegrationDisabledError();
    }
    const root = getGitRoot();
    if (!node_fs_1.default.existsSync(node_path_1.default.join(root, ".git"))) {
        throw new GitRepositoryNotFoundError(root);
    }
}
async function runGit(args) {
    assertGitReady();
    const root = getGitRoot();
    const { stdout } = await execFileAsync("git", args, { cwd: root });
    return stdout;
}
function parseBranchHeader(header) {
    if (!header.startsWith("##")) {
        return { branch: null, tracking: null, ahead: 0, behind: 0 };
    }
    const content = header.slice(2).trim();
    let branch = null;
    let tracking = null;
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
function parseStatusLine(line) {
    const status = line.slice(0, 2);
    const pathSpec = line.slice(3);
    let path = pathSpec;
    let renamed = null;
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
async function getStatusSummary() {
    const output = await runGit(["status", "--porcelain=1", "-b"]);
    const lines = output.split(/\r?\n/).filter((line) => line.length > 0);
    const header = lines.shift() ?? "";
    const { branch, tracking, ahead, behind } = parseBranchHeader(header);
    const staged = [];
    const unstaged = [];
    const untracked = [];
    const created = [];
    const deleted = [];
    const modified = [];
    const conflicted = [];
    const renamed = [];
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
        const change = {
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
    const isClean = staged.length === 0 &&
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
function parseDiffNumstat(output) {
    const files = [];
    const lines = output.split(/\r?\n/).filter(Boolean);
    lines.forEach((line) => {
        const [insertionsRaw, deletionsRaw, file] = line.split("\t");
        if (!file)
            return;
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
async function getDiffSummary(options) {
    const args = ["diff", "--numstat"];
    if (options?.cached) {
        args.push("--cached");
    }
    const output = await runGit(args);
    const files = parseDiffNumstat(output);
    const summary = files.reduce((acc, file) => {
        acc.insertions += file.insertions;
        acc.deletions += file.deletions;
        acc.changes += file.changes > 0 ? 1 : 0;
        return acc;
    }, { insertions: 0, deletions: 0, changes: 0 });
    return {
        cached: Boolean(options?.cached),
        files,
        insertions: summary.insertions,
        deletions: summary.deletions,
        changes: summary.changes,
    };
}
async function stageChanges(options) {
    const paths = options?.paths ?? [];
    if (paths.length === 0) {
        await runGit(["add", "--all"]);
        return;
    }
    await runGit(["add", "--", ...paths]);
}
async function commitChanges(options) {
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
async function pushChanges(options) {
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
async function createBranch(options) {
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
//# sourceMappingURL=index.js.map