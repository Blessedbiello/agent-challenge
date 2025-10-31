"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPostmortemsTool = exports.publishPostmortemTool = exports.createPostmortemTool = exports.PublishPostmortemInputSchema = exports.CreatePostmortemInputSchema = void 0;
exports.createPostmortem = createPostmortem;
exports.publishPostmortem = publishPostmortem;
exports.listPostmortems = listPostmortems;
exports.getPostmortem = getPostmortem;
exports.clearPostmortems = clearPostmortems;
const node_crypto_1 = require("node:crypto");
const tools_1 = require("@mastra/core/tools");
const zod_1 = require("zod");
const persistence_1 = require("@sentinelops/persistence");
const PostmortemRecordSchema = zod_1.z.object({
    id: zod_1.z.string(),
    incidentId: zod_1.z.string(),
    service: zod_1.z.string(),
    draftText: zod_1.z.string(),
    attachments: zod_1.z.array(zod_1.z.string()),
    authors: zod_1.z.array(zod_1.z.string()),
    status: zod_1.z.enum(["DRAFT", "PUBLISHED"]),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    publishedAt: zod_1.z.string().optional(),
    publishedBy: zod_1.z.string().optional(),
});
exports.CreatePostmortemInputSchema = zod_1.z.object({
    incidentId: zod_1.z.string().min(1),
    service: zod_1.z.string().min(1),
    draftText: zod_1.z.string().min(1),
    attachments: zod_1.z.array(zod_1.z.string()).default([]),
    authors: zod_1.z.array(zod_1.z.string()).default([]),
});
exports.PublishPostmortemInputSchema = zod_1.z.object({
    postmortemId: zod_1.z.string().min(1),
    publishedBy: zod_1.z.string().optional(),
});
const ListPostmortemInputSchema = zod_1.z.object({
    service: zod_1.z.string().optional(),
    status: zod_1.z.enum(["DRAFT", "PUBLISHED"]).optional(),
});
function deserializePostmortem(row) {
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
function createPostmortem(input) {
    const db = (0, persistence_1.getDb)();
    const now = new Date().toISOString();
    const record = {
        id: (0, node_crypto_1.randomUUID)(),
        incidentId: input.incidentId,
        service: input.service,
        draftText: input.draftText,
        attachments: input.attachments ?? [],
        authors: input.authors ?? [],
        status: "DRAFT",
        createdAt: now,
        updatedAt: now,
    };
    db.prepare(`INSERT INTO postmortems (id, incident_id, service, draft_text, attachments, authors, status, created_at, updated_at, published_at, published_by)
     VALUES (@id, @incidentId, @service, @draftText, @attachments, @authors, @status, @createdAt, @updatedAt, NULL, NULL)`).run({
        ...record,
        attachments: JSON.stringify(record.attachments),
        authors: JSON.stringify(record.authors),
    });
    return record;
}
exports.createPostmortemTool = (0, tools_1.createTool)({
    id: "postmortem.create",
    description: "Create a draft postmortem for an incident",
    inputSchema: exports.CreatePostmortemInputSchema,
    outputSchema: PostmortemRecordSchema,
    execute: async ({ context }) => {
        return createPostmortem(context);
    },
});
function publishPostmortem(input) {
    const db = (0, persistence_1.getDb)();
    const row = db.prepare(`SELECT * FROM postmortems WHERE id = ?`).get(input.postmortemId);
    if (!row) {
        throw new Error(`Postmortem ${input.postmortemId} not found`);
    }
    if (row.status === "PUBLISHED") {
        return deserializePostmortem(row);
    }
    const now = new Date().toISOString();
    db.prepare(`UPDATE postmortems
     SET status = 'PUBLISHED', updated_at = ?, published_at = ?, published_by = ?
     WHERE id = ?`).run(now, now, input.publishedBy ?? null, input.postmortemId);
    const updated = db.prepare(`SELECT * FROM postmortems WHERE id = ?`).get(input.postmortemId);
    return deserializePostmortem(updated);
}
exports.publishPostmortemTool = (0, tools_1.createTool)({
    id: "postmortem.publish",
    description: "Publish a postmortem draft",
    inputSchema: exports.PublishPostmortemInputSchema,
    outputSchema: PostmortemRecordSchema,
    execute: async ({ context }) => {
        return publishPostmortem(context);
    },
});
exports.listPostmortemsTool = (0, tools_1.createTool)({
    id: "postmortem.list",
    description: "List postmortems by service or status",
    inputSchema: ListPostmortemInputSchema,
    outputSchema: zod_1.z.object({
        count: zod_1.z.number(),
        postmortems: zod_1.z.array(PostmortemRecordSchema),
    }),
    execute: async ({ context }) => {
        const db = (0, persistence_1.getDb)();
        const conditions = [];
        const params = [];
        if (context.service) {
            conditions.push("service = ?");
            params.push(context.service);
        }
        if (context.status) {
            conditions.push("status = ?");
            params.push(context.status);
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
function listPostmortems() {
    const db = (0, persistence_1.getDb)();
    const rows = db.prepare(`SELECT * FROM postmortems ORDER BY created_at DESC`).all();
    return rows.map(deserializePostmortem);
}
function getPostmortem(id) {
    const db = (0, persistence_1.getDb)();
    const row = db.prepare(`SELECT * FROM postmortems WHERE id = ?`).get(id);
    return row ? deserializePostmortem(row) : undefined;
}
function clearPostmortems() {
    const db = (0, persistence_1.getDb)();
    db.prepare(`DELETE FROM postmortems`).run();
}
//# sourceMappingURL=postmortems.js.map