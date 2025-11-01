"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureMockData = ensureMockData;
exports.getDashboardSnapshot = getDashboardSnapshot;
const tools_1 = require("@sentinelops/tools");
const env_1 = require("./env");
const SeverityMap = {
    LOW: "low",
    MEDIUM: "moderate",
    HIGH: "high",
    CRITICAL: "high",
};
const seeded = { current: false };
const seedRefs = { actionIds: [] };
function shouldSeedMockData() {
    const explicit = process.env.SENTINELOPS_SEED_DATA;
    if (explicit !== undefined) {
        return ["1", "true", "yes", "on"].includes(explicit.toLowerCase());
    }
    return env_1.env.NODE_ENV !== "production";
}
function ensureMockData() {
    if (seeded.current) {
        return;
    }
    if (!shouldSeedMockData()) {
        seeded.current = true;
        return;
    }
    (0, tools_1.clearAlerts)();
    (0, tools_1.clearJobs)();
    (0, tools_1.clearLogs)();
    (0, tools_1.clearPostmortems)();
    (0, tools_1.clearIncidentActions)();
    (0, tools_1.clearStrategies)();
    seedRefs.actionIds = [];
    const criticalAlert = (0, tools_1.createAlert)(tools_1.CreateAlertInputSchema.parse({
        service: "gpu-worker-3",
        severity: "HIGH",
        summary: "OOM detected in inference pipeline",
        metadata: {
            node: "worker-3",
            lastRelease: "2024.10.21",
        },
    }));
    const moderateAlert = (0, tools_1.createAlert)(tools_1.CreateAlertInputSchema.parse({
        service: "deploy-proxy",
        severity: "MEDIUM",
        summary: "Rollback succeeded for release 2024.10.21",
    }));
    seedRefs.criticalAlertId = criticalAlert.id;
    seedRefs.moderateAlertId = moderateAlert.id;
    try {
        (0, tools_1.resolveAlert)({
            alertId: moderateAlert.id,
            resolution: "Rollback completed automatically",
        });
    }
    catch (error) {
        console.warn("Seed resolve failed", error);
    }
    try {
        (0, tools_1.ackAlert)(tools_1.AckAlertInputSchema.parse({
            alertId: criticalAlert.id,
            user: "incident-commander",
        }));
    }
    catch (error) {
        console.warn("Seed ack failed", error);
    }
    const deployPrimary = (0, tools_1.createDeployJob)({
        service: "gpu-worker-3",
        image: "registry.ops/gpu-worker:2024.10.21",
        version: "2024.10.21",
        command: ["pnpm", "start"],
        env: {},
    }, {
        status: "FAILED",
        outcome: "OOM observed during warmup",
        createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    });
    const rollback = (0, tools_1.createRollbackJob)(deployPrimary, deployPrimary.spec.version, {
        status: "RUNNING",
    });
    const scaleJob = (0, tools_1.createDeployJob)({
        service: "gpu-worker-3",
        image: "registry.ops/gpu-worker:2024.10.15",
        version: "2024.10.15",
        command: ["pnpm", "start"],
        env: {},
    }, {
        status: "RUNNING",
    });
    seedRefs.deployPrimaryId = deployPrimary.id;
    seedRefs.rollbackJobId = rollback.id;
    seedRefs.scaleJobId = scaleJob.id;
    (0, tools_1.ingestLog)({
        incidentId: criticalAlert.id,
        source: "gpu-worker-3",
        level: "ERROR",
        message: "CUDA out of memory: failed to allocate 2.00 GiB",
        metadata: {
            pod: "gpu-worker-3-578cd9d9c7-xyz",
            gpuUtil: 0.97,
        },
    });
    (0, tools_1.ingestLog)({
        incidentId: criticalAlert.id,
        source: "gpu-worker-3",
        level: "WARN",
        message: "Restart suggested by auto-scaler",
        metadata: {
            suggestion: "Scale up to 6 replicas",
        },
    });
    const postmortem = (0, tools_1.createPostmortem)({
        incidentId: moderateAlert.id,
        service: "deploy-proxy",
        draftText: "Rollback executed within 5 minutes. Root cause: config mismatch.",
        attachments: [],
        authors: ["DevOpsGPT"],
    });
    (0, tools_1.publishPostmortem)({ postmortemId: postmortem.id, publishedBy: "DevOpsGPT" });
    seedRefs.postmortemId = postmortem.id;
    if (criticalAlert.id) {
        const rollbackAction = (0, tools_1.createIncidentAction)({
            incidentId: criticalAlert.id,
            label: `Rollback deploy ${deployPrimary.spec.version}`,
            type: "ROLLBACK",
            risk: "LOW",
            metadata: { relatedJobId: rollback.id },
        });
        seedRefs.actionIds.push(rollbackAction.id);
    }
    if (criticalAlert.id) {
        const scaleAction = (0, tools_1.createIncidentAction)({
            incidentId: criticalAlert.id,
            label: "Scale gpu-worker-3 from 4 ➜ 6",
            type: "SCALE",
            risk: "MEDIUM",
            metadata: { relatedJobId: scaleJob.id },
        });
        (0, tools_1.updateIncidentActionStatus)(scaleAction.id, { status: "RUNNING" });
        seedRefs.actionIds.push(scaleAction.id);
    }
    if (moderateAlert.id) {
        const postmortemAction = (0, tools_1.createIncidentAction)({
            incidentId: moderateAlert.id,
            label: "Publish postmortem for deploy-proxy",
            type: "POSTMORTEM",
            risk: "LOW",
            metadata: { relatedPostmortemId: postmortem.id },
        });
        (0, tools_1.updateIncidentActionStatus)(postmortemAction.id, { status: "APPROVED", approvedBy: "DevOpsGPT" });
        seedRefs.actionIds.push(postmortemAction.id);
    }
    (0, tools_1.createStrategy)({
        title: "Qualifier optimisation sprint",
        focusArea: "Compute efficiency",
        constraints: "CU budget < 120 / round; binary size < 25 MB",
        plan: "Warmup: benchmark solver harness. Qualifier: swap to quantised models + incremental caching. Finals: rehearse 10-min timeline with SentinelOps approvals.",
        metrics: {
            targetCU: 110,
            binarySizeMB: 22,
            targetSolveSeconds: 45,
        },
    });
    (0, tools_1.createStrategy)({
        title: "Finals rapid response",
        focusArea: "Solve speed",
        constraints: "10-minute live hack-off; single attempt",
        plan: "Keep warm cache of scaffolds, precompile baseline binaries, route triage to IncidentCommander while AgentBprime issues code patches.",
        metrics: {
            maxLatencyMs: 200,
            fallbackModel: "qwen3:8b",
        },
    });
    seeded.current = true;
}
function getDashboardSnapshot() {
    ensureMockData();
    const alerts = (0, tools_1.listAlerts)();
    const deploys = (0, tools_1.listJobs)();
    const logs = (0, tools_1.listLogs)();
    const postmortems = (0, tools_1.listPostmortems)();
    const strategies = (0, tools_1.listStrategies)();
    const incidents = alerts.map((alert) => ({
        id: alert.id,
        service: alert.service,
        severity: SeverityMap[alert.severity],
        summary: alert.summary,
        timestamp: toRelativeTime(alert.createdAt),
    }));
    const activeIncidents = alerts.filter((alert) => alert.status !== "RESOLVED").length;
    const actionsFromDb = (0, tools_1.listIncidentActions)();
    const actions = actionsFromDb.map((action) => ({
        id: action.id,
        label: action.label,
        owner: deriveOwner(action),
        status: mapActionStatus(action.status),
        risk: mapActionRisk(action.risk),
        relatedJobId: action.metadata?.relatedJobId,
    }));
    const snapshot = {
        stats: [
            { label: "Active Incidents", value: `${activeIncidents}`, trend: "+1 vs 1h", tone: activeIncidents > 0 ? "critical" : "neutral" },
            { label: "Mean Time to Mitigate", value: "11m", trend: "-4m vs last week", tone: "positive" },
            { label: "Deployments (24h)", value: `${deploys.length}`, trend: "Seed data", tone: "neutral" },
            { label: "Auto-Remediations", value: `${deploys.filter((job) => job.type === "ROLLBACK").length}`, trend: "Seed data", tone: "positive" },
        ],
        roster: [
            { name: "DevOpsGPT", focus: "Release orchestration & PR review", status: "online", heartbeat: "2m ago", tasks: 3 },
            { name: "IncidentCommander", focus: "Triage & mitigation planning", status: "online", heartbeat: "48s ago", tasks: 1 },
            { name: "MonitorAgent", focus: "Telemetry ingestion & anomaly detection", status: "degraded", heartbeat: "5m ago", tasks: 6 },
            { name: "CodeExpertAgent", focus: "Diff analysis & implementation planning", status: "online", heartbeat: "1m ago", tasks: 2 },
            { name: "DiscordTriage", focus: "Community support threads", status: "online", heartbeat: "just now", tasks: 2 },
        ],
        incidents,
        actions,
        memory: [
            "Stability comes from rehearsed playbooks, not luck.",
            "Every rollback teaches the next deploy.",
            "Fast feedback makes fearless builders.",
        ],
        alerts,
        deploys,
        logs,
        postmortems,
        strategies: strategies.map((strategy) => ({
            id: strategy.id,
            title: strategy.title,
            focusArea: strategy.focusArea,
            constraints: strategy.constraints,
            plan: strategy.plan,
            metrics: strategy.metrics,
            createdAt: strategy.createdAt,
        })),
        generatedAt: new Date().toISOString(),
    };
    return snapshot;
}
function mapActionStatus(status) {
    switch (status) {
        case "APPROVED":
        case "COMPLETED":
            return "approved";
        case "RUNNING":
            return "running";
        case "REJECTED":
            return "rejected";
        case "PENDING":
        default:
            return "awaiting";
    }
}
function mapActionRisk(risk) {
    switch (risk) {
        case "HIGH":
            return "high";
        case "MEDIUM":
            return "medium";
        case "LOW":
        default:
            return "low";
    }
}
function deriveOwner(action) {
    switch (action.type) {
        case "ROLLBACK":
            return action.status === "PENDING" ? "Awaiting approval" : action.approvedBy ?? "IncidentCommander";
        case "SCALE":
            return "IncidentCommander";
        case "POSTMORTEM":
            return action.approvedBy ?? "DevOpsGPT";
        case "RESTART":
            return "Ops Automation";
        case "INVESTIGATE":
        default:
            return "IncidentCommander";
    }
}
function toRelativeTime(iso) {
    const diffMs = Date.now() - new Date(iso).getTime();
    const diffMinutes = Math.floor(diffMs / 60000);
    if (diffMinutes <= 1)
        return "just now";
    if (diffMinutes < 60)
        return `${diffMinutes}m ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    return `${diffHours}h ago`;
}
//# sourceMappingURL=mock-data.js.map