"use client";

import type { AgentActivity } from "../hooks/useRealTimeEvents";

type AgentActivityFeedProps = {
  activities: AgentActivity[];
  isConnected: boolean;
  onClear?: () => void;
};

export function AgentActivityFeed({ activities, isConnected, onClear }: AgentActivityFeedProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Agent Activity Stream</h2>
          <p className="text-sm text-white/60">Live feed of agent operations and reasoning</p>
        </div>
        <div className="flex items-center gap-3">
          {isConnected ? (
            <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-200">Live</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-medium text-amber-200">Connecting...</span>
            </div>
          )}
          {activities.length > 0 && onClear && (
            <button
              onClick={onClear}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 transition hover:bg-white/20"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 flex max-h-[400px] flex-col gap-3 overflow-y-auto">
        {activities.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
            <p className="text-sm text-white/50">Waiting for agent activity...</p>
            <p className="mt-1 text-xs text-white/40">
              {isConnected ? "Connected to real-time stream" : "Establishing connection..."}
            </p>
          </div>
        ) : (
          activities.map((activity, index) => (
            <ActivityCard key={`${activity.timestamp}-${index}`} activity={activity} />
          ))
        )}
      </div>
    </div>
  );
}

function ActivityCard({ activity }: { activity: AgentActivity }) {
  const statusConfig = {
    started: { color: "bg-sky-500/20 text-sky-200", label: "Started" },
    in_progress: { color: "bg-indigo-500/20 text-indigo-200", label: "In Progress" },
    completed: { color: "bg-emerald-500/20 text-emerald-200", label: "Completed" },
    failed: { color: "bg-rose-500/20 text-rose-200", label: "Failed" },
  };

  const config = statusConfig[activity.status];
  const timeAgo = getTimeAgo(activity.timestamp);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-white/20">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-white">{activity.agentName}</p>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${config.color}`}>
              {config.label}
            </span>
          </div>
          <p className="mt-1 text-sm text-white/80">{activity.activity}</p>
          {activity.metadata && Object.keys(activity.metadata).length > 0 && (
            <div className="mt-2 rounded-lg bg-white/5 p-2">
              <p className="text-xs font-medium text-white/50">Context</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {Object.entries(activity.metadata).map(([key, value]) => (
                  <span key={key} className="rounded bg-white/10 px-2 py-0.5 text-xs text-white/70">
                    {key}: {String(value)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <span className="text-xs text-white/40">{timeAgo}</span>
      </div>
    </div>
  );
}

function getTimeAgo(isoTimestamp: string): string {
  const diffMs = Date.now() - new Date(isoTimestamp).getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

  if (diffSeconds < 5) return "just now";
  if (diffSeconds < 60) return `${diffSeconds}s ago`;

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  return `${diffHours}h ago`;
}
