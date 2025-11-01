"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCoAgent, useCopilotAction } from "@copilotkit/react-core";
import { CopilotSidebar, CopilotKitCSSProperties } from "@copilotkit/react-ui";
import { z } from "zod";
import { HumanOpsMemorySchema } from "@sentinelops/agents/memory";
import { SentinelOpsPlaceholder } from "@sentinelops/ui";
import { useRealTimeEvents, type AgentActivity } from "../hooks/useRealTimeEvents";
import { AgentActivityFeed } from "../components/AgentActivityFeed";

const API_BASE_URL = process.env.NEXT_PUBLIC_SENTINELOPS_API ?? "http://localhost:4111";
const REFRESH_INTERVAL_MS = 30_000;

type StatTone = "positive" | "critical" | "neutral";
type AgentStatus = "online" | "degraded" | "offline";
type IncidentSeverity = "low" | "moderate" | "high";
type ActionStatus = "awaiting" | "approved" | "running" | "rejected";
type ActionRisk = "low" | "medium" | "high";

type StatCardConfig = {
  label: string;
  value: string;
  trend: string;
  tone: StatTone;
};

type AgentRosterItem = {
  name: string;
  focus: string;
  status: AgentStatus;
  heartbeat: string;
  tasks: number;
};

type IncidentItem = {
  id: string;
  service: string;
  severity: IncidentSeverity;
  summary: string;
  timestamp: string;
};

type ActionQueueItem = {
  id: string;
  label: string;
  owner: string;
  status: ActionStatus;
  risk: ActionRisk;
  relatedJobId?: string;
};

type StrategyItem = {
  id: string;
  title: string;
  focusArea: string;
  constraints: string | null;
  plan: string;
  metrics: Record<string, unknown> | null;
  createdAt: string;
};

type ApiIncidentAction = {
  id: string;
  incidentId: string;
  label: string;
  type: string;
  risk: string;
  status: string;
  approvedBy?: string;
  rejectedBy?: string;
  rejectionReason?: string;
  metadata?: Record<string, unknown> | null;
};

type ApiStrategy = {
  id: string;
  title: string;
  focusArea: string;
  constraints: string | null;
  plan: string;
  metrics: Record<string, unknown> | null;
  createdAt: string;
};

type DashboardData = {
  stats: StatCardConfig[];
  roster: AgentRosterItem[];
  incidents: IncidentItem[];
  actions: ActionQueueItem[];
  strategies: StrategyItem[];
  memory: string[];
  generatedAt: string;
  alerts?: unknown[];
  deploys?: unknown[];
  logs?: unknown[];
  postmortems?: unknown[];
};

type AgentState = z.infer<typeof HumanOpsMemorySchema>;

function mapApiStatus(status: string): ActionStatus {
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

function mapApiRisk(risk: string): ActionRisk {
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

function deriveOwner(action: ApiIncidentAction): string {
  if (action.approvedBy) return action.approvedBy;
  if (action.rejectedBy) return action.rejectedBy;
  if (action.status === "RUNNING") return "IncidentCommander";
  return "Awaiting approval";
}

function mapApiAction(action: ApiIncidentAction): ActionQueueItem {
  const metadata = (action.metadata ?? {}) as Record<string, unknown>;
  return {
    id: action.id,
    label: action.label,
    owner: deriveOwner(action),
    status: mapApiStatus(action.status),
    risk: mapApiRisk(action.risk),
    relatedJobId: typeof metadata.relatedJobId === "string" ? metadata.relatedJobId : undefined,
  };
}

function mapApiStrategy(strategy: ApiStrategy): StrategyItem {
  return {
    id: strategy.id,
    title: strategy.title,
    focusArea: strategy.focusArea,
    constraints: strategy.constraints,
    plan: strategy.plan,
    metrics: strategy.metrics,
    createdAt: strategy.createdAt,
  };
}

function getFallbackDashboard(): DashboardData {
  return {
    stats: [
      { label: "Active Incidents", value: "2", trend: "+1 vs 1h", tone: "critical" },
      { label: "Mean Time to Mitigate", value: "11m", trend: "-4m vs last week", tone: "positive" },
      { label: "Deployments (24h)", value: "14", trend: "3 pending approvals", tone: "neutral" },
      { label: "Auto-Remediations", value: "5", trend: "100% success", tone: "positive" },
    ],
    roster: [
      { name: "DevOpsGPT", focus: "Release orchestration & PR review", status: "online", heartbeat: "2m ago", tasks: 3 },
      { name: "IncidentCommander", focus: "Triage & mitigation planning", status: "online", heartbeat: "48s ago", tasks: 1 },
      { name: "MonitorAgent", focus: "Telemetry ingestion & anomaly detection", status: "degraded", heartbeat: "5m ago", tasks: 6 },
      { name: "CodeExpertAgent", focus: "Diff analysis & implementation planning", status: "online", heartbeat: "1m ago", tasks: 2 },
      { name: "DiscordTriage", focus: "Community support threads", status: "online", heartbeat: "just now", tasks: 2 },
    ],
    incidents: [
      {
        id: "INC-2410",
        service: "gpu-worker-3",
        severity: "high",
        summary: "OOM detected in inference pipeline",
        timestamp: "2m ago",
      },
      {
        id: "INC-2409",
        service: "deploy-proxy",
        severity: "moderate",
        summary: "Rollback succeeded for release 2024.10.21",
        timestamp: "28m ago",
      },
      {
        id: "INC-2408",
        service: "mcp-gateway",
        severity: "low",
        summary: "Latency spike auto-resolved by scaling",
        timestamp: "52m ago",
      },
    ],
    actions: [
      {
        id: "ACT-0098",
        label: "Rollback deploy 2024.10.21",
        owner: "Awaiting approval",
        status: "awaiting",
        risk: "low",
      },
      {
        id: "ACT-0097",
        label: "Scale gpu-worker-3 from 4 ➜ 6",
        owner: "IncidentCommander",
        status: "running",
        risk: "medium",
      },
      {
        id: "ACT-0096",
        label: "Publish postmortem for INC-2407",
        owner: "DevOpsGPT",
        status: "approved",
        risk: "low",
      },
    ],
    strategies: [
      {
        id: "STR-001",
        title: "Qualifier Optimization Sprint",
        focusArea: "Compute Efficiency",
        constraints: "CU budget < 120, binary size < 25MB",
        plan: "Benchmark -> Quantize -> Rehearse",
        metrics: { targetCU: 110 },
        createdAt: new Date().toISOString(),
      },
    ],
    memory: [
      "Stability comes from rehearsed playbooks, not luck.",
      "Every rollback teaches the next deploy.",
      "Fast feedback makes fearless builders.",
    ],
    generatedAt: new Date().toISOString(),
  };
}

export default function SentinelOpsDashboard() {
  const [themeColor, setThemeColor] = useState("#6366f1");
  const fallbackDashboard = useMemo(() => getFallbackDashboard(), []);
  const fallbackActions = useMemo(() => fallbackDashboard.actions.map((action) => ({ ...action })), [fallbackDashboard]);
  const fallbackStrategies = useMemo(() => fallbackDashboard.strategies.map((strategy) => ({ ...strategy })), [fallbackDashboard]);
  const [dashboard, setDashboard] = useState<DashboardData>(fallbackDashboard);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actions, setActions] = useState<ActionQueueItem[]>(fallbackActions);
  const [actionsLoading, setActionsLoading] = useState(true);
  const [actionsError, setActionsError] = useState<string | null>(null);
  const [actionBusyId, setActionBusyId] = useState<string | null>(null);
  const [strategies, setStrategies] = useState<StrategyItem[]>(fallbackStrategies);
  const [strategiesLoading, setStrategiesLoading] = useState(true);
  const [strategiesError, setStrategiesError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  // Real-time event stream
  const {
    activities: agentActivities,
    isConnected: wsConnected,
    clearAllActivities,
  } = useRealTimeEvents(API_BASE_URL);

  useCopilotAction({
    name: "setThemeColor",
    parameters: [
      {
        name: "themeColor",
        description: "Hex color to apply as SentinelOps accent.",
        required: true,
      },
    ],
    handler({ themeColor }) {
      setThemeColor(themeColor);
    },
  });

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const refreshActions = useCallback(async (options?: { showLoading?: boolean }) => {
    const showLoading = options?.showLoading ?? false;
    if (showLoading && mountedRef.current) {
      setActionsLoading(true);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/v1/actions`, {
        method: "GET",
        headers: { Accept: "application/json" },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Actions request failed with status ${response.status}`);
      }

      const data = (await response.json()) as { actions: ApiIncidentAction[] };
      if (!mountedRef.current) return;

      setActions(data.actions.map(mapApiAction));
      setActionsError(null);
    } catch (err) {
      if (!mountedRef.current) return;
      const message = err instanceof Error ? err.message : "Unable to load actions";
      setActionsError(message);
    } finally {
      if (showLoading && mountedRef.current) {
        setActionsLoading(false);
      }
    }
  }, []);

  const refreshStrategies = useCallback(async (options?: { showLoading?: boolean }) => {
    const showLoading = options?.showLoading ?? false;
    if (showLoading && mountedRef.current) {
      setStrategiesLoading(true);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/v1/strategies`, {
        method: "GET",
        headers: { Accept: "application/json" },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Strategies request failed with status ${response.status}`);
      }

      const data = (await response.json()) as { strategies: ApiStrategy[] };
      if (!mountedRef.current) return;

      setStrategies(data.strategies.map(mapApiStrategy));
      setStrategiesError(null);
    } catch (err) {
      if (!mountedRef.current) return;
      const message = err instanceof Error ? err.message : "Unable to load strategies";
      setStrategiesError(message);
    } finally {
      if (showLoading && mountedRef.current) {
        setStrategiesLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const dashboardTimer = setInterval(() => {
      loadDashboard().catch(() => {
        /* handled in loadDashboard */
      });
    }, REFRESH_INTERVAL_MS);

    async function loadDashboard() {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_BASE_URL}/v1/dashboard`, {
          method: "GET",
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Dashboard request failed with status ${response.status}`);
        }

        const data = (await response.json()) as DashboardData;
        if (!cancelled) {
          setDashboard(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : "Unable to load dashboard snapshot";
          setError(message);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadDashboard().catch(() => {
      /* handled in loadDashboard */
    });

    return () => {
      cancelled = true;
      clearInterval(dashboardTimer);
    };
  }, []);

  useEffect(() => {
    refreshActions({ showLoading: true }).catch(() => undefined);
    const actionsTimer = setInterval(() => {
      refreshActions().catch(() => undefined);
    }, REFRESH_INTERVAL_MS);

    return () => {
      clearInterval(actionsTimer);
    };
  }, [refreshActions]);

  useEffect(() => {
    refreshStrategies({ showLoading: true }).catch(() => undefined);
    const strategiesTimer = setInterval(() => {
      refreshStrategies().catch(() => undefined);
    }, REFRESH_INTERVAL_MS * 2);

    return () => {
      clearInterval(strategiesTimer);
    };
  }, [refreshStrategies]);

  const handleApproveAction = useCallback(
    async (actionId: string) => {
      setActionBusyId(actionId);
      try {
        const response = await fetch(`${API_BASE_URL}/v1/actions/${actionId}/approve`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ approvedBy: "Dashboard" }),
        });

        if (!response.ok) {
          throw new Error(`Approval failed with status ${response.status}`);
        }

        await refreshActions();
      } catch (err) {
        if (!mountedRef.current) return;
        const message = err instanceof Error ? err.message : "Unable to approve action";
        setActionsError(message);
      } finally {
        if (mountedRef.current) {
          setActionBusyId((current) => (current === actionId ? null : current));
        }
      }
    },
    [refreshActions]
  );

  const handleRejectAction = useCallback(
    async (actionId: string) => {
      setActionBusyId(actionId);
      try {
        const response = await fetch(`${API_BASE_URL}/v1/actions/${actionId}/reject`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rejectedBy: "Dashboard", reason: "Rejected via dashboard" }),
        });

        if (!response.ok) {
          throw new Error(`Rejection failed with status ${response.status}`);
        }

        await refreshActions();
      } catch (err) {
        if (!mountedRef.current) return;
        const message = err instanceof Error ? err.message : "Unable to reject action";
        setActionsError(message);
      } finally {
        if (mountedRef.current) {
          setActionBusyId((current) => (current === actionId ? null : current));
        }
      }
    },
    [refreshActions]
  );

  return (
    <main style={{ "--copilot-kit-primary-color": themeColor } as CopilotKitCSSProperties}>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute -top-40 right-[-20%] h-[520px] w-[520px] rounded-full opacity-60"
          style={{ background: `radial-gradient(circle, ${themeColor}55, transparent 65%)` }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12">
          <Header themeColor={themeColor} generatedAt={dashboard.generatedAt} isLoading={isLoading} wsConnected={wsConnected} />
          {error ? <ErrorBanner message={error} /> : null}
          <DashboardPanels
            dashboard={dashboard}
            isLoading={isLoading}
            actions={actions}
            actionsLoading={actionsLoading}
            actionsError={actionsError}
            onApproveAction={handleApproveAction}
            onRejectAction={handleRejectAction}
            actionBusyId={actionBusyId}
            strategies={strategies}
            strategiesLoading={strategiesLoading}
            strategiesError={strategiesError}
            agentActivities={agentActivities}
            wsConnected={wsConnected}
            onClearActivities={clearAllActivities}
          />
        </div>
      </div>
    </main>
  );
}

function DashboardPanels({
  dashboard,
  isLoading,
  actions,
  actionsLoading,
  actionsError,
  onApproveAction,
  onRejectAction,
  actionBusyId,
  strategies,
  strategiesLoading,
  strategiesError,
  agentActivities,
  wsConnected,
  onClearActivities,
}: {
  dashboard: DashboardData;
  isLoading: boolean;
  actions: ActionQueueItem[];
  actionsLoading: boolean;
  actionsError: string | null;
  onApproveAction: (actionId: string) => void | Promise<void>;
  onRejectAction: (actionId: string) => void | Promise<void>;
  actionBusyId: string | null;
  strategies: StrategyItem[];
  strategiesLoading: boolean;
  strategiesError: string | null;
  agentActivities: AgentActivity[];
  wsConnected: boolean;
  onClearActivities: () => void;
}) {
  const { state, setState } = useCoAgent<AgentState>({
    name: "HumanOpsAgent",
    initialState: {
      proverbs: dashboard.memory,
      preferences: {
        environment: "production",
        verbosity: "brief",
      },
    },
  });

  useEffect(() => {
    const current = state.proverbs ?? [];
    const next = dashboard.memory ?? [];
    const changed =
      current.length !== next.length ||
      current.some((value: string, index: number) => value !== next[index]);

    if (changed) {
      setState({
        ...state,
        proverbs: next,
      });
    }
  }, [dashboard.memory, setState, state]);

  useCopilotAction({
    name: "updateWorkingMemory",
    available: "frontend",
    render: ({ args }) => {
      return (
        <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-sm text-white">
          <p className="font-semibold">Memory updated</p>
          <pre className="mt-2 max-h-48 overflow-auto rounded-lg bg-black/30 p-3 text-xs text-white/70">
            {JSON.stringify(args, null, 2)}
          </pre>
        </div>
      );
    },
  });

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboard.stats.map((card) => (
          <StatCard key={card.label} {...card} isLoading={isLoading} />
        ))}
      </section>

      {/* Agent Activity Feed */}
      <AgentActivityFeed activities={agentActivities} isConnected={wsConnected} onClear={onClearActivities} />

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-6">
          <AgentRoster agents={dashboard.roster} state={state} setState={setState} isLoading={isLoading} />
          <IncidentTimeline incidents={dashboard.incidents} isLoading={isLoading} />
          {actionsError ? <ErrorBanner message={actionsError} /> : null}
          <ActionQueue
            items={actions}
            isLoading={actionsLoading}
            busyActionId={actionBusyId}
            onApprove={onApproveAction}
            onReject={onRejectAction}
          />
          <StrategyPanel strategies={strategies} isLoading={strategiesLoading} error={strategiesError} />
        </div>

        <aside className="flex flex-col gap-6">
          <SentinelOpsPlaceholder />
          <CopilotSidebar
            clickOutsideToClose={false}
            defaultOpen
            labels={{
              title: "SentinelOps Copilot",
              initial:
                "Ask for mitigation ideas, request runbooks, or push deployment intents.\nTry: 'Suggest a stabilization plan for gpu-worker-3.'",
            }}
          />
        </aside>
      </section>
    </>
  );
}

function Header({ themeColor, generatedAt, isLoading, wsConnected }: { themeColor: string; generatedAt: string; isLoading: boolean; wsConnected: boolean }) {
  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div className="flex items-center gap-4">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg shadow-indigo-500/50"
          style={{ background: `linear-gradient(135deg, ${themeColor}, #7c3aed)` }}
        >
          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">SentinelOps</h1>
          <p className="text-sm text-white/60">AI-Powered Operations Platform</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
          <div className={`h-2 w-2 rounded-full ${wsConnected ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
          <span className="text-xs font-medium text-white/80">
            {wsConnected ? 'Live' : 'Offline'}
          </span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
          <span className="text-xs text-white/60">
            {isLoading ? "Syncing..." : `Updated ${timeAgo(generatedAt)}`}
          </span>
        </div>
      </div>
    </header>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-100">
      <p className="font-semibold">Unable to sync live data</p>
      <p className="mt-1 text-rose-200/80">{message}</p>
    </div>
  );
}

function StatCard({ label, value, trend, tone, isLoading }: StatCardConfig & { isLoading: boolean }) {
  const toneColor = tone === "critical" ? "text-rose-300" : tone === "positive" ? "text-emerald-300" : "text-white/70";
  const borderColor = tone === "critical" ? "border-rose-500/20" : tone === "positive" ? "border-emerald-500/20" : "border-white/10";

  return (
    <div className={`group flex flex-col gap-2 rounded-2xl border ${borderColor} bg-white/5 p-5 transition hover:bg-white/8`}>
      <p className="text-xs font-medium uppercase tracking-wider text-white/50">{label}</p>
      <p className="text-4xl font-bold tracking-tight">
        {isLoading ? <span className="animate-pulse text-white/40">—</span> : value}
      </p>
      <span className={`text-xs font-medium ${toneColor}`}>{trend}</span>
    </div>
  );
}

function AgentRoster({
  agents,
  state,
  setState,
  isLoading,
}: {
  agents: AgentRosterItem[];
  state: AgentState;
  setState: (state: AgentState) => void;
  isLoading: boolean;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20">
          <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Active Agents</h2>
          <p className="text-sm text-white/60">{agents.length} agents deployed</p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {agents.map((agent) => (
          <div key={agent.name} className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-black/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium">{agent.name}</p>
                <p className="text-xs text-white/50">{agent.focus}</p>
              </div>
              <StatusPill status={agent.status} />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-white/60">
              <span className="font-medium">{agent.tasks} tasks</span>
              <span>{isLoading ? "—" : agent.heartbeat}</span>
            </div>
          </div>
        ))}
      </div>
      <AgentMemory state={state} setState={setState} />
    </div>
  );
}

function AgentMemory({ state, setState }: { state: AgentState; setState: (state: AgentState) => void }) {
  return (
    <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-black/30 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Shared memory</p>
          <p className="text-xs text-white/50">Prompts and heuristics the agents are currently reinforcing.</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {state.proverbs?.map((entry: string, index: number) => (
          <div key={index} className="relative rounded-xl border border-white/10 bg-white/5 p-4 pr-10 text-sm text-white/80">
            {entry}
            <button
              onClick={() => {
                setState({
                  ...state,
                  proverbs: state.proverbs?.filter((_: string, i: number) => i !== index) ?? [],
                });
              }}
              className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-xs text-white/60 transition hover:bg-white/20 hover:text-white"
            >
              Remove
            </button>
          </div>
        ))}
        {(state.proverbs?.length ?? 0) === 0 && (
          <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-4 text-sm text-white/50">
            Waiting for new shared insights from the agents…
          </div>
        )}
      </div>
    </div>
  );
}

function IncidentTimeline({ incidents, isLoading }: { incidents: IncidentItem[]; isLoading: boolean }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/20">
          <svg className="h-5 w-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Incidents</h2>
          <p className="text-sm text-white/60">{incidents.length} recent alerts</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {incidents.map((incident) => (
          <div key={incident.id} className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-black/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-white/50">{incident.id}</span>
              <SeverityPill severity={incident.severity} />
            </div>
            <p className="mt-2 text-base font-semibold">{incident.service}</p>
            <p className="mt-1 text-sm text-white/70">{incident.summary}</p>
            <p className="mt-3 text-xs text-white/40">{isLoading ? "Updating…" : incident.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionQueue({
  items,
  isLoading,
  busyActionId,
  onApprove,
  onReject,
}: {
  items: ActionQueueItem[];
  isLoading: boolean;
  busyActionId?: string | null;
  onApprove?: (actionId: string) => void | Promise<void>;
  onReject?: (actionId: string) => void | Promise<void>;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20">
          <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Action Queue</h2>
          <p className="text-sm text-white/60">{items.length} pending actions</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="group rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-white/20 hover:bg-black/30">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs font-mono text-white/50">{item.id}</p>
                <p className="mt-1 text-base font-semibold">{item.label}</p>
                <p className="mt-1 text-xs text-white/60">{item.owner}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <ActionStatusBadge status={item.status} />
                <RiskBadge risk={item.risk} />
              </div>
            </div>
            {(onApprove || onReject) ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {onApprove && (item.status === "awaiting" || item.status === "rejected") ? (
                  <button
                    onClick={() => onApprove(item.id)}
                    disabled={isLoading || busyActionId === item.id}
                    className="rounded-lg bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {busyActionId === item.id ? "Approving…" : "✓ Approve"}
                  </button>
                ) : null}
                {onReject && item.status === "awaiting" ? (
                  <button
                    onClick={() => onReject(item.id)}
                    disabled={isLoading || busyActionId === item.id}
                    className="rounded-lg bg-rose-500/20 px-4 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/30 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {busyActionId === item.id ? "Rejecting…" : "✗ Reject"}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategyPanel({ strategies, isLoading, error }: { strategies: StrategyItem[]; isLoading: boolean; error: string | null }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
          <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Optimization Strategies</h2>
          <p className="text-sm text-white/60">AI-generated improvement plans</p>
        </div>
        {isLoading && <span className="text-xs text-white/40">Loading…</span>}
      </div>
      {error ? (
        <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">{error}</p>
      ) : (
        <div className="flex flex-col gap-4">
          {strategies.length === 0 ? (
            <div className="rounded-xl border border-dashed border-white/20 bg-black/20 p-6 text-center">
              <p className="text-sm text-white/50">No strategies available</p>
            </div>
          ) : (
            strategies.map((strategy) => (
              <div key={strategy.id} className="group rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-white/20 hover:bg-black/30">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">{strategy.title}</h3>
                    <p className="text-xs text-white/50">{strategy.focusArea}</p>
                  </div>
                  <span className="text-xs text-white/40">{timeAgo(strategy.createdAt)}</span>
                </div>
                {strategy.constraints && (
                  <p className="mt-2 text-xs text-amber-200/80">⚠ {strategy.constraints}</p>
                )}
                <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-white/80">{strategy.plan}</p>
                {strategy.metrics && (
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-black/40 p-3 text-xs text-white/70">
                    {JSON.stringify(strategy.metrics, null, 2)}
                  </pre>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

function StatusPill({ status }: { status: AgentStatus }) {
  const variant =
    status === "online" ? "bg-emerald-400/20 text-emerald-200" : status === "degraded" ? "bg-amber-400/20 text-amber-200" : "bg-rose-400/20 text-rose-200";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${variant}`}>
      {status}
    </span>
  );
}

function SeverityPill({ severity }: { severity: IncidentSeverity }) {
  const variant =
    severity === "high"
      ? "bg-rose-500/20 text-rose-200"
      : severity === "moderate"
      ? "bg-amber-500/20 text-amber-200"
      : "bg-sky-500/20 text-sky-200";

  return <span className={`rounded-full px-2 py-1 text-xs font-medium uppercase tracking-wide ${variant}`}>{severity}</span>;
}

function ActionStatusBadge({ status }: { status: ActionStatus }) {
  const label =
    status === "awaiting"
      ? "Awaiting approval"
      : status === "approved"
      ? "Approved"
      : status === "running"
      ? "Running"
      : "Rejected";
  const variant =
    status === "awaiting"
      ? "bg-sky-400/20 text-sky-200"
      : status === "approved"
      ? "bg-emerald-400/20 text-emerald-200"
      : status === "running"
      ? "bg-indigo-400/20 text-indigo-200"
      : "bg-rose-400/20 text-rose-200";

  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${variant}`}>{label}</span>;
}

function RiskBadge({ risk }: { risk: ActionRisk }) {
  const variant =
    risk === "high" ? "bg-rose-500/20 text-rose-200" : risk === "medium" ? "bg-amber-500/20 text-amber-200" : "bg-emerald-500/20 text-emerald-200";

  return <span className={`rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide ${variant}`}>Risk: {risk}</span>;
}

function timeAgo(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  if (diffMinutes <= 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  return `${diffHours}h ago`;
}
