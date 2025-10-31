import { MCPServer } from "@mastra/mcp"
import {
  ackAlertTool,
  createAlertTool,
  createPostmortemTool,
  createIncidentActionTool,
  approveIncidentActionTool,
  rejectIncidentActionTool,
  getJobStatusTool,
  ingestLogTool,
  listDeploysTool,
  listPostmortemsTool,
  listStrategiesTool,
  createStrategyTool,
  queryLogsTool,
  publishPostmortemTool,
  resolveAlertTool,
  rollbackDeployTool,
  sampleLogsTool,
  startDeployTool,
  subscribeAlertsTool,
  weatherTool,
  listAlerts,
  getAlert,
  listLogs,
  listJobs,
  listIncidentActions,
} from "../tools";
import { agentsRegistry } from "../agents";

export const server = new MCPServer({
  name: "SentinelOps MCP Server",
  version: "2.0.0",
  tools: {
    weatherTool,
    createAlertTool,
    ackAlertTool,
    resolveAlertTool,
    subscribeAlertsTool,
    startDeployTool,
    rollbackDeployTool,
    getJobStatusTool,
    listDeploysTool,
    ingestLogTool,
    queryLogsTool,
    sampleLogsTool,
    createPostmortemTool,
    publishPostmortemTool,
    listPostmortemsTool,
    createIncidentActionTool,
    approveIncidentActionTool,
    rejectIncidentActionTool,
    createStrategyTool,
    listStrategiesTool,
  },
  agents: agentsRegistry,
  resources: {
    // Dynamic MCP Resources for alert discovery
    "sentinel://alerts": {
      description: "List all alerts in the system",
      uri: "sentinel://alerts",
      async get() {
        const alerts = listAlerts();
        return {
          contents: [
            {
              uri: "sentinel://alerts",
              mimeType: "application/json",
              text: JSON.stringify(alerts, null, 2),
            },
          ],
        };
      },
    },
    "sentinel://alerts/{id}": {
      description: "Get a specific alert by ID",
      uri: "sentinel://alerts/{id}",
      async get(params: { id: string }) {
        const alert = getAlert(params.id);
        if (!alert) {
          throw new Error(`Alert ${params.id} not found`);
        }
        return {
          contents: [
            {
              uri: `sentinel://alerts/${params.id}`,
              mimeType: "application/json",
              text: JSON.stringify(alert, null, 2),
            },
          ],
        };
      },
    },
    "sentinel://logs/{incidentId}": {
      description: "Get logs for a specific incident",
      uri: "sentinel://logs/{incidentId}",
      async get(params: { incidentId: string }) {
        const logs = listLogs().filter(log => log.incidentId === params.incidentId);
        return {
          contents: [
            {
              uri: `sentinel://logs/${params.incidentId}`,
              mimeType: "application/json",
              text: JSON.stringify(logs, null, 2),
            },
          ],
        };
      },
    },
    "sentinel://deploys": {
      description: "List all deployment jobs",
      uri: "sentinel://deploys",
      async get() {
        const jobs = listJobs();
        return {
          contents: [
            {
              uri: "sentinel://deploys",
              mimeType: "application/json",
              text: JSON.stringify(jobs, null, 2),
            },
          ],
        };
      },
    },
    "sentinel://actions/{incidentId}": {
      description: "Get incident actions for a specific incident",
      uri: "sentinel://actions/{incidentId}",
      async get(params: { incidentId: string }) {
        const actions = listIncidentActions({ incidentId: params.incidentId });
        return {
          contents: [
            {
              uri: `sentinel://actions/${params.incidentId}`,
              mimeType: "application/json",
              text: JSON.stringify(actions, null, 2),
            },
          ],
        };
      },
    },
  },
  prompts: {
    "triage-incident": {
      name: "triage-incident",
      description: "Generate a triage prompt for an active incident",
      async get(params?: { incidentId?: string; severity?: string }) {
        const incidentId = params?.incidentId ?? "UNKNOWN";
        const severity = params?.severity ?? "MEDIUM";

        return {
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `You are triaging incident ${incidentId} with severity ${severity}.

Your objectives:
1. Review alert details and correlate with recent logs
2. Formulate 2-3 hypotheses about root cause
3. Identify evidence (log patterns, metrics, deployment timing)
4. Propose 2-4 remediation actions with risk assessment

Output your analysis as structured JSON:
{
  "summary": "Brief incident summary",
  "hypotheses": ["hypothesis 1", "hypothesis 2"],
  "evidence": ["evidence 1", "evidence 2"],
  "suggestedActions": [
    {
      "type": "ROLLBACK|RESTART|SCALE|INVESTIGATE",
      "justification": "Why this action helps",
      "risk": "LOW|MEDIUM|HIGH"
    }
  ]
}

Prioritize low-risk actions first. Never execute destructive actions without approval.`
              }
            }
          ]
        };
      },
    },
    "investigate-logs": {
      name: "investigate-logs",
      description: "Generate a log investigation prompt for forensic analysis",
      async get(params?: { service?: string; timeRange?: string }) {
        const service = params?.service ?? "all services";
        const timeRange = params?.timeRange ?? "last hour";

        return {
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `You are investigating logs for ${service} over ${timeRange}.

Your objectives:
1. Identify error patterns and anomalies
2. Correlate errors with deployment events
3. Detect resource exhaustion signals (OOM, CPU spikes, connection limits)
4. Find evidence of cascading failures

Focus on:
- Error rate spikes
- Timeout patterns
- Memory/resource warnings
- Unusual traffic patterns
- Database connection issues

Provide findings as structured JSON with severity and recommended follow-up actions.`
              }
            }
          ]
        };
      },
    },
    "post-deployment-review": {
      name: "post-deployment-review",
      description: "Generate a prompt for reviewing deployment health",
      async get(params?: { jobId?: string; service?: string }) {
        const jobId = params?.jobId ?? "latest";
        const service = params?.service ?? "unknown";

        return {
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `You are reviewing deployment ${jobId} for ${service}.

Health check criteria:
1. Error rate compared to baseline (< 1% is healthy)
2. Response time degradation (< 10% increase is acceptable)
3. Memory/CPU utilization trends
4. New error types introduced
5. Alert volume post-deployment

If unhealthy:
- Calculate rollback risk vs. letting deployment stabilize
- Identify specific commit/change causing issues
- Suggest targeted remediation

Respond with: HEALTHY | DEGRADED | CRITICAL and supporting evidence.`
              }
            }
          ]
        };
      },
    },
    "draft-postmortem": {
      name: "draft-postmortem",
      description: "Generate a prompt for drafting incident postmortem",
      async get(params?: { incidentId?: string }) {
        const incidentId = params?.incidentId ?? "UNKNOWN";

        return {
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `You are drafting a postmortem for incident ${incidentId}.

Required sections:
1. **Timeline**: Chronological events from detection to resolution
2. **Root Cause**: Technical explanation of what went wrong
3. **Impact**: User-facing impact, duration, scope
4. **Detection**: How we discovered the issue (alert, user report, monitoring)
5. **Resolution**: What actions fixed the problem
6. **Action Items**: Preventive measures to avoid recurrence

Tone: Blameless, technical, actionable.
Format: Structured markdown suitable for team review.

Gather evidence from logs, alerts, and deployment history before drafting.`
              }
            }
          ]
        };
      },
    },
  },
});

export const mcpServersRegistry = {
  core: server,
} as const;
