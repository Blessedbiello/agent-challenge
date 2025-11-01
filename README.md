# SentinelOps: AI-Powered Incident Response Platform

SentinelOps is an incident command workspace that combines multi-agent automation with real-time operator collaboration. It helps SRE and DevOps teams move from alert to validated resolution in minutes by pairing live telemetry, runbook-aware tooling, and human-in-the-loop safeguards.  

The platform is built on the Mastra multi-agent framework and packaged for deployment on the Nosana decentralized compute network. SentinelOps includes a production-ready Next.js dashboard, Fastify API, persistent storage, and a suite of specialized agents working against a shared data model.

---

## Platform Value

- **Compress MTTR** – Automated triage, evidence gathering, and recommended mitigations reduce the time from alert to action from minutes to seconds.
- **Protect Release Velocity** – Deployment orchestration and approval workflows keep high-velocity teams compliant without slowing shipping.
- **Capture Institutional Knowledge** – Postmortem drafting, strategy playbooks, and Git-aware reviews turn each incident into reusable guidance.
- **Maintain Operator Control** – Approval gates, audit trails, and real-time activity streams ensure automation remains transparent and reversible.

---

## Core Capabilities

### Incident Command & Mitigation
- Correlates alerts, deploy metadata, and telemetry to build incident timelines.
- Generates hypotheses with supporting evidence and ranks recommended mitigations by risk.
- Opens remediation actions that flow through explicit human approvals.

### Release Governance
- Tracks deployment jobs, approval status, and rollback readiness in one place.
- Surfaces blockers or policy violations to operators before production changes progress.
- Supports structured rollback requests with risk context and expected outcomes.

### Real-Time Collaboration
- WebSocket and SSE channels broadcast agent activity, approvals, and incident updates immediately to every connected client.
- Dashboards, CLI operators, and automation agents stay in sync without polling.

### Cross-Agent Remediation (Coding & Deploy Coordination)
- The **Code Expert** agent inspects Git state, prepares targeted diffs, and stages changes aligned with active incidents.
- The **Incident Commander** shares incident context, mitigating actions, and risk assessments with Code Expert before code changes are prepared.
- The **DevOps Orchestrator** validates staged fixes, manages approvals, and executes deployments or rollbacks once human reviewers confirm.
- Shared MCP resources keep agents aligned on alerts, logs, deployments, and strategy artifacts throughout the remediation cycle.

### Knowledge Capture & Strategy
- Forensics workflows produce draft postmortems with timelines, root cause analysis, and next steps.
- Strategy advisories document optimization plans, ownership, and measurable goals tied to incident learnings.
- HumanOps Copilot bridges operators and agents with contextual answers, recommended commands, and follow-up tasks.

### Chaos Simulation for Readiness
- Four preconfigured chaos scenarios simulate real outages (GPU OOM, database saturation, cascading auth failure, failed rollout).
- Scenarios populate the persistence layer so operators can rehearse runbooks and validate observability coverage.

---

## Agent Portfolio

| Agent | Focus Area | Responsibilities | Collaboration |
|-------|------------|------------------|---------------|
| **Incident Commander** | Incident triage & mitigation planning | Correlates telemetry, drafts hypotheses, opens remediation actions with risk scoring | Shares incident context with Code Expert & DevOps Orchestrator |
| **DevOps Orchestrator (DevOpsGPT)** | Release and approval governance | Oversees deploy jobs, enforces approvals, drives rollbacks or rollouts | Consumes staged fixes from Code Expert; coordinates with HumanOps |
| **Monitor Agent** | Telemetry ingestion & alerting | Streams signals, detects anomalies, creates alerts with deploy metadata | Feeds incidents to Incident Commander and strategy planning |
| **Forensics Agent** | Post-incident reporting | Generates postmortem drafts, timelines, action items, and publishes when ready | Consumes incident history from Incident Commander |
| **HumanOps Copilot** | Operator assistance | Answers questions, surfaces context, manages approvals, provides CLI guidance | Keeps operators aligned with DevOps Orchestrator decisions |
| **Code Expert** | Git-aware remediation | Reviews diffs, stages changes, suggests targeted edits, aligns fixes with incident scope | Works with Incident Commander & DevOps Orchestrator for safe rollouts |
| **Discord Triage** | External-facing support | Delivers safe troubleshooting steps for community incidents and escalates into SentinelOps | Captures insights for Incident Commander and Forensics Agent |
| **Strategy Advisor (AgentBprime)** | Continuous optimization | Builds strategy playbooks, tracks focus areas, optimizes resource usage | References postmortems and deploy history to guide improvements |

---

## Architecture Overview

SentinelOps uses a modular monorepo to keep agents, tooling, persistence, and UI aligned:

```
apps/
  server/        Fastify API, WebSocket/SSE broadcasters, MCP registry
  web/           Next.js 15 dashboard with React 19

packages/
  agents/        Agent definitions, memory schemas, Mastra configuration
  tools/         MCP tools (alerts, logs, deploys, postmortems, git, strategies)
  persistence/   SQLite data access via better-sqlite3
  git/           Node-native Git workflows exposed to MCP and REST
  ui/            Shared UI components
```

- **Backend Services:** Fastify powers REST, WebSocket, and SSE endpoints. An internal event bus broadcasts agent activity to clients, ensuring state consistency.
- **Mastra Integration:** Agents run under Mastra 0.19+, using LibSQL-backed memory stores with structured schemas for approvals, incidents, reviews, and strategy notes.
- **MCP Layer:** Dynamic resources expose alerts, logs, deployments, and strategy artifacts; prompts guide triage, investigations, and postmortems tailored to live incident data.
- **Git Services:** The Git package wraps status, diff, stage, commit, push, and branch operations to support the Code Expert agent and human operators.
- **Frontend:** Next.js 15 renders the operator dashboard, with hooks subscribed to the SSE feed for real-time updates and WebSocket for bidirectional intent.

---

## Operational Workflow

1. **Signal Detection** – Monitor Agent ingests telemetry and opens an alert when thresholds breach. Event data is persisted and broadcast to the UI.
2. **Incident Triage** – Incident Commander consumes the new incident, queries logs, cross-references recent deployments, and proposes mitigations with risk scores.
3. **Human Review** – Operators evaluate suggested actions via HumanOps Copilot. Approval or rejection propagates through the event bus instantly.
4. **Remediation Preparation** – Code Expert inspects Git status and diffs, prepares targeted changes, and requests verification. Shared resources keep Incident Commander and DevOps Orchestrator informed.
5. **Deployment Execution** – DevOps Orchestrator validates approvals, executes deployments or rollbacks, and reports status changes back to the team.
6. **Post-Incident Capture** – Forensics Agent drafts the postmortem, while Strategy Advisor documents playbooks and optimization guidance for future incidents.

---

## Demo & Deployment Artifacts

- **Video Demo:** _TODO — add 1–3 minute walkthrough link once recorded_
- **Docker Image:** [`bprime/agent-challenge2:tagname`](https://hub.docker.com/r/bprime/agent-challenge2) (published)
- **Nosana Deployment:** _TODO — add job URL / screenshot after deployment (see proof section below)_

---

## Technical Specifications

### MCP Tooling (Selection)
- Alerts: `create`, `ack`, `resolve`, `subscribe`
- Deployments: `start`, `rollback`, `getStatus`, `list`
- Logs: `ingest`, `query`, `sample`
- Postmortems: `create`, `publish`, `list`
- Actions: `create`, `approve`, `reject`, `updateStatus`
- Strategies: `create`, `list`
- Git: `status`, `diff`, `stage`, `commit`, `push`, `branch`

### API Surface
- `GET /v1/dashboard` – consolidated system snapshot
- `GET /v1/agents` – agent roster and tooling exposure
- `GET /v1/alerts` – active alerts with metadata
- `POST /v1/incidents/:id/triage` – initiate agent triage workflow
- `POST /v1/actions/:id/approve|reject` – human-in-the-loop gatekeeping
- `GET /v1/chaos/scenarios` and `POST /v1/chaos/trigger` – chaos simulation control
- `WS /ws` and `GET /v1/events/stream` – real-time event distribution

### Technology Stack
- **Languages & Frameworks:** TypeScript, Fastify, Next.js 15, React 19
- **Agents & AI:** Mastra, Ollama provider (Qwen3 models), optional OpenAI integration
- **Data:** SQLite (better-sqlite3) with seed data for demo scenarios
- **Tooling:** pnpm workspace, TypeScript project references, Tailwind CSS 4
- **Runtime Packaging:** Docker images targeting Nosana GPU workers with optional Ollama sidecar

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+
- Docker (for container build and deployment)

### Installation & Development

```bash
git clone https://github.com/YOUR-USERNAME/agent-challenge
cd agent-challenge
cp .env.example .env
pnpm install

# Run stack in development (three terminals recommended)
pnpm run dev:server    # Fastify API + WebSocket/SSE (port 4111)
pnpm run dev:agent     # Mastra agent runtime (port 4111)
pnpm run dev:ui        # Next.js dashboard (port 9000)
```

### Model Configuration Options

| Scenario | Environment Variables | Notes |
|----------|----------------------|-------|
| Nosana-hosted Qwen3:8b (default) | `NOS_OLLAMA_API_URL=https://3yt39qx97wc9hqwwmylrphi4jsxrngjzxnjakkybnxbw.node.k8s.prd.nos.ci/api`<br>`NOS_MODEL_NAME_AT_ENDPOINT=qwen3:8b` | Recommended for challenge deployment, requires outbound connectivity |
| Local Ollama | `OLLAMA_API_URL=http://127.0.0.1:11434/api`<br>`MODEL_NAME_AT_ENDPOINT=qwen3:0.6b` | Run `ollama pull qwen3:0.6b` and `ollama serve` locally |
| OpenAI | `OPENAI_API_KEY=sk-...` | Uncomment OpenAI wiring in `src/mastra/agents/index.ts` if desired |

### Environment Flags
- `SENTINELOPS_SEED_DATA=true` – Loads the demo dataset on boot (ignored when `NODE_ENV=production` unless explicitly set).
- `SENTINELOPS_GIT_ENABLED=1` – Enables Git tooling; set `SENTINELOPS_GIT_ROOT` if the repo path differs.
- `MASTRA_SKIP_INSTALL=1` – Skips additional dependency installation during Mastra builds (used in CI/containers).

---

## Deployment Guide

### Docker Image

```bash
# Build production image (expects prebuilt artifacts present in repo)
docker build -t bprime/agent-challenge2:tagname .

# Publish to Docker Hub
docker login
docker push bprime/agent-challenge2:tagname
```

### Local Verification

```bash
docker run -d \
  -p 3000:3000 \
  -p 4111:4111 \
  --name sentinelops-demo \
  bprime/agent-challenge2:tagname

docker logs -f sentinelops-demo
```

### Nosana Deployment (Pending Proof)

**Dashboard Workflow**
1. Open the [Nosana Dashboard](https://dashboard.nosana.com/deploy).
2. Update `nos_job_def/nosana_mastra_job_definition.json` with the published image:
   ```json
   {
     "image": "bprime/agent-challenge2:tagname"
   }
   ```
3. Launch the job on a GPU worker and verify services are reachable on ports `3000` and `4111`.
4. Capture deployment URL and screenshot for submission.

**CLI Workflow**
```bash
npm install -g @nosana/cli
nosana job post --file ./nos_job_def/nosana_mastra_job_definition.json --market nvidia-3090 --timeout 30
```

> **Status:** Docker image published. Nosana deployment proof is TODO. Update the section below once the job is live.

---

## Nosana Deployment Proof (TODO)

- [ ] Launch Nosana job via dashboard or CLI.
- [ ] Record deployment URL / job ID.
- [ ] Capture a screenshot of the running service.
- [ ] Update this section with evidence (URL + image link).

Example structure:
```markdown
**Deployment URL:** https://nosana.app/run/abcdef123456  
![Deployment Screenshot](./assets/nosana-deployment.png)
```

---

## Operational Readiness & Business Impact

- **Guardrails:** All automated mitigations require explicit operator approval; sensitive Git operations are gated behind `SENTINELOPS_GIT_ENABLED`.
- **Observability:** Real-time event streams provide auditability across agents, human actions, and system state changes.
- **Data Hygiene:** Seed data enables instant demos without impacting production incidents; telemetry and analytics are disabled by default.
- **Impact Metrics:** Typical workflows reduce manual triage from ~20 minutes to <1 minute, generate postmortem drafts in minutes, and provide clear rollback guidance during high-risk deployments.

---

## Challenge Alignment & Outstanding Tasks

| Requirement | Status | Notes |
|-------------|--------|-------|
| Agent with Tool Calling | ✅ | 20+ MCP tools across alerts, logs, deploys, postmortems, strategies, and git |
| MCP Resources & Prompts | ✅ | Dynamic resources and contextual prompts defined in `src/mastra/mcp` |
| Frontend Interface | ✅ | Next.js dashboard with live activity and approval workflows |
| Real-Time Data Sync | ✅ | WebSocket + SSE event distribution |
| Docker Image Published | ✅ | `bprime/agent-challenge2:tagname` |
| Nosana Deployment Proof | ⏳ | Publish job and attach URL/screenshot |
| Video Demo (1–3 min) | ⏳ | Record walkthrough and update link |
| Social Media Post | ⏳ | Share build with #NosanaAgentChallenge and note link |
| Documentation | ✅ | This README plus architecture references |

---

## Testing & Quality

```bash
pnpm test:server
```

The server test suite validates the Fastify instance, ensuring agent events propagate over `/v1/events/stream` and WebSocket lifecycles behave as expected. Additional integration coverage for git tooling and concurrency scenarios is recommended for production rollout.

---

## Documentation & Support

- Architecture: [`docs/agents-architecture.md`](docs/agents-architecture.md)
- Git Workflows: [`docs/git-workflows.md`](docs/git-workflows.md)
- Mastra Documentation: [https://mastra.ai/en/docs](https://mastra.ai/en/docs)
- Nosana Documentation: [https://docs.nosana.io](https://docs.nosana.io)
- Challenge Support: Nosana Discord – Builders Challenge Dev Chat

---

## Maintainers & License

- Maintained by **SentinelOps Team** (contact: [@bprime](https://twitter.com/bprime))
- Licensed under **Apache 2.0** (`LICENSE`)

---

**#SentinelOps**  **#NosanaAgentChallenge**  **@nosana_ai**
