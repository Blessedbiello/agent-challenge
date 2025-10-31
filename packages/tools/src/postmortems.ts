import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { getDb } from "@sentinelops/persistence";

export type PostmortemStatus = "DRAFT" | "PUBLISHED";

export type PostmortemRecord = {
  id: string;
  incidentId: string;
  service: string;
  draftText: string;
  attachments: string[];
  authors: string[];
  status: PostmortemStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  publishedBy?: string;
};

const PostmortemRecordSchema: z.ZodType<PostmortemRecord> = z.object({
  id: z.string(),
  incidentId: z.string(),
  service: z.string(),
  draftText: z.string(),
  attachments: z.array(z.string()),
  authors: z.array(z.string()),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().optional(),
  publishedBy: z.string().optional(),
});

export const CreatePostmortemInputSchema = z.object({
  incidentId: z.string().min(1),
  service: z.string().min(1),
  draftText: z.string().min(1),
  attachments: z.array(z.string()).default([]),
  authors: z.array(z.string()).default([]),
});

export const PublishPostmortemInputSchema = z.object({
  postmortemId: z.string().min(1),
  publishedBy: z.string().optional(),
});

const ListPostmortemInputSchema = z.object({
  service: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
});

function deserializePostmortem(row: any): PostmortemRecord {
  return {
    id: row.id,
    incidentId: row.incident_id,
    service: row.service,
    draftText: row.draft_text,
    attachments: row.attachments ? JSON.parse(row.attachments) : [],
    authors: row.authors ? JSON.parse(row.authors) : [],
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at ?? undefined,
    publishedBy: row.published_by ?? undefined,
  };
}

export function createPostmortem(input: z.infer<typeof CreatePostmortemInputSchema>): PostmortemRecord {
  const db = getDb();
  const now = new Date().toISOString();
  const record: PostmortemRecord = {
    id: randomUUID(),
    incidentId: input.incidentId,
    service: input.service,
    draftText: input.draftText,
    attachments: input.attachments ?? [],
    authors: input.authors ?? [],
    status: "DRAFT",
    createdAt: now,
    updatedAt: now,
  };

  db.prepare(
    `INSERT INTO postmortems (id, incident_id, service, draft_text, attachments, authors, status, created_at, updated_at, published_at, published_by)
     VALUES (@id, @incidentId, @service, @draftText, @attachments, @authors, @status, @createdAt, @updatedAt, NULL, NULL)`
  ).run({
    ...record,
    attachments: JSON.stringify(record.attachments),
    authors: JSON.stringify(record.authors),
  });

  return record;
}

export const createPostmortemTool = createTool({
  id: "postmortem.create",
  description: "Create a draft postmortem for an incident",
  inputSchema: CreatePostmortemInputSchema,
  outputSchema: PostmortemRecordSchema,
  execute: async ({ context }) => {
    return createPostmortem(context);
  },
});

export function publishPostmortem(input: z.infer<typeof PublishPostmortemInputSchema>): PostmortemRecord {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM postmortems WHERE id = ?`).get(input.postmortemId) as any;

  if (!row) {
    throw new Error(`Postmortem ${input.postmortemId} not found`);
  }

  if (row.status === "PUBLISHED") {
    return deserializePostmortem(row);
  }

  const now = new Date().toISOString();
  db.prepare(
    `UPDATE postmortems
     SET status = 'PUBLISHED', updated_at = ?, published_at = ?, published_by = ?
     WHERE id = ?`
  ).run(now, now, input.publishedBy ?? null, input.postmortemId);

  const updated = db.prepare(`SELECT * FROM postmortems WHERE id = ?`).get(input.postmortemId) as any;
  return deserializePostmortem(updated);
}

export const publishPostmortemTool = createTool({
  id: "postmortem.publish",
  description: "Publish a postmortem draft",
  inputSchema: PublishPostmortemInputSchema,
  outputSchema: PostmortemRecordSchema,
  execute: async ({ context }) => {
    return publishPostmortem(context);
  },
});

export const listPostmortemsTool = createTool({
  id: "postmortem.list",
  description: "List postmortems by service or status",
  inputSchema: ListPostmortemInputSchema,
  outputSchema: z.object({
    count: z.number(),
    postmortems: z.array(PostmortemRecordSchema),
  }),
  execute: async ({ context }) => {
    const input = context as z.infer<typeof ListPostmortemInputSchema>;
    const db = getDb();
    const conditions: string[] = [];
    const params: any[] = [];

    if (input.service) {
      conditions.push("service = ?");
      params.push(input.service);
    }

    if (input.status) {
      conditions.push("status = ?");
      params.push(input.status);
    }

    const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
    const rows = db
      .prepare(`SELECT * FROM postmortems ${whereClause} ORDER BY created_at DESC`)
      .all(...params);

    const postmortems = rows.map(deserializePostmortem);

    return {
      count: postmortems.length,
      postmortems,
    };
  },
});

export function listPostmortems(): PostmortemRecord[] {
  const db = getDb();
  const rows = db.prepare(`SELECT * FROM postmortems ORDER BY created_at DESC`).all();
  return rows.map(deserializePostmortem);
}

export function getPostmortem(id: string): PostmortemRecord | undefined {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM postmortems WHERE id = ?`).get(id);
  return row ? deserializePostmortem(row) : undefined;
}

export function clearPostmortems() {
  const db = getDb();
  db.prepare(`DELETE FROM postmortems`).run();
}
