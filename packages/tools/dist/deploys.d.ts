import { z } from "zod";
export type DeployStatus = "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
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
export declare const DeployJobSchema: z.ZodObject<{
    id: z.ZodString;
    service: z.ZodString;
    status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
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
    type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
    parentJobId: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "ROLLBACK" | "DEPLOY";
    status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
    id: string;
    createdAt: string;
    updatedAt: string;
    service: string;
    spec: {
        service: string;
        image: string;
        version: string;
        command: string[];
        env: Record<string, string>;
        metadata?: Record<string, any> | undefined;
    };
    parentJobId?: string | undefined;
    outcome?: string | undefined;
}, {
    type: "ROLLBACK" | "DEPLOY";
    status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
    id: string;
    createdAt: string;
    updatedAt: string;
    service: string;
    spec: {
        service: string;
        image: string;
        metadata?: Record<string, any> | undefined;
        version?: string | undefined;
        command?: string[] | undefined;
        env?: Record<string, string> | undefined;
    };
    parentJobId?: string | undefined;
    outcome?: string | undefined;
}>;
export type DeployJob = z.infer<typeof DeployJobSchema>;
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
}>, z.ZodObject<{
    id: z.ZodString;
    service: z.ZodString;
    status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
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
    type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
    parentJobId: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "ROLLBACK" | "DEPLOY";
    status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
    id: string;
    createdAt: string;
    updatedAt: string;
    service: string;
    spec: {
        service: string;
        image: string;
        version: string;
        command: string[];
        env: Record<string, string>;
        metadata?: Record<string, any> | undefined;
    };
    parentJobId?: string | undefined;
    outcome?: string | undefined;
}, {
    type: "ROLLBACK" | "DEPLOY";
    status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
    id: string;
    createdAt: string;
    updatedAt: string;
    service: string;
    spec: {
        service: string;
        image: string;
        metadata?: Record<string, any> | undefined;
        version?: string | undefined;
        command?: string[] | undefined;
        env?: Record<string, string> | undefined;
    };
    parentJobId?: string | undefined;
    outcome?: string | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    outputSchema: z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
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
        type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
        parentJobId: z.ZodOptional<z.ZodString>;
        outcome: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }, {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }>;
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
}>, z.ZodObject<{
    id: z.ZodString;
    service: z.ZodString;
    status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
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
    type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
    parentJobId: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "ROLLBACK" | "DEPLOY";
    status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
    id: string;
    createdAt: string;
    updatedAt: string;
    service: string;
    spec: {
        service: string;
        image: string;
        version: string;
        command: string[];
        env: Record<string, string>;
        metadata?: Record<string, any> | undefined;
    };
    parentJobId?: string | undefined;
    outcome?: string | undefined;
}, {
    type: "ROLLBACK" | "DEPLOY";
    status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
    id: string;
    createdAt: string;
    updatedAt: string;
    service: string;
    spec: {
        service: string;
        image: string;
        metadata?: Record<string, any> | undefined;
        version?: string | undefined;
        command?: string[] | undefined;
        env?: Record<string, string> | undefined;
    };
    parentJobId?: string | undefined;
    outcome?: string | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    outputSchema: z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
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
        type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
        parentJobId: z.ZodOptional<z.ZodString>;
        outcome: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }, {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }>;
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
}>, z.ZodObject<{
    id: z.ZodString;
    service: z.ZodString;
    status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
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
    type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
    parentJobId: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "ROLLBACK" | "DEPLOY";
    status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
    id: string;
    createdAt: string;
    updatedAt: string;
    service: string;
    spec: {
        service: string;
        image: string;
        version: string;
        command: string[];
        env: Record<string, string>;
        metadata?: Record<string, any> | undefined;
    };
    parentJobId?: string | undefined;
    outcome?: string | undefined;
}, {
    type: "ROLLBACK" | "DEPLOY";
    status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
    id: string;
    createdAt: string;
    updatedAt: string;
    service: string;
    spec: {
        service: string;
        image: string;
        metadata?: Record<string, any> | undefined;
        version?: string | undefined;
        command?: string[] | undefined;
        env?: Record<string, string> | undefined;
    };
    parentJobId?: string | undefined;
    outcome?: string | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    outputSchema: z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
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
        type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
        parentJobId: z.ZodOptional<z.ZodString>;
        outcome: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }, {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }>;
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
    jobs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
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
        type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
        parentJobId: z.ZodOptional<z.ZodString>;
        outcome: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }, {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    count: number;
    jobs: {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            version: string;
            command: string[];
            env: Record<string, string>;
            metadata?: Record<string, any> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }[];
}, {
    count: number;
    jobs: {
        type: "ROLLBACK" | "DEPLOY";
        status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        spec: {
            service: string;
            image: string;
            metadata?: Record<string, any> | undefined;
            version?: string | undefined;
            command?: string[] | undefined;
            env?: Record<string, string> | undefined;
        };
        parentJobId?: string | undefined;
        outcome?: string | undefined;
    }[];
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
        jobs: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            status: z.ZodEnum<["PENDING", "RUNNING", "SUCCEEDED", "FAILED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
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
            type: z.ZodEnum<["DEPLOY", "ROLLBACK"]>;
            parentJobId: z.ZodOptional<z.ZodString>;
            outcome: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "ROLLBACK" | "DEPLOY";
            status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            spec: {
                service: string;
                image: string;
                version: string;
                command: string[];
                env: Record<string, string>;
                metadata?: Record<string, any> | undefined;
            };
            parentJobId?: string | undefined;
            outcome?: string | undefined;
        }, {
            type: "ROLLBACK" | "DEPLOY";
            status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            spec: {
                service: string;
                image: string;
                metadata?: Record<string, any> | undefined;
                version?: string | undefined;
                command?: string[] | undefined;
                env?: Record<string, string> | undefined;
            };
            parentJobId?: string | undefined;
            outcome?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        jobs: {
            type: "ROLLBACK" | "DEPLOY";
            status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            spec: {
                service: string;
                image: string;
                version: string;
                command: string[];
                env: Record<string, string>;
                metadata?: Record<string, any> | undefined;
            };
            parentJobId?: string | undefined;
            outcome?: string | undefined;
        }[];
    }, {
        count: number;
        jobs: {
            type: "ROLLBACK" | "DEPLOY";
            status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            spec: {
                service: string;
                image: string;
                metadata?: Record<string, any> | undefined;
                version?: string | undefined;
                command?: string[] | undefined;
                env?: Record<string, string> | undefined;
            };
            parentJobId?: string | undefined;
            outcome?: string | undefined;
        }[];
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
