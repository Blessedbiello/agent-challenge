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
export declare const CreatePostmortemInputSchema: z.ZodObject<{
    incidentId: z.ZodString;
    service: z.ZodString;
    draftText: z.ZodString;
    attachments: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    authors: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    incidentId: string;
    service: string;
    draftText: string;
    attachments: string[];
    authors: string[];
}, {
    incidentId: string;
    service: string;
    draftText: string;
    attachments?: string[] | undefined;
    authors?: string[] | undefined;
}>;
export declare const PublishPostmortemInputSchema: z.ZodObject<{
    postmortemId: z.ZodString;
    publishedBy: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    postmortemId: string;
    publishedBy?: string | undefined;
}, {
    postmortemId: string;
    publishedBy?: string | undefined;
}>;
export declare function createPostmortem(input: z.infer<typeof CreatePostmortemInputSchema>): PostmortemRecord;
export declare const createPostmortemTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    incidentId: z.ZodString;
    service: z.ZodString;
    draftText: z.ZodString;
    attachments: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    authors: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    incidentId: string;
    service: string;
    draftText: string;
    attachments: string[];
    authors: string[];
}, {
    incidentId: string;
    service: string;
    draftText: string;
    attachments?: string[] | undefined;
    authors?: string[] | undefined;
}>, z.ZodType<PostmortemRecord, z.ZodTypeDef, PostmortemRecord>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    incidentId: z.ZodString;
    service: z.ZodString;
    draftText: z.ZodString;
    attachments: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    authors: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    incidentId: string;
    service: string;
    draftText: string;
    attachments: string[];
    authors: string[];
}, {
    incidentId: string;
    service: string;
    draftText: string;
    attachments?: string[] | undefined;
    authors?: string[] | undefined;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        incidentId: z.ZodString;
        service: z.ZodString;
        draftText: z.ZodString;
        attachments: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        authors: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        service: string;
        draftText: string;
        attachments: string[];
        authors: string[];
    }, {
        incidentId: string;
        service: string;
        draftText: string;
        attachments?: string[] | undefined;
        authors?: string[] | undefined;
    }>;
    outputSchema: z.ZodType<PostmortemRecord, z.ZodTypeDef, PostmortemRecord>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        incidentId: z.ZodString;
        service: z.ZodString;
        draftText: z.ZodString;
        attachments: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        authors: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        service: string;
        draftText: string;
        attachments: string[];
        authors: string[];
    }, {
        incidentId: string;
        service: string;
        draftText: string;
        attachments?: string[] | undefined;
        authors?: string[] | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function publishPostmortem(input: z.infer<typeof PublishPostmortemInputSchema>): PostmortemRecord;
export declare const publishPostmortemTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    postmortemId: z.ZodString;
    publishedBy: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    postmortemId: string;
    publishedBy?: string | undefined;
}, {
    postmortemId: string;
    publishedBy?: string | undefined;
}>, z.ZodType<PostmortemRecord, z.ZodTypeDef, PostmortemRecord>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    postmortemId: z.ZodString;
    publishedBy: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    postmortemId: string;
    publishedBy?: string | undefined;
}, {
    postmortemId: string;
    publishedBy?: string | undefined;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        postmortemId: z.ZodString;
        publishedBy: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        postmortemId: string;
        publishedBy?: string | undefined;
    }, {
        postmortemId: string;
        publishedBy?: string | undefined;
    }>;
    outputSchema: z.ZodType<PostmortemRecord, z.ZodTypeDef, PostmortemRecord>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        postmortemId: z.ZodString;
        publishedBy: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        postmortemId: string;
        publishedBy?: string | undefined;
    }, {
        postmortemId: string;
        publishedBy?: string | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    service: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
}, "strip", z.ZodTypeAny, {
    status?: "DRAFT" | "PUBLISHED" | undefined;
    service?: string | undefined;
}, {
    status?: "DRAFT" | "PUBLISHED" | undefined;
    service?: string | undefined;
}>, z.ZodObject<{
    count: z.ZodNumber;
    postmortems: z.ZodArray<z.ZodType<PostmortemRecord, z.ZodTypeDef, PostmortemRecord>, "many">;
}, "strip", z.ZodTypeAny, {
    count: number;
    postmortems: PostmortemRecord[];
}, {
    count: number;
    postmortems: PostmortemRecord[];
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    service: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
}, "strip", z.ZodTypeAny, {
    status?: "DRAFT" | "PUBLISHED" | undefined;
    service?: string | undefined;
}, {
    status?: "DRAFT" | "PUBLISHED" | undefined;
    service?: string | undefined;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        service: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
    }, "strip", z.ZodTypeAny, {
        status?: "DRAFT" | "PUBLISHED" | undefined;
        service?: string | undefined;
    }, {
        status?: "DRAFT" | "PUBLISHED" | undefined;
        service?: string | undefined;
    }>;
    outputSchema: z.ZodObject<{
        count: z.ZodNumber;
        postmortems: z.ZodArray<z.ZodType<PostmortemRecord, z.ZodTypeDef, PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: PostmortemRecord[];
    }, {
        count: number;
        postmortems: PostmortemRecord[];
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        service: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
    }, "strip", z.ZodTypeAny, {
        status?: "DRAFT" | "PUBLISHED" | undefined;
        service?: string | undefined;
    }, {
        status?: "DRAFT" | "PUBLISHED" | undefined;
        service?: string | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function listPostmortems(): PostmortemRecord[];
export declare function getPostmortem(id: string): PostmortemRecord | undefined;
export declare function clearPostmortems(): void;
