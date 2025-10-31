import { z } from "zod";
export type DeployStatus = "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
export type DeployJob = {
    id: string;
    service: string;
    status: DeployStatus;
    createdAt: string;
    updatedAt: string;
    spec: DeploySpec;
    type: "DEPLOY" | "ROLLBACK";
    parentJobId?: string;
    outcome?: string;
};
export declare const DeploySpecSchema: z.ZodObject<{
    service: z.ZodString;
    image: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
    command: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    env: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    service: string;
    image: string;
    version: string;
    command: string[];
    env: Record<string, string>;
    metadata?: Record<string, any> | undefined;
}, {
    service: string;
    image: string;
    metadata?: Record<string, any> | undefined;
    version?: string | undefined;
    command?: string[] | undefined;
    env?: Record<string, string> | undefined;
}>;
export type DeploySpec = z.infer<typeof DeploySpecSchema>;
export declare function createDeployJob(spec: DeploySpec, overrides?: Partial<DeployJob>): DeployJob;
export declare function createRollbackJob(target: DeployJob | undefined, releaseId: string, overrides?: Partial<DeployJob>): DeployJob;
export declare const startDeployTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    spec: z.ZodObject<{
        service: z.ZodString;
        image: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
        command: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        env: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        service: string;
        image: string;
        version: string;
        command: string[];
        env: Record<string, string>;
        metadata?: Record<string, any> | undefined;
    }, {
        service: string;
        image: string;
        metadata?: Record<string, any> | undefined;
        version?: string | undefined;
        command?: string[] | undefined;
        env?: Record<string, string> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    spec: {
        service: string;
        image: string;
        version: string;
        command: string[];
        env: Record<string, string>;
        metadata?: Record<string, any> | undefined;
    };
}, {
    spec: {
        service: string;
        image: string;
        metadata?: Record<string, any> | undefined;
        version?: string | undefined;
        command?: string[] | undefined;
        env?: Record<string, string> | undefined;
    };
}>, z.ZodType<DeployJob, z.ZodTypeDef, DeployJob>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    spec: z.ZodObject<{
        service: z.ZodString;
        image: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
        command: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        env: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        service: string;
        image: string;
        version: string;
        command: string[];
        env: Record<string, string>;
        metadata?: Record<string, any> | undefined;
    }, {
        service: string;
        image: string;
        metadata?: Record<string, any> | undefined;
        version?: string | undefined;
        command?: string[] | undefined;
        env?: Record<string, string> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    spec: {
        service: string;
        image: string;
        version: string;
        command: string[];
        env: Record<string, string>;
        metadata?: Record<string, any> | undefined;
    };
}, {
    spec: {
        service: string;
        image: string;
        metadata?: Record<string, any> | undefined;
        version?: string | undefined;
        command?: string[] | undefined;
        env?: Record<string, string> | undefined;
    };
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        spec: z.ZodObject<{
            service: z.ZodString;
            image: z.ZodString;
            version: z.ZodDefault<z.ZodString>;
            command: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            env: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        }, {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        spec: {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        };
    }, {
        spec: {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        };
    }>;
    outputSchema: z.ZodType<DeployJob, z.ZodTypeDef, DeployJob>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        spec: z.ZodObject<{
            service: z.ZodString;
            image: z.ZodString;
            version: z.ZodDefault<z.ZodString>;
            command: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            env: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        }, {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        spec: {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        };
    }, {
        spec: {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        };
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const rollbackDeployTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    target: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    target: string;
    reason?: string | undefined;
}, {
    target: string;
    reason?: string | undefined;
}>, z.ZodType<DeployJob, z.ZodTypeDef, DeployJob>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    target: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    target: string;
    reason?: string | undefined;
}, {
    target: string;
    reason?: string | undefined;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        target: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        target: string;
        reason?: string | undefined;
    }, {
        target: string;
        reason?: string | undefined;
    }>;
    outputSchema: z.ZodType<DeployJob, z.ZodTypeDef, DeployJob>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        target: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        target: string;
        reason?: string | undefined;
    }, {
        target: string;
        reason?: string | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const getJobStatusTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    jobId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jobId: string;
}, {
    jobId: string;
}>, z.ZodType<DeployJob, z.ZodTypeDef, DeployJob>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    jobId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jobId: string;
}, {
    jobId: string;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        jobId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        jobId: string;
    }, {
        jobId: string;
    }>;
    outputSchema: z.ZodType<DeployJob, z.ZodTypeDef, DeployJob>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        jobId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        jobId: string;
    }, {
        jobId: string;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    service: z.ZodOptional<z.ZodString>;
    since: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    service?: string | undefined;
    since?: string | undefined;
}, {
    service?: string | undefined;
    since?: string | undefined;
}>, z.ZodObject<{
    count: z.ZodNumber;
    jobs: z.ZodArray<z.ZodType<DeployJob, z.ZodTypeDef, DeployJob>, "many">;
}, "strip", z.ZodTypeAny, {
    count: number;
    jobs: DeployJob[];
}, {
    count: number;
    jobs: DeployJob[];
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    service: z.ZodOptional<z.ZodString>;
    since: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    service?: string | undefined;
    since?: string | undefined;
}, {
    service?: string | undefined;
    since?: string | undefined;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        service: z.ZodOptional<z.ZodString>;
        since: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        service?: string | undefined;
        since?: string | undefined;
    }, {
        service?: string | undefined;
        since?: string | undefined;
    }>;
    outputSchema: z.ZodObject<{
        count: z.ZodNumber;
        jobs: z.ZodArray<z.ZodType<DeployJob, z.ZodTypeDef, DeployJob>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        jobs: DeployJob[];
    }, {
        count: number;
        jobs: DeployJob[];
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        service: z.ZodOptional<z.ZodString>;
        since: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        service?: string | undefined;
        since?: string | undefined;
    }, {
        service?: string | undefined;
        since?: string | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function upsertJob(job: DeployJob): void;
export declare function listJobs(): DeployJob[];
export declare function clearJobs(): void;
