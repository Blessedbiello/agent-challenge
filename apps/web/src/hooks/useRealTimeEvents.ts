import { useEffect, useRef, useState, useCallback } from "react";

export type AgentActivity = {
  agentName: string;
  activity: string;
  status: "started" | "in_progress" | "completed" | "failed";
  timestamp: string;
  metadata?: Record<string, unknown>;
};

export type IncidentEvent = {
  type: "alert_created" | "alert_acked" | "alert_resolved" | "action_created" | "action_approved" | "action_rejected";
  incidentId: string;
  data: unknown;
  timestamp: string;
};

export type RealTimeMessage =
  | { type: "connected"; timestamp: string; message: string }
  | { type: "agent:activity"; data: AgentActivity; timestamp: string }
  | { type: "incident:event"; data: IncidentEvent; timestamp: string };

export function useRealTimeEvents(serverUrl: string) {
  const [activities, setActivities] = useState<AgentActivity[]>([]);
  const [incidents, setIncidents] = useState<IncidentEvent[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef(true);

  const connect = useCallback(() => {
    if (eventSourceRef.current?.readyState === EventSource.OPEN) {
      return; // Already connected
    }

    const sseUrl = serverUrl + "/v1/events/stream";

    try {
      const eventSource = new EventSource(sseUrl);

      eventSource.onopen = () => {
        if (mountedRef.current) {
          setIsConnected(true);
          console.log("[SSE] Connected to SentinelOps");
        }
      };

      eventSource.onmessage = (event) => {
        try {
          const message: RealTimeMessage = JSON.parse(event.data);

          if (message.type === "agent:activity") {
            setActivities((prev) => [message.data, ...prev].slice(0, 50)); // Keep last 50
          } else if (message.type === "incident:event") {
            setIncidents((prev) => [message.data, ...prev].slice(0, 50));
          }
        } catch (error) {
          console.error("[SSE] Failed to parse message:", error);
        }
      };

      eventSource.onerror = (error) => {
        console.error("[SSE] Error:", error);
        if (mountedRef.current) {
          setIsConnected(false);
          eventSourceRef.current?.close();
          eventSourceRef.current = null;

          // Attempt to reconnect after 3 seconds
          reconnectTimeoutRef.current = setTimeout(() => {
            if (mountedRef.current) {
              console.log("[SSE] Reconnecting...");
              connect();
            }
          }, 3000);
        }
      };

      eventSourceRef.current = eventSource;
    } catch (error) {
      console.error("[SSE] Connection failed:", error);
    }
  }, [serverUrl]);

  const clearActivity = useCallback((timestamp: string) => {
    setActivities((prev) => prev.filter((a) => a.timestamp !== timestamp));
  }, []);

  const clearAllActivities = useCallback(() => {
    setActivities([]);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    connect();

    return () => {
      mountedRef.current = false;

      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }

      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [connect]);

  return {
    activities,
    incidents,
    isConnected,
    clearActivity,
    clearAllActivities,
  };
}
