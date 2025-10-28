# SentinelOps Agent Architecture

This document outlines the initial SentinelOps agent design. The goal is to replace the starter weather agent with a focused set of agents that orchestrate DevOps workflows end-to-end while keeping human oversight in the loop.

## Agent Roster

| Agent | Responsibility | Primary Tools | Notes |
|-------|----------------|---------------|-------|
| `DevOpsGPT` | Coordinates CI/CD tasks, release hygiene, and code review follow-ups. | `deploy.start`, `deploy.list`, `postmortem.list`, repo tool (future). | Acts as the human-facing release PM. Pulls deployment/job data to keep operators informed. |
| `IncidentCommander` | Owns incident triage, mitigation planning, approval requests, and postmortem hand-off. | `alerts.*`, `logs.*`, `deploy.rollback`, `postmortem.create`. | Must respect approval guardrails and never execute destructive actions without authorization. |
| `MonitorAgent` | Streams telemetry, detects anomalies, and raises alerts. | `logs.ingest`, `alerts.create`, `deploy.list`. | Runs continuously; heuristics focus on spikes/OOMs/error bursts. |
| `ForensicsAgent` | Drafts postmortems and supporting attachments once an incident resolves. | `postmortem.create`, `postmortem.publish`, `logs.sample`. | Uses structured markdown output + JSON summary for dashboards. |
| `DiscordTriage` | Handles `/triage` and `/diagnose` slash commands. | `logs.sample`, `alerts.create`, `alerts.link` (future). | Keeps answers short; only suggests safe local steps. |
| `HumanOps` | Frontend copilot for dashboard operators. | Read-only queries (alerts, deploys) + request/approval helpers. | Provides CLI snippets, runbook references, and approval prompts. |

## Prompt Strategy

* Prompts remain deterministic, short, and explicit about tool usage, approval requirements, and JSON output schemas where automation consumes responses.
* Each agent prompt references the tool IDs exposed via Mastra MCP (`alerts.create`, `deploy.start`, etc.) to keep behaviour aligned with the runtime.
* Approval gates are encoded in prompts (e.g., IncidentCommander must request explicit consent before calling rollback tools).

## State & Memory

* Working memory is shared per agent using Mastra’s `Memory` interface.
* `DevOpsGPT` tracks recent releases, open approvals, and code review reminders.
* `IncidentCommander` stores investigation hypotheses, evidence references (log IDs, job IDs), and action proposals for continuity.
* `HumanOps` retains operator preferences (e.g., default environments, favoured runbooks).

## Tool Interactions

The current in-memory tool implementations support early development. Agents will use the following patterns:

* Alert workflow: `MonitorAgent` → `alerts.create` → `IncidentCommander` picks it up; later `alerts.ack` / `alerts.resolve`.
* Deployment workflow: `DevOpsGPT` triggers `deploy.start`; incident mitigation uses `deploy.rollback`; query status via `deploy.status`.
* Log access: `logs.ingest` for simulated telemetry; `logs.query`/`logs.sample` for triage.
* Postmortems: `IncidentCommander` signals `ForensicsAgent`; it stores drafts via `postmortem.create` and publishes with `postmortem.publish`.

## Orchestration & Routing

* Background jobs in the MCP server (to be implemented) will schedule MonitorAgent sweeps and route new alerts to IncidentCommander.
* Discord handlers call DiscordTriage for human support while also linking threads to the backend state via a future `discord` tool.
* Dashboard actions (e.g., approving a rollback) will call a forthcoming `/v1/actions/:id/approve` endpoint, which in turn invokes the corresponding agent workflow.

## Next Steps

1. Define prompt templates as code (TypeScript constants) under `packages/agents/src/prompts`.
2. Replace the weather agent export with the new agent classes referencing those prompts and tools.
3. Extend the Fastify server with orchestration routes (e.g., POST `/v1/incidents/:id/triage`) that trigger agent runs.
4. Migrate the in-memory stores to a real database and introduce WebSocket updates for the dashboard.
