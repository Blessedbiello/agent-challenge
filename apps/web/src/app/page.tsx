"use client";

import { useEffect, useMemo, useState } from "react";
import { useCoAgent, useCopilotAction } from "@copilotkit/react-core";
import { CopilotSidebar, CopilotKitCSSProperties } from "@copilotkit/react-ui";
import { z } from "zod";
import { HumanOpsMemorySchema } from "@sentinelops/agents";
import { SentinelOpsPlaceholder } from "@sentinelops/ui";

const API_BASE_URL = process.env.NEXT_PUBLIC_SENTINELOPS_API ?? "http://localhost:4111";
const REFRESH_INTERVAL_MS = 30_000;

type StatTone = "positive" | "critical" | "neutral";
type AgentStatus = "online" | "degraded" | "offline";
type IncidentSeverity = "low" | "moderate" | "high";
type ActionStatus = "awaiting" | "approved" | "running";
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

type DashboardData = {
  stats: StatCardConfig[];
  roster: AgentRosterItem[];
  incidents: IncidentItem[];
  actions: ActionQueueItem[];
  memory: string[];
  generatedAt: string;
  alerts?: unknown[];
  deploys?: unknown[];
  logs?: unknown[];
  postmortems?: unknown[];
};

type AgentState = z.infer<typeof HumanOpsMemorySchema>;

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
  const [dashboard, setDashboard] = useState<DashboardData>(fallbackDashboard);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    let cancelled = false;
    let timer: ReturnType<typeof setInterval> | undefined;

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

    timer = setInterval(() => {
      loadDashboard().catch(() => {
        /* handled in loadDashboard */
      });
    }, REFRESH_INTERVAL_MS);

    return () => {
      cancelled = true;
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <main style={{ "--copilot-kit-primary-color": themeColor } as CopilotKitCSSProperties}>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute -top-40 right-[-20%] h-[520px] w-[520px] rounded-full opacity-60"
          style={{ background: `radial-gradient(circle, ${themeColor}55, transparent 65%)` }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12">
          <Header themeColor={themeColor} generatedAt={dashboard.generatedAt} isLoading={isLoading} />
          {error ? <ErrorBanner message={error} /> : null}
          <DashboardPanels themeColor={themeColor} dashboard={dashboard} isLoading={isLoading} />
        </div>
      </div>
    </main>
  );
}

function DashboardPanels({ themeColor, dashboard, isLoading }: { themeColor: string; dashboard: DashboardData; isLoading: boolean }) {
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
      current.some((value, index) => value !== next[index]);

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

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-6">
          <AgentRoster agents={dashboard.roster} state={state} setState={setState} isLoading={isLoading} />
          <IncidentTimeline incidents={dashboard.incidents} isLoading={isLoading} />
          <ActionQueue items={dashboard.actions} isLoading={isLoading} />
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

function Header({ themeColor, generatedAt, isLoading }: { themeColor: string; generatedAt: string; isLoading: boolean }) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">SentinelOps Control Tower</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Full-stack AI operations dashboard</h1>
        <p className="mt-3 max-w-2xl text-base text-white/70">
          Monitor agents, incidents, and deployments in real time. Human approvals stay in the loop, while the platform automates triage, remediation,
          and postmortems.
        </p>
      </div>
      <div className="flex items-center gap-3 self-start rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 md:self-auto">
        <span className="text-xs uppercase tracking-wide">Accent</span>
        <span
          className="h-8 w-8 rounded-full border border-white/30"
          style={{ backgroundColor: themeColor }}
        />
        <span className="text-xs text-white/60">
          {isLoading ? "Refreshing…" : `Updated ${timeAgo(generatedAt)}`}
        </span>
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

  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm font-medium text-white/60">{label}</p>
      <p className="text-3xl font-semibold">{isLoading ? <span className="animate-pulse text-white/40">—</span> : value}</p>
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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Agent roster</h2>
          <p className="text-sm text-white/60">Live status across DevOpsGPT, Incident Commander, and support surfaces.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {agents.map((agent) => (
          <div key={agent.name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium">{agent.name}</p>
                <p className="text-xs uppercase tracking-wide text-white/50">{agent.focus}</p>
              </div>
              <StatusPill status={agent.status} />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-white/60">
              <span>{agent.tasks} active tasks</span>
              <span>{isLoading ? "—" : `Last heartbeat ${agent.heartbeat}`}</span>
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
        {state.proverbs?.map((entry, index) => (
          <div key={index} className="relative rounded-xl border border-white/10 bg-white/5 p-4 pr-10 text-sm text-white/80">
            {entry}
            <button
              onClick={() => {
                setState({
                  ...state,
                  proverbs: state.proverbs?.filter((_, i) => i !== index) ?? [],
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
      <h2 className="text-xl font-semibold">Incident timeline</h2>
      <p className="text-sm text-white/60">Latest triage and remediation updates across environments.</p>
      <div className="mt-5 flex flex-col gap-4">
        {incidents.map((incident) => (
          <div key={incident.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/50">
              <span>{incident.id}</span>
              <SeverityPill severity={incident.severity} />
            </div>
            <p className="mt-2 text-lg font-medium">{incident.service}</p>
            <p className="text-sm text-white/70">{incident.summary}</p>
            <p className="mt-3 text-xs text-white/50">{isLoading ? "Updating…" : `Updated ${incident.timestamp}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionQueue({ items, isLoading }: { items: ActionQueueItem[]; isLoading: boolean }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">Action queue</h2>
      <p className="text-sm text-white/60">Commands waiting on human approval or currently executing.</p>
      <div className="mt-5 flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-white/50">{item.id}</p>
                <p className="mt-1 text-base font-semibold">{item.label}</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <ActionStatusBadge status={item.status} />
                <RiskBadge risk={item.risk} />
              </div>
            </div>
            <p className="mt-2 text-sm text-white/60">Owner: {item.owner}</p>
            {item.relatedJobId ? (
              <p className="mt-1 text-xs text-white/40">Linked job: {item.relatedJobId}</p>
            ) : null}
            {isLoading ? <p className="mt-2 text-xs text-white/40">Synchronizing…</p> : null}
          </div>
        ))}
      </div>
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
  const label = status === "awaiting" ? "Awaiting approval" : status === "approved" ? "Approved" : "Running";
  const variant =
    status === "awaiting"
      ? "bg-sky-400/20 text-sky-200"
      : status === "approved"
      ? "bg-emerald-400/20 text-emerald-200"
      : "bg-indigo-400/20 text-indigo-200";

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
