import { randomUUID } from "node:crypto";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

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

const postmortemStore = new Map<string, PostmortemRecord>();

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

export function createPostmortem(input: z.infer<typeof CreatePostmortemInputSchema>): PostmortemRecord {
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

  postmortemStore.set(record.id, record);

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
  const record = postmortemStore.get(input.postmortemId);
  if (!record) {
    throw new Error(`Postmortem ${input.postmortemId} not found`);
  }

  if (record.status === "PUBLISHED") {
    return record;
  }

  const now = new Date().toISOString();
  const updated: PostmortemRecord = {
    ...record,
    status: "PUBLISHED",
    updatedAt: now,
    publishedAt: now,
    publishedBy: input.publishedBy,
  };

  postmortemStore.set(updated.id, updated);

  return updated;
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
    let records = Array.from(postmortemStore.values());

    if (context.service) {
      records = records.filter((record) => record.service === context.service);
    }

    if (context.status) {
      records = records.filter((record) => record.status === context.status);
    }

    records.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

    return {
      count: records.length,
      postmortems: records,
    };
  },
});

export function listPostmortems(): PostmortemRecord[] {
  return Array.from(postmortemStore.values());
}

export function getPostmortem(id: string): PostmortemRecord | undefined {
  return postmortemStore.get(id);
}

export function clearPostmortems() {
  postmortemStore.clear();
}
