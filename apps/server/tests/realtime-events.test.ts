import test from "node:test";
import assert from "node:assert/strict";
test("SSE stream emits agent activity events", async (t) => {
  process.env.NODE_ENV = "test";
  process.env.SENTINELOPS_SKIP_DB = "1";
  process.env.SENTINELOPS_SEED_DATA = "false";

  const { createServer } = await import("../src/server");
  const { eventBus } = await import("../src/events");

  const app = createServer();
  await app.listen({ host: "127.0.0.1", port: 0 });

  t.teardown(async () => {
    await app.close();
  });

  const address = app.server.address();
  assert.ok(address && typeof address === "object", "server did not bind to a port");
  const port = address.port;
  const controller = new AbortController();
  t.teardown(() => {
    controller.abort();
  });

  const response = await fetch(`http://127.0.0.1:${port}/v1/events/stream`, {
    headers: { Accept: "text/event-stream" },
    signal: controller.signal,
  });

  assert.equal(response.status, 200);
  assert.ok(response.body, "expected response body for SSE stream");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  const expectMatch = async (pattern: RegExp) => {
    while (!pattern.test(buffer)) {
      const { value, done } = await reader.read();
      assert.ok(!done, "SSE stream ended before expected data arrived");
      buffer += decoder.decode(value, { stream: true });
    }
  };

  await expectMatch(/"type":"connected"/);

  const payload = {
    agentName: "TestAgent",
    activity: "Emitting test event",
    status: "started" as const,
    timestamp: new Date().toISOString(),
  };

  eventBus.broadcastAgentActivity(payload);
  await expectMatch(/"agentName":"TestAgent"/);

  controller.abort();
  try {
    await reader.cancel();
  } catch {
    // ignore cancellation errors
  }
});
