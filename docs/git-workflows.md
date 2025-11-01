# SentinelOps Git Workflow Design

## Objectives

- Give operators and agents first-class primitives to inspect and ship repository changes without leaving SentinelOps.
- Preserve Git best practices (branching, commit hygiene, protected mainline).
- Surface Git activity in the same observability streams (SSE/WebSocket, dashboard) that already power incident visibility.

## Core Use Cases

1. **Status & Diff Inspection**
   - List current branch, upstream tracking, staged/unstaged files, untracked files.
   - Show ahead/behind counts so teams know when main is out-of-date.

2. **Branch Lifecycle**
   - Create feature branches, switch branches, delete merged branches (local).
   - Optional integration with remote tracking (origin).

3. **Staging & Commit**
   - Stage specific files or all tracked changes.
   - Generate commit summaries (optionally via IncidentCommander/AgentBprime).
   - Commit with author metadata.

4. **Push & Pull**
   - Push commits to a remote branch (with opt-in force push).
   - Pull or fetch to sync with upstream.
   - Optional pre-push validation hooks (tests, lint).

5. **Review Hooks**
   - Collect diff metadata for automated review by agents or as artifacts for humans.
   - Broadcast Git events into the event bus (`git:status`, `git:push`, etc.).

## Architecture Additions

### 1. Git Service Package (CLI-backed)

`packages/git` wraps the local Git CLI (`child_process.execFile`) so we avoid native dependencies that often break in sandboxed environments. The service exposes typed helpers:

```ts
export type GitStatusSummary = { branch: string | null; ahead: number; /* … */ };
export async function getStatusSummary(): Promise<GitStatusSummary>;
export async function getDiffSummary(opts?: { cached?: boolean }): Promise<GitDiffSummary>;
export function gitIntegrationEnabled(): boolean; // checks SENTINELOPS_GIT_ENABLED
```

Configuration:

- `SENTINELOPS_GIT_ROOT` → repository path (defaults to `process.cwd()`).
- `SENTINELOPS_GIT_ENABLED` → feature flag (disabled by default).

### 2. MCP Tools

`packages/tools/src/git.ts` now exposes both read and write operations:

| Tool ID        | Description                                   | Input Schema                                  |
|----------------|-----------------------------------------------|-----------------------------------------------|
| `git.status`   | Returns branch, ahead/behind, file states      | `{}`                                           |
| `git.diff`     | Summarises staged or working diffs             | `{ cached?: boolean }`                         |
| `git.stage`    | Stages one or more paths (defaults to all)     | `{ paths?: string[] }`                         |
| `git.commit`   | Commits staged changes with optional author    | `{ message, allowEmpty?, signoff?, author? }`  |
| `git.push`     | Pushes to remote/branch, with optional force   | `{ remote?, branch?, force? }`                 |
| `git.branch`   | Creates (and optionally checks out) a branch   | `{ name, base?, checkout? }`                   |

### 3. Persistence & Audit

New table `git_operations` (in `packages/persistence` migration):

```sql
CREATE TABLE IF NOT EXISTS git_operations (
  id TEXT PRIMARY KEY,
  operation TEXT NOT NULL,           -- e.g., status, commit, push
  parameters TEXT NOT NULL,          -- JSON of input
  result TEXT,                       -- JSON of summary (commit SHA, branch)
  operator TEXT NOT NULL,            -- agent or user
  created_at TEXT NOT NULL
);
```

Usage:
- Log every git tool invocation for traceability.
- Surface in dashboard timeline and SSE stream.

### 4. API Layer

`apps/server/src/server.ts` exposes:

- `GET /v1/git/status` → `getStatusSummary()`
- `GET /v1/git/diff` → `getDiffSummary({ cached?: boolean })`
- `POST /v1/git/stage` → `stageChanges({ paths })`
- `POST /v1/git/commit` → `commitChanges({...})`
- `POST /v1/git/push` → `pushChanges({...})`
- `POST /v1/git/branch` → `createBranch({...})`

All endpoints honour `SENTINELOPS_GIT_ENABLED`, return structured success payloads, and emit consistent 404/500 responses when the repository is missing or Git operations fail.

### 5. Agent Integration

- **CodeExpertAgent** (new): consumes `git.status`, `git.diff`, `git.stage`, `git.commit`, and `git.push` tools to analyse workspace state, craft implementation plans, and shepherd commits.
- Other agents (DevOpsGPT, AgentBprime, IncidentCommander) will adopt Git responsibilities incrementally as we introduce policy-aware automation.

### 6. Dashboard Extensions

Roadmap for the Next.js dashboard:

1. **Git Status Card**: show branch, ahead/behind, dirty files (powered by `GET /v1/git/status`).
2. **Diff Viewer**: surface staged vs unstaged summaries (using `GET /v1/git/diff`).
3. **Commit Composer & Push Banner** *(in progress)*: leverage the new POST endpoints to stage paths, craft commit messages, and push without leaving the dashboard.
4. **Timeline Integration** *(planned)*: stream git events into the activity feed with dedicated badges.

Existing hooks (`useRealTimeEvents`) will carry the git event payloads when they arrive.

### 7. Security & Safeguards

- Feature flag `SENTINELOPS_GIT_ENABLED` (default false).
- Allowlist repo root to prevent path traversal.
- Force operations to run as service account; optionally require API token for write operations.
- Rate-limit push/commit endpoints to avoid spam.
- Offer dry-run flag for agents to preview commands before execution.

### 8. Failure Handling

- Wrap git errors, return structured problem responses (`{ error: { code, message, suggestion } }`).
- Surface errors in dashboard banner.
- Auto-refresh status after failures to keep UI consistent.

### 9. Rollout Plan

1. **Phase 1 – Backend**
   - Introduce git service package & tools.
   - Add API endpoints with audit logging.
   - Update agents to expose git tools (but keep feature flag off by default).

2. **Phase 2 – Frontend**
   - Build Git status widget, commit composer, and diff viewer.
   - Wire SSE updates into Agent Activity feed.

3. **Phase 3 – Automation**
   - Add “Create PR” integration (future) via GitHub API.
   - Implement policy checks (tests pre-push, branch protection).

4. **Phase 4 – Docs & Ops**
   - Update README quick start to mention `SENTINELOPS_GIT_ENABLED`.
   - Provide runbooks for common errors (merge conflicts, auth failure).

## Open Questions

- Should we manage credentials for pushing (SSH vs PAT) inside SentinelOps or rely on host configuration?
- Do we need multi-repo support (monorepo spans multiple git roots)?
- How to coordinate with CI/CD triggers after push—webhooks or agent-run pipelines?

## Next Steps

1. Add `packages/git` skeleton with unit tests using a temporary repo fixture.
2. Implement `git.status` & `git.diff` APIs first—read-only functionality has low risk.
3. Expand to mutating operations (stage/commit/push) once audit logging is ready.
4. Iterate with design team on dashboard UX mockups for commit composer.
