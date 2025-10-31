import { AlertRecord, DeployJob, LogRecord, PostmortemRecord } from "@sentinelops/tools";
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
    strategies: AgentBprimeStrategyItem[];
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
    status: "awaiting" | "approved" | "running" | "rejected";
    risk: "low" | "medium" | "high";
    relatedJobId?: string;
};
export type AgentBprimeStrategyItem = {
    id: string;
    title: string;
    focusArea: string;
    constraints: string | null;
    plan: string;
    metrics: Record<string, unknown> | null;
    createdAt: string;
};
export declare function ensureMockData(): void;
export declare function getDashboardSnapshot(): DashboardSnapshot;
