import {
  AckAlertInputSchema,
  AlertRecord,
  AlertSeverity,
  CreateAlertInputSchema,
  DeployJob,
  DeploySpec,
  LogRecord,
  PostmortemRecord,
  ackAlert,
  clearAlerts,
  clearJobs,
  clearLogs,
  clearPostmortems,
  createAlert,
  createDeployJob,
  createPostmortem,
  createRollbackJob,
  ingestLog,
  listAlerts,
  listJobs,
  listLogs,
  listPostmortems,
  publishPostmortem,
  resolveAlert,
} from "@sentinelops/tools";
export type DashboardSnapshot = {
  stats: StatCardConfig[];
  roster: AgentRosterItem[];
  incidents: IncidentItem[];
  actions: ActionQueueItem[];
  memory: string[];
  alerts: AlertRecord[];
  deploys: DeployJob[];
  logs: LogRecord[];
  postmortems: PostmortemRecord[];
  generatedAt: string;
};

export type StatCardConfig = {
  label: string;
  value: string;
  trend: string;
  tone: "positive" | "critical" | "neutral";
};

export type AgentRosterItem = {
  name: string;
  focus: string;
  status: "online" | "degraded" | "offline";
  heartbeat: string;
  tasks: number;
};

export type IncidentItem = {
  id: string;
  service: string;
  severity: "low" | "moderate" | "high";
  summary: string;
  timestamp: string;
};

export type ActionQueueItem = {
  id: string;
  label: string;
  owner: string;
  status: "awaiting" | "approved" | "running";
  risk: "low" | "medium" | "high";
  relatedJobId?: string;
};

const SeverityMap: Record<AlertSeverity, IncidentItem["severity"]> = {
  LOW: "low",
  MEDIUM: "moderate",
  HIGH: "high",
  CRITICAL: "high",
};

const seeded = { current: false };
let snapshot: DashboardSnapshot | null = null;

export function ensureMockData(): DashboardSnapshot {
  if (seeded.current && snapshot) {
    return snapshot;
  }

  clearAlerts();
  clearJobs();
  clearLogs();
  clearPostmortems();

  const criticalAlert = createAlert(
    CreateAlertInputSchema.parse({
      service: "gpu-worker-3",
      severity: "HIGH",
      summary: "OOM detected in inference pipeline",
      metadata: {
        node: "worker-3",
        lastRelease: "2024.10.21",
      },
    })
  );

  const moderateAlert = createAlert(
    CreateAlertInputSchema.parse({
      service: "deploy-proxy",
      severity: "MEDIUM",
      summary: "Rollback succeeded for release 2024.10.21",
    })
  );

  resolveAlert({
    alertId: moderateAlert.id,
    resolution: "Rollback completed automatically",
  });

  ackAlert(
    AckAlertInputSchema.parse({
      alertId: criticalAlert.id,
      user: "incident-commander",
    })
  );

  const deployPrimary = createDeployJob({
    service: "gpu-worker-3",
    image: "registry.ops/gpu-worker:2024.10.21",
    version: "2024.10.21",
    command: ["pnpm", "start"],
    env: {},
  } satisfies DeploySpec, {
    status: "FAILED",
    outcome: "OOM observed during warmup",
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  });

  const rollback = createRollbackJob(deployPrimary, deployPrimary.spec.version, {
    status: "RUNNING",
  });

  const scaleJob = createDeployJob(
    {
      service: "gpu-worker-3",
      image: "registry.ops/gpu-worker:2024.10.15",
      version: "2024.10.15",
      command: ["pnpm", "start"],
      env: {},
    },
    {
      status: "RUNNING",
    }
  );

  ingestLog({
    incidentId: criticalAlert.id,
    source: "gpu-worker-3",
    level: "ERROR",
    message: "CUDA out of memory: failed to allocate 2.00 GiB",
    metadata: {
      pod: "gpu-worker-3-578cd9d9c7-xyz",
      gpuUtil: 0.97,
    },
  });

  ingestLog({
    incidentId: criticalAlert.id,
    source: "gpu-worker-3",
    level: "WARN",
    message: "Restart suggested by auto-scaler",
    metadata: {
      suggestion: "Scale up to 6 replicas",
    },
  });

  const postmortem = createPostmortem({
    incidentId: moderateAlert.id,
    service: "deploy-proxy",
    draftText: "Rollback executed within 5 minutes. Root cause: config mismatch.",
    attachments: [],
    authors: ["DevOpsGPT"],
  });

  publishPostmortem({ postmortemId: postmortem.id, publishedBy: "DevOpsGPT" });

  snapshot = {
    stats: [
      { label: "Active Incidents", value: "1", trend: "+1 vs 1h", tone: "critical" },
      { label: "Mean Time to Mitigate", value: "11m", trend: "-4m vs last week", tone: "positive" },
      { label: "Deployments (24h)", value: "14", trend: "3 pending approvals", tone: "neutral" },
      { label: "Auto-Remediations", value: "5", trend: "100% success", tone: "positive" },
    ],
    roster: [
      { name: "DevOpsGPT", focus: "Release orchestration & PR review", status: "online", heartbeat: "2m ago", tasks: 3 },
      { name: "IncidentCommander", focus: "Triage & mitigation planning", status: "online", heartbeat: "48s ago", tasks: 1 },
      { name: "MonitorAgent", focus: "Telemetry ingestion & anomaly detection", status: "degraded", heartbeat: "5m ago", tasks: 6 },
      { name: "DiscordTriage", focus: "Community support threads", status: "online", heartbeat: "just now", tasks: 2 },
    ],
    incidents: listAlerts().map((alert) => ({
      id: alert.id,
      service: alert.service,
      severity: SeverityMap[alert.severity],
      summary: alert.summary,
      timestamp: toRelativeTime(alert.createdAt),
    })),
    actions: [
      {
        id: "ACT-0098",
        label: `Rollback deploy ${deployPrimary.spec.version}`,
        owner: "Awaiting approval",
        status: "awaiting",
        risk: "low",
        relatedJobId: rollback.id,
      },
      {
        id: "ACT-0097",
        label: "Scale gpu-worker-3 from 4 ➜ 6",
        owner: "IncidentCommander",
        status: "running",
        risk: "medium",
        relatedJobId: scaleJob.id,
      },
      {
        id: "ACT-0096",
        label: "Publish postmortem for deploy-proxy",
        owner: "DevOpsGPT",
        status: "approved",
        risk: "low",
        relatedJobId: postmortem.id,
      },
    ],
    memory: [
      "Stability comes from rehearsed playbooks, not luck.",
      "Every rollback teaches the next deploy.",
      "Fast feedback makes fearless builders.",
    ],
    alerts: listAlerts(),
    deploys: listJobs(),
    logs: listLogs(),
    postmortems: listPostmortems(),
    generatedAt: new Date().toISOString(),
  };

  seeded.current = true;
  return snapshot;
}

export function getDashboardSnapshot(): DashboardSnapshot {
  return ensureMockData();
}

function toRelativeTime(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  if (diffMinutes <= 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  return `${diffHours}h ago`;
}
