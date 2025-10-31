import "dotenv/config";
import { Agent } from "@mastra/core/agent";
import { z } from "zod";
export declare const devOpsAgent: Agent<"DevOpsGPT", {
    startDeployTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            since: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            service?: string | undefined;
            since?: string | undefined;
        }, {
            service?: string | undefined;
            since?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    getJobStatusTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            jobId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            jobId: string;
        }, {
            jobId: string;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools").PostmortemRecord[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "DRAFT" | "PUBLISHED" | undefined;
            service?: string | undefined;
        }, {
            status?: "DRAFT" | "PUBLISHED" | undefined;
            service?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    approveIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        actionId: z.ZodString;
        approvedBy: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        approvedBy?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        approvedBy?: string | undefined;
    }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        actionId: z.ZodString;
        approvedBy: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        approvedBy?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        approvedBy?: string | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            actionId: z.ZodString;
            approvedBy: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }>;
        outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            actionId: z.ZodString;
            approvedBy: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    rejectIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        actionId: z.ZodString;
        rejectedBy: z.ZodOptional<z.ZodString>;
        reason: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        rejectedBy?: string | undefined;
        reason?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        rejectedBy?: string | undefined;
        reason?: string | undefined;
    }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        actionId: z.ZodString;
        rejectedBy: z.ZodOptional<z.ZodString>;
        reason: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        rejectedBy?: string | undefined;
        reason?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        rejectedBy?: string | undefined;
        reason?: string | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            actionId: z.ZodString;
            rejectedBy: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }>;
        outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            actionId: z.ZodString;
            rejectedBy: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
}, Record<string, import("@mastra/core").Metric>>;
export declare const incidentCommanderAgent: Agent<"IncidentCommanderAgent", {
    createAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    }, "strip", z.ZodTypeAny, {
        metadata: Record<string, any>;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
    }, {
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        metadata?: Record<string, any> | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        ackedBy: z.ZodOptional<z.ZodString>;
        resolvedBy: z.ZodOptional<z.ZodString>;
        resolution: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    }, "strip", z.ZodTypeAny, {
        metadata: Record<string, any>;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
    }, {
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        metadata?: Record<string, any> | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>;
        outputSchema: z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    ackAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        alertId: z.ZodString;
        user: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        alertId: string;
        user: string;
    }, {
        alertId: string;
        user: string;
    }>, z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        ackedBy: z.ZodOptional<z.ZodString>;
        resolvedBy: z.ZodOptional<z.ZodString>;
        resolution: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        alertId: z.ZodString;
        user: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        alertId: string;
        user: string;
    }, {
        alertId: string;
        user: string;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            alertId: z.ZodString;
            user: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            alertId: string;
            user: string;
        }, {
            alertId: string;
            user: string;
        }>;
        outputSchema: z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            alertId: z.ZodString;
            user: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            alertId: string;
            user: string;
        }, {
            alertId: string;
            user: string;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    resolveAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        alertId: z.ZodString;
        resolution: z.ZodString;
        resolvedBy: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        alertId: string;
        resolution: string;
        resolvedBy?: string | undefined;
    }, {
        alertId: string;
        resolution: string;
        resolvedBy?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        ackedBy: z.ZodOptional<z.ZodString>;
        resolvedBy: z.ZodOptional<z.ZodString>;
        resolution: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        alertId: z.ZodString;
        resolution: z.ZodString;
        resolvedBy: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        alertId: string;
        resolution: string;
        resolvedBy?: string | undefined;
    }, {
        alertId: string;
        resolution: string;
        resolvedBy?: string | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            alertId: z.ZodString;
            resolution: z.ZodString;
            resolvedBy: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            alertId: string;
            resolution: string;
            resolvedBy?: string | undefined;
        }, {
            alertId: string;
            resolution: string;
            resolvedBy?: string | undefined;
        }>;
        outputSchema: z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            alertId: z.ZodString;
            resolution: z.ZodString;
            resolvedBy: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            alertId: string;
            resolution: string;
            resolvedBy?: string | undefined;
        }, {
            alertId: string;
            resolution: string;
            resolvedBy?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        query: z.ZodString;
        timeRange: z.ZodOptional<z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        limit: number;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
    }, {
        query: string;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
        limit?: number | undefined;
    }>, z.ZodObject<{
        count: z.ZodNumber;
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools").LogRecord[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        query: z.ZodString;
        timeRange: z.ZodOptional<z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        limit: number;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
    }, {
        query: string;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
        limit?: number | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>;
        outputSchema: z.ZodObject<{
            count: z.ZodNumber;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    sampleLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        incidentId: z.ZodString;
        ttlSeconds: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        ttlSeconds: number;
    }, {
        incidentId: string;
        ttlSeconds?: number | undefined;
    }>, z.ZodObject<{
        incidentId: z.ZodString;
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        logs: import("@sentinelops/tools").LogRecord[];
        expiresAt: string;
    }, {
        incidentId: string;
        logs: import("@sentinelops/tools").LogRecord[];
        expiresAt: string;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        incidentId: z.ZodString;
        ttlSeconds: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        ttlSeconds: number;
    }, {
        incidentId: string;
        ttlSeconds?: number | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>;
        outputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    rollbackDeployTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            target: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            target: string;
            reason?: string | undefined;
        }, {
            target: string;
            reason?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            since: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            service?: string | undefined;
            since?: string | undefined;
        }, {
            service?: string | undefined;
            since?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    createPostmortemTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    createIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        incidentId: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
        risk: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
        incidentId: string;
        label: string;
        risk: "LOW" | "MEDIUM" | "HIGH";
        metadata?: Record<string, any> | undefined;
    }, {
        type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
        incidentId: string;
        label: string;
        risk: "LOW" | "MEDIUM" | "HIGH";
        metadata?: Record<string, any> | undefined;
    }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        incidentId: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
        risk: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
        incidentId: string;
        label: string;
        risk: "LOW" | "MEDIUM" | "HIGH";
        metadata?: Record<string, any> | undefined;
    }, {
        type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
        incidentId: string;
        label: string;
        risk: "LOW" | "MEDIUM" | "HIGH";
        metadata?: Record<string, any> | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
            risk: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
            incidentId: string;
            label: string;
            risk: "LOW" | "MEDIUM" | "HIGH";
            metadata?: Record<string, any> | undefined;
        }, {
            type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
            incidentId: string;
            label: string;
            risk: "LOW" | "MEDIUM" | "HIGH";
            metadata?: Record<string, any> | undefined;
        }>;
        outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
            risk: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
            incidentId: string;
            label: string;
            risk: "LOW" | "MEDIUM" | "HIGH";
            metadata?: Record<string, any> | undefined;
        }, {
            type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
            incidentId: string;
            label: string;
            risk: "LOW" | "MEDIUM" | "HIGH";
            metadata?: Record<string, any> | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
}, Record<string, import("@mastra/core").Metric>>;
export declare const monitorAgent: Agent<"MonitorAgent", {
    ingestLogTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        incidentId: z.ZodString;
        source: z.ZodDefault<z.ZodString>;
        level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
        message: z.ZodString;
        metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        incidentId: string;
        metadata: Record<string, any>;
        source: string;
        level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
    }, {
        message: string;
        incidentId: string;
        metadata?: Record<string, any> | undefined;
        source?: string | undefined;
        level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
    }>, z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        incidentId: z.ZodString;
        source: z.ZodDefault<z.ZodString>;
        level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
        message: z.ZodString;
        metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        incidentId: string;
        metadata: Record<string, any>;
        source: string;
        level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
    }, {
        message: string;
        incidentId: string;
        metadata?: Record<string, any> | undefined;
        source?: string | undefined;
        level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            source: z.ZodDefault<z.ZodString>;
            level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
            message: z.ZodString;
            metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            incidentId: string;
            metadata: Record<string, any>;
            source: string;
            level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
        }, {
            message: string;
            incidentId: string;
            metadata?: Record<string, any> | undefined;
            source?: string | undefined;
            level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
        }>;
        outputSchema: z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            source: z.ZodDefault<z.ZodString>;
            level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
            message: z.ZodString;
            metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            incidentId: string;
            metadata: Record<string, any>;
            source: string;
            level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
        }, {
            message: string;
            incidentId: string;
            metadata?: Record<string, any> | undefined;
            source?: string | undefined;
            level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    createAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    }, "strip", z.ZodTypeAny, {
        metadata: Record<string, any>;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
    }, {
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        metadata?: Record<string, any> | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        ackedBy: z.ZodOptional<z.ZodString>;
        resolvedBy: z.ZodOptional<z.ZodString>;
        resolution: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    }, "strip", z.ZodTypeAny, {
        metadata: Record<string, any>;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
    }, {
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        metadata?: Record<string, any> | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>;
        outputSchema: z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    subscribeAlertsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        handlerUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        handlerUrl: string;
    }, {
        handlerUrl: string;
    }>, z.ZodObject<{
        success: z.ZodBoolean;
        subscribers: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        success: boolean;
        subscribers: number;
    }, {
        success: boolean;
        subscribers: number;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        handlerUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        handlerUrl: string;
    }, {
        handlerUrl: string;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            handlerUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            handlerUrl: string;
        }, {
            handlerUrl: string;
        }>;
        outputSchema: z.ZodObject<{
            success: z.ZodBoolean;
            subscribers: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            success: boolean;
            subscribers: number;
        }, {
            success: boolean;
            subscribers: number;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            handlerUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            handlerUrl: string;
        }, {
            handlerUrl: string;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            since: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            service?: string | undefined;
            since?: string | undefined;
        }, {
            service?: string | undefined;
            since?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
}, Record<string, import("@mastra/core").Metric>>;
export declare const forensicsAgent: Agent<"ForensicsAgent", {
    createPostmortemTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    publishPostmortemTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        postmortemId: z.ZodString;
        publishedBy: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        postmortemId: string;
        publishedBy?: string | undefined;
    }, {
        postmortemId: string;
        publishedBy?: string | undefined;
    }>, z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            postmortemId: z.ZodString;
            publishedBy: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            postmortemId: string;
            publishedBy?: string | undefined;
        }, {
            postmortemId: string;
            publishedBy?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools").PostmortemRecord[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "DRAFT" | "PUBLISHED" | undefined;
            service?: string | undefined;
        }, {
            status?: "DRAFT" | "PUBLISHED" | undefined;
            service?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    sampleLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        incidentId: z.ZodString;
        ttlSeconds: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        ttlSeconds: number;
    }, {
        incidentId: string;
        ttlSeconds?: number | undefined;
    }>, z.ZodObject<{
        incidentId: z.ZodString;
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        logs: import("@sentinelops/tools").LogRecord[];
        expiresAt: string;
    }, {
        incidentId: string;
        logs: import("@sentinelops/tools").LogRecord[];
        expiresAt: string;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        incidentId: z.ZodString;
        ttlSeconds: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        ttlSeconds: number;
    }, {
        incidentId: string;
        ttlSeconds?: number | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>;
        outputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        query: z.ZodString;
        timeRange: z.ZodOptional<z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        limit: number;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
    }, {
        query: string;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
        limit?: number | undefined;
    }>, z.ZodObject<{
        count: z.ZodNumber;
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools").LogRecord[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        query: z.ZodString;
        timeRange: z.ZodOptional<z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        limit: number;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
    }, {
        query: string;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
        limit?: number | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>;
        outputSchema: z.ZodObject<{
            count: z.ZodNumber;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
}, Record<string, import("@mastra/core").Metric>>;
export declare const humanOpsAgent: Agent<"HumanOpsAgent", {
    listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            since: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            service?: string | undefined;
            since?: string | undefined;
        }, {
            service?: string | undefined;
            since?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools").PostmortemRecord[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "DRAFT" | "PUBLISHED" | undefined;
            service?: string | undefined;
        }, {
            status?: "DRAFT" | "PUBLISHED" | undefined;
            service?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        query: z.ZodString;
        timeRange: z.ZodOptional<z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        limit: number;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
    }, {
        query: string;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
        limit?: number | undefined;
    }>, z.ZodObject<{
        count: z.ZodNumber;
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools").LogRecord[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        query: z.ZodString;
        timeRange: z.ZodOptional<z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        limit: number;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
    }, {
        query: string;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
        limit?: number | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>;
        outputSchema: z.ZodObject<{
            count: z.ZodNumber;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    getJobStatusTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            jobId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            jobId: string;
        }, {
            jobId: string;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    approveIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        actionId: z.ZodString;
        approvedBy: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        approvedBy?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        approvedBy?: string | undefined;
    }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        actionId: z.ZodString;
        approvedBy: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        approvedBy?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        approvedBy?: string | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            actionId: z.ZodString;
            approvedBy: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }>;
        outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            actionId: z.ZodString;
            approvedBy: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    rejectIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        actionId: z.ZodString;
        rejectedBy: z.ZodOptional<z.ZodString>;
        reason: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        rejectedBy?: string | undefined;
        reason?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        rejectedBy?: string | undefined;
        reason?: string | undefined;
    }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        actionId: z.ZodString;
        rejectedBy: z.ZodOptional<z.ZodString>;
        reason: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        rejectedBy?: string | undefined;
        reason?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        rejectedBy?: string | undefined;
        reason?: string | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            actionId: z.ZodString;
            rejectedBy: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }>;
        outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            actionId: z.ZodString;
            rejectedBy: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listStrategiesTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
        strategies: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            focusArea: z.ZodString;
            constraints: z.ZodNullable<z.ZodString>;
            plan: z.ZodString;
            metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }, {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        strategies: {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }[];
    }, {
        strategies: {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>> & {
        inputSchema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        outputSchema: z.ZodObject<{
            strategies: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                focusArea: z.ZodString;
                constraints: z.ZodNullable<z.ZodString>;
                plan: z.ZodString;
                metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            strategies: {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }[];
        }, {
            strategies: {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
}, Record<string, import("@mastra/core").Metric>>;
export declare const discordTriageAgent: Agent<"DiscordTriageAgent", {
    sampleLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        incidentId: z.ZodString;
        ttlSeconds: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        ttlSeconds: number;
    }, {
        incidentId: string;
        ttlSeconds?: number | undefined;
    }>, z.ZodObject<{
        incidentId: z.ZodString;
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        logs: import("@sentinelops/tools").LogRecord[];
        expiresAt: string;
    }, {
        incidentId: string;
        logs: import("@sentinelops/tools").LogRecord[];
        expiresAt: string;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        incidentId: z.ZodString;
        ttlSeconds: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        ttlSeconds: number;
    }, {
        incidentId: string;
        ttlSeconds?: number | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>;
        outputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    createAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    }, "strip", z.ZodTypeAny, {
        metadata: Record<string, any>;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
    }, {
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        metadata?: Record<string, any> | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        ackedBy: z.ZodOptional<z.ZodString>;
        resolvedBy: z.ZodOptional<z.ZodString>;
        resolution: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }, {
        status: "OPEN" | "ACKED" | "RESOLVED";
        metadata: Record<string, any>;
        id: string;
        createdAt: string;
        updatedAt: string;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        resolution?: string | undefined;
        resolvedBy?: string | undefined;
        ackedBy?: string | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        service: z.ZodString;
        severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        summary: z.ZodString;
        metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    }, "strip", z.ZodTypeAny, {
        metadata: Record<string, any>;
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
    }, {
        service: string;
        severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        summary: string;
        metadata?: Record<string, any> | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>;
        outputSchema: z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    ingestLogTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        incidentId: z.ZodString;
        source: z.ZodDefault<z.ZodString>;
        level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
        message: z.ZodString;
        metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        incidentId: string;
        metadata: Record<string, any>;
        source: string;
        level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
    }, {
        message: string;
        incidentId: string;
        metadata?: Record<string, any> | undefined;
        source?: string | undefined;
        level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
    }>, z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        incidentId: z.ZodString;
        source: z.ZodDefault<z.ZodString>;
        level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
        message: z.ZodString;
        metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        incidentId: string;
        metadata: Record<string, any>;
        source: string;
        level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
    }, {
        message: string;
        incidentId: string;
        metadata?: Record<string, any> | undefined;
        source?: string | undefined;
        level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            incidentId: z.ZodString;
            source: z.ZodDefault<z.ZodString>;
            level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
            message: z.ZodString;
            metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            incidentId: string;
            metadata: Record<string, any>;
            source: string;
            level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
        }, {
            message: string;
            incidentId: string;
            metadata?: Record<string, any> | undefined;
            source?: string | undefined;
            level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
        }>;
        outputSchema: z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            source: z.ZodDefault<z.ZodString>;
            level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
            message: z.ZodString;
            metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            incidentId: string;
            metadata: Record<string, any>;
            source: string;
            level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
        }, {
            message: string;
            incidentId: string;
            metadata?: Record<string, any> | undefined;
            source?: string | undefined;
            level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    weatherTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        location: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        location: string;
    }, {
        location: string;
    }>, z.ZodObject<{
        temperature: z.ZodNumber;
        feelsLike: z.ZodNumber;
        humidity: z.ZodNumber;
        windSpeed: z.ZodNumber;
        windGust: z.ZodNumber;
        conditions: z.ZodString;
        location: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        temperature: number;
        feelsLike: number;
        humidity: number;
        windSpeed: number;
        windGust: number;
        conditions: string;
        location: string;
    }, {
        temperature: number;
        feelsLike: number;
        humidity: number;
        windSpeed: number;
        windGust: number;
        conditions: string;
        location: string;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        location: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        location: string;
    }, {
        location: string;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            location: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            location: string;
        }, {
            location: string;
        }>;
        outputSchema: z.ZodObject<{
            temperature: z.ZodNumber;
            feelsLike: z.ZodNumber;
            humidity: z.ZodNumber;
            windSpeed: z.ZodNumber;
            windGust: z.ZodNumber;
            conditions: z.ZodString;
            location: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            temperature: number;
            feelsLike: number;
            humidity: number;
            windSpeed: number;
            windGust: number;
            conditions: string;
            location: string;
        }, {
            temperature: number;
            feelsLike: number;
            humidity: number;
            windSpeed: number;
            windGust: number;
            conditions: string;
            location: string;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            location: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            location: string;
        }, {
            location: string;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
}, Record<string, import("@mastra/core").Metric>>;
export declare const agentBprime: Agent<"AgentBprime", {
    listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            since: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            service?: string | undefined;
            since?: string | undefined;
        }, {
            service?: string | undefined;
            since?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listStrategiesTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
        strategies: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            focusArea: z.ZodString;
            constraints: z.ZodNullable<z.ZodString>;
            plan: z.ZodString;
            metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }, {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        strategies: {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }[];
    }, {
        strategies: {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>> & {
        inputSchema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        outputSchema: z.ZodObject<{
            strategies: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                focusArea: z.ZodString;
                constraints: z.ZodNullable<z.ZodString>;
                plan: z.ZodString;
                metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            strategies: {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }[];
        }, {
            strategies: {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    createStrategyTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        title: z.ZodString;
        focusArea: z.ZodString;
        constraints: z.ZodOptional<z.ZodString>;
        plan: z.ZodString;
        metrics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        focusArea: string;
        plan: string;
        constraints?: string | undefined;
        metrics?: Record<string, any> | undefined;
    }, {
        title: string;
        focusArea: string;
        plan: string;
        constraints?: string | undefined;
        metrics?: Record<string, any> | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        focusArea: z.ZodString;
        constraints: z.ZodNullable<z.ZodString>;
        plan: z.ZodString;
        metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        createdAt: string;
        updatedAt: string;
        title: string;
        focusArea: string;
        constraints: string | null;
        plan: string;
        metrics: Record<string, any> | null;
    }, {
        id: string;
        createdAt: string;
        updatedAt: string;
        title: string;
        focusArea: string;
        constraints: string | null;
        plan: string;
        metrics: Record<string, any> | null;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        title: z.ZodString;
        focusArea: z.ZodString;
        constraints: z.ZodOptional<z.ZodString>;
        plan: z.ZodString;
        metrics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        focusArea: string;
        plan: string;
        constraints?: string | undefined;
        metrics?: Record<string, any> | undefined;
    }, {
        title: string;
        focusArea: string;
        plan: string;
        constraints?: string | undefined;
        metrics?: Record<string, any> | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            title: z.ZodString;
            focusArea: z.ZodString;
            constraints: z.ZodOptional<z.ZodString>;
            plan: z.ZodString;
            metrics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            focusArea: string;
            plan: string;
            constraints?: string | undefined;
            metrics?: Record<string, any> | undefined;
        }, {
            title: string;
            focusArea: string;
            plan: string;
            constraints?: string | undefined;
            metrics?: Record<string, any> | undefined;
        }>;
        outputSchema: z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            focusArea: z.ZodString;
            constraints: z.ZodNullable<z.ZodString>;
            plan: z.ZodString;
            metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }, {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            title: z.ZodString;
            focusArea: z.ZodString;
            constraints: z.ZodOptional<z.ZodString>;
            plan: z.ZodString;
            metrics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            focusArea: string;
            plan: string;
            constraints?: string | undefined;
            metrics?: Record<string, any> | undefined;
        }, {
            title: string;
            focusArea: string;
            plan: string;
            constraints?: string | undefined;
            metrics?: Record<string, any> | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools").PostmortemRecord[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "DRAFT" | "PUBLISHED" | undefined;
            service?: string | undefined;
        }, {
            status?: "DRAFT" | "PUBLISHED" | undefined;
            service?: string | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        query: z.ZodString;
        timeRange: z.ZodOptional<z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        limit: number;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
    }, {
        query: string;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
        limit?: number | undefined;
    }>, z.ZodObject<{
        count: z.ZodNumber;
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools").LogRecord[];
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        query: z.ZodString;
        timeRange: z.ZodOptional<z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        limit: number;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
    }, {
        query: string;
        timeRange?: {
            from?: string | undefined;
            to?: string | undefined;
        } | undefined;
        limit?: number | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>;
        outputSchema: z.ZodObject<{
            count: z.ZodNumber;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
}, Record<string, import("@mastra/core").Metric>>;
export declare const agentsRegistry: {
    readonly devOpsAgent: Agent<"DevOpsGPT", {
        startDeployTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                since: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                service?: string | undefined;
                since?: string | undefined;
            }, {
                service?: string | undefined;
                since?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        getJobStatusTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                jobId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                jobId: string;
            }, {
                jobId: string;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools").PostmortemRecord[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
            }, "strip", z.ZodTypeAny, {
                status?: "DRAFT" | "PUBLISHED" | undefined;
                service?: string | undefined;
            }, {
                status?: "DRAFT" | "PUBLISHED" | undefined;
                service?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        approveIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            actionId: z.ZodString;
            approvedBy: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            actionId: z.ZodString;
            approvedBy: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                actionId: z.ZodString;
                approvedBy: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                approvedBy?: string | undefined;
            }, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                approvedBy?: string | undefined;
            }>;
            outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                actionId: z.ZodString;
                approvedBy: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                approvedBy?: string | undefined;
            }, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                approvedBy?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        rejectIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            actionId: z.ZodString;
            rejectedBy: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            actionId: z.ZodString;
            rejectedBy: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                actionId: z.ZodString;
                rejectedBy: z.ZodOptional<z.ZodString>;
                reason: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                rejectedBy?: string | undefined;
                reason?: string | undefined;
            }, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                rejectedBy?: string | undefined;
                reason?: string | undefined;
            }>;
            outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                actionId: z.ZodString;
                rejectedBy: z.ZodOptional<z.ZodString>;
                reason: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                rejectedBy?: string | undefined;
                reason?: string | undefined;
            }, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                rejectedBy?: string | undefined;
                reason?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
    }, Record<string, import("@mastra/core").Metric>>;
    readonly incidentCommanderAgent: Agent<"IncidentCommanderAgent", {
        createAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
            }, "strip", z.ZodTypeAny, {
                metadata: Record<string, any>;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
            }, {
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                metadata?: Record<string, any> | undefined;
            }>;
            outputSchema: z.ZodObject<{
                id: z.ZodString;
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
                status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
                ackedBy: z.ZodOptional<z.ZodString>;
                resolvedBy: z.ZodOptional<z.ZodString>;
                resolution: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
            }, "strip", z.ZodTypeAny, {
                metadata: Record<string, any>;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
            }, {
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                metadata?: Record<string, any> | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        ackAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            alertId: z.ZodString;
            user: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            alertId: string;
            user: string;
        }, {
            alertId: string;
            user: string;
        }>, z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            alertId: z.ZodString;
            user: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            alertId: string;
            user: string;
        }, {
            alertId: string;
            user: string;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                alertId: z.ZodString;
                user: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                alertId: string;
                user: string;
            }, {
                alertId: string;
                user: string;
            }>;
            outputSchema: z.ZodObject<{
                id: z.ZodString;
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
                status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
                ackedBy: z.ZodOptional<z.ZodString>;
                resolvedBy: z.ZodOptional<z.ZodString>;
                resolution: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                alertId: z.ZodString;
                user: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                alertId: string;
                user: string;
            }, {
                alertId: string;
                user: string;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        resolveAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            alertId: z.ZodString;
            resolution: z.ZodString;
            resolvedBy: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            alertId: string;
            resolution: string;
            resolvedBy?: string | undefined;
        }, {
            alertId: string;
            resolution: string;
            resolvedBy?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            alertId: z.ZodString;
            resolution: z.ZodString;
            resolvedBy: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            alertId: string;
            resolution: string;
            resolvedBy?: string | undefined;
        }, {
            alertId: string;
            resolution: string;
            resolvedBy?: string | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                alertId: z.ZodString;
                resolution: z.ZodString;
                resolvedBy: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                alertId: string;
                resolution: string;
                resolvedBy?: string | undefined;
            }, {
                alertId: string;
                resolution: string;
                resolvedBy?: string | undefined;
            }>;
            outputSchema: z.ZodObject<{
                id: z.ZodString;
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
                status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
                ackedBy: z.ZodOptional<z.ZodString>;
                resolvedBy: z.ZodOptional<z.ZodString>;
                resolution: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                alertId: z.ZodString;
                resolution: z.ZodString;
                resolvedBy: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                alertId: string;
                resolution: string;
                resolvedBy?: string | undefined;
            }, {
                alertId: string;
                resolution: string;
                resolvedBy?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, z.ZodObject<{
            count: z.ZodNumber;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                query: z.ZodString;
                timeRange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                query: string;
                limit: number;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                query: string;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            }>;
            outputSchema: z.ZodObject<{
                count: z.ZodNumber;
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools").LogRecord[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                query: z.ZodString;
                timeRange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                query: string;
                limit: number;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                query: string;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        sampleLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, z.ZodObject<{
            incidentId: z.ZodString;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                ttlSeconds: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                ttlSeconds: number;
            }, {
                incidentId: string;
                ttlSeconds?: number | undefined;
            }>;
            outputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
                expiresAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                logs: import("@sentinelops/tools").LogRecord[];
                expiresAt: string;
            }, {
                incidentId: string;
                logs: import("@sentinelops/tools").LogRecord[];
                expiresAt: string;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                incidentId: z.ZodString;
                ttlSeconds: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                ttlSeconds: number;
            }, {
                incidentId: string;
                ttlSeconds?: number | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        rollbackDeployTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                target: z.ZodString;
                reason: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                target: string;
                reason?: string | undefined;
            }, {
                target: string;
                reason?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                since: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                service?: string | undefined;
                since?: string | undefined;
            }, {
                service?: string | undefined;
                since?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        createPostmortemTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        createIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            incidentId: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
            risk: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
            incidentId: string;
            label: string;
            risk: "LOW" | "MEDIUM" | "HIGH";
            metadata?: Record<string, any> | undefined;
        }, {
            type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
            incidentId: string;
            label: string;
            risk: "LOW" | "MEDIUM" | "HIGH";
            metadata?: Record<string, any> | undefined;
        }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
            risk: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
            incidentId: string;
            label: string;
            risk: "LOW" | "MEDIUM" | "HIGH";
            metadata?: Record<string, any> | undefined;
        }, {
            type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
            incidentId: string;
            label: string;
            risk: "LOW" | "MEDIUM" | "HIGH";
            metadata?: Record<string, any> | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                label: z.ZodString;
                type: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
                risk: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
                incidentId: string;
                label: string;
                risk: "LOW" | "MEDIUM" | "HIGH";
                metadata?: Record<string, any> | undefined;
            }, {
                type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
                incidentId: string;
                label: string;
                risk: "LOW" | "MEDIUM" | "HIGH";
                metadata?: Record<string, any> | undefined;
            }>;
            outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                incidentId: z.ZodString;
                label: z.ZodString;
                type: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
                risk: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
                incidentId: string;
                label: string;
                risk: "LOW" | "MEDIUM" | "HIGH";
                metadata?: Record<string, any> | undefined;
            }, {
                type: "ROLLBACK" | "RESTART" | "SCALE" | "INVESTIGATE" | "POSTMORTEM";
                incidentId: string;
                label: string;
                risk: "LOW" | "MEDIUM" | "HIGH";
                metadata?: Record<string, any> | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
    }, Record<string, import("@mastra/core").Metric>>;
    readonly monitorAgent: Agent<"MonitorAgent", {
        ingestLogTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            incidentId: z.ZodString;
            source: z.ZodDefault<z.ZodString>;
            level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
            message: z.ZodString;
            metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            incidentId: string;
            metadata: Record<string, any>;
            source: string;
            level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
        }, {
            message: string;
            incidentId: string;
            metadata?: Record<string, any> | undefined;
            source?: string | undefined;
            level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
        }>, z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            source: z.ZodDefault<z.ZodString>;
            level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
            message: z.ZodString;
            metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            incidentId: string;
            metadata: Record<string, any>;
            source: string;
            level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
        }, {
            message: string;
            incidentId: string;
            metadata?: Record<string, any> | undefined;
            source?: string | undefined;
            level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                source: z.ZodDefault<z.ZodString>;
                level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
                message: z.ZodString;
                metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                incidentId: string;
                metadata: Record<string, any>;
                source: string;
                level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
            }, {
                message: string;
                incidentId: string;
                metadata?: Record<string, any> | undefined;
                source?: string | undefined;
                level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
            }>;
            outputSchema: z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                incidentId: z.ZodString;
                source: z.ZodDefault<z.ZodString>;
                level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
                message: z.ZodString;
                metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                incidentId: string;
                metadata: Record<string, any>;
                source: string;
                level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
            }, {
                message: string;
                incidentId: string;
                metadata?: Record<string, any> | undefined;
                source?: string | undefined;
                level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        createAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
            }, "strip", z.ZodTypeAny, {
                metadata: Record<string, any>;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
            }, {
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                metadata?: Record<string, any> | undefined;
            }>;
            outputSchema: z.ZodObject<{
                id: z.ZodString;
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
                status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
                ackedBy: z.ZodOptional<z.ZodString>;
                resolvedBy: z.ZodOptional<z.ZodString>;
                resolution: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
            }, "strip", z.ZodTypeAny, {
                metadata: Record<string, any>;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
            }, {
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                metadata?: Record<string, any> | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        subscribeAlertsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            handlerUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            handlerUrl: string;
        }, {
            handlerUrl: string;
        }>, z.ZodObject<{
            success: z.ZodBoolean;
            subscribers: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            success: boolean;
            subscribers: number;
        }, {
            success: boolean;
            subscribers: number;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            handlerUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            handlerUrl: string;
        }, {
            handlerUrl: string;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                handlerUrl: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                handlerUrl: string;
            }, {
                handlerUrl: string;
            }>;
            outputSchema: z.ZodObject<{
                success: z.ZodBoolean;
                subscribers: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                success: boolean;
                subscribers: number;
            }, {
                success: boolean;
                subscribers: number;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                handlerUrl: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                handlerUrl: string;
            }, {
                handlerUrl: string;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                since: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                service?: string | undefined;
                since?: string | undefined;
            }, {
                service?: string | undefined;
                since?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
    }, Record<string, import("@mastra/core").Metric>>;
    readonly forensicsAgent: Agent<"ForensicsAgent", {
        createPostmortemTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        publishPostmortemTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            postmortemId: z.ZodString;
            publishedBy: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            postmortemId: string;
            publishedBy?: string | undefined;
        }, {
            postmortemId: string;
            publishedBy?: string | undefined;
        }>, z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                postmortemId: z.ZodString;
                publishedBy: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                postmortemId: string;
                publishedBy?: string | undefined;
            }, {
                postmortemId: string;
                publishedBy?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools").PostmortemRecord[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
            }, "strip", z.ZodTypeAny, {
                status?: "DRAFT" | "PUBLISHED" | undefined;
                service?: string | undefined;
            }, {
                status?: "DRAFT" | "PUBLISHED" | undefined;
                service?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        sampleLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, z.ZodObject<{
            incidentId: z.ZodString;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                ttlSeconds: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                ttlSeconds: number;
            }, {
                incidentId: string;
                ttlSeconds?: number | undefined;
            }>;
            outputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
                expiresAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                logs: import("@sentinelops/tools").LogRecord[];
                expiresAt: string;
            }, {
                incidentId: string;
                logs: import("@sentinelops/tools").LogRecord[];
                expiresAt: string;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                incidentId: z.ZodString;
                ttlSeconds: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                ttlSeconds: number;
            }, {
                incidentId: string;
                ttlSeconds?: number | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, z.ZodObject<{
            count: z.ZodNumber;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                query: z.ZodString;
                timeRange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                query: string;
                limit: number;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                query: string;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            }>;
            outputSchema: z.ZodObject<{
                count: z.ZodNumber;
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools").LogRecord[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                query: z.ZodString;
                timeRange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                query: string;
                limit: number;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                query: string;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
    }, Record<string, import("@mastra/core").Metric>>;
    readonly humanOpsAgent: Agent<"HumanOpsAgent", {
        listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                since: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                service?: string | undefined;
                since?: string | undefined;
            }, {
                service?: string | undefined;
                since?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools").PostmortemRecord[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
            }, "strip", z.ZodTypeAny, {
                status?: "DRAFT" | "PUBLISHED" | undefined;
                service?: string | undefined;
            }, {
                status?: "DRAFT" | "PUBLISHED" | undefined;
                service?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, z.ZodObject<{
            count: z.ZodNumber;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                query: z.ZodString;
                timeRange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                query: string;
                limit: number;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                query: string;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            }>;
            outputSchema: z.ZodObject<{
                count: z.ZodNumber;
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools").LogRecord[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                query: z.ZodString;
                timeRange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                query: string;
                limit: number;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                query: string;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        getJobStatusTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                jobId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                jobId: string;
            }, {
                jobId: string;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        approveIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            actionId: z.ZodString;
            approvedBy: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            actionId: z.ZodString;
            approvedBy: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            approvedBy?: string | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                actionId: z.ZodString;
                approvedBy: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                approvedBy?: string | undefined;
            }, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                approvedBy?: string | undefined;
            }>;
            outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                actionId: z.ZodString;
                approvedBy: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                approvedBy?: string | undefined;
            }, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                approvedBy?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        rejectIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            actionId: z.ZodString;
            rejectedBy: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }>, z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            actionId: z.ZodString;
            rejectedBy: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }, {
            actionId: string;
            metadata?: Record<string, any> | undefined;
            rejectedBy?: string | undefined;
            reason?: string | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                actionId: z.ZodString;
                rejectedBy: z.ZodOptional<z.ZodString>;
                reason: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                rejectedBy?: string | undefined;
                reason?: string | undefined;
            }, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                rejectedBy?: string | undefined;
                reason?: string | undefined;
            }>;
            outputSchema: z.ZodType<import("@sentinelops/tools").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools").IncidentAction>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                actionId: z.ZodString;
                rejectedBy: z.ZodOptional<z.ZodString>;
                reason: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                rejectedBy?: string | undefined;
                reason?: string | undefined;
            }, {
                actionId: string;
                metadata?: Record<string, any> | undefined;
                rejectedBy?: string | undefined;
                reason?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listStrategiesTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
            strategies: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                focusArea: z.ZodString;
                constraints: z.ZodNullable<z.ZodString>;
                plan: z.ZodString;
                metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            strategies: {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }[];
        }, {
            strategies: {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>> & {
            inputSchema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
            outputSchema: z.ZodObject<{
                strategies: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodString;
                    focusArea: z.ZodString;
                    constraints: z.ZodNullable<z.ZodString>;
                    plan: z.ZodString;
                    metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    createdAt: z.ZodString;
                    updatedAt: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    title: string;
                    focusArea: string;
                    constraints: string | null;
                    plan: string;
                    metrics: Record<string, any> | null;
                }, {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    title: string;
                    focusArea: string;
                    constraints: string | null;
                    plan: string;
                    metrics: Record<string, any> | null;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                strategies: {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    title: string;
                    focusArea: string;
                    constraints: string | null;
                    plan: string;
                    metrics: Record<string, any> | null;
                }[];
            }, {
                strategies: {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    title: string;
                    focusArea: string;
                    constraints: string | null;
                    plan: string;
                    metrics: Record<string, any> | null;
                }[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
    }, Record<string, import("@mastra/core").Metric>>;
    readonly discordTriageAgent: Agent<"DiscordTriageAgent", {
        sampleLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, z.ZodObject<{
            incidentId: z.ZodString;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools").LogRecord[];
            expiresAt: string;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            ttlSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            ttlSeconds: number;
        }, {
            incidentId: string;
            ttlSeconds?: number | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                ttlSeconds: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                ttlSeconds: number;
            }, {
                incidentId: string;
                ttlSeconds?: number | undefined;
            }>;
            outputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
                expiresAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                logs: import("@sentinelops/tools").LogRecord[];
                expiresAt: string;
            }, {
                incidentId: string;
                logs: import("@sentinelops/tools").LogRecord[];
                expiresAt: string;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                incidentId: z.ZodString;
                ttlSeconds: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                ttlSeconds: number;
            }, {
                incidentId: string;
                ttlSeconds?: number | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        createAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
            status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            ackedBy: z.ZodOptional<z.ZodString>;
            resolvedBy: z.ZodOptional<z.ZodString>;
            resolution: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }, {
            status: "OPEN" | "ACKED" | "RESOLVED";
            metadata: Record<string, any>;
            id: string;
            createdAt: string;
            updatedAt: string;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            resolution?: string | undefined;
            resolvedBy?: string | undefined;
            ackedBy?: string | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            service: z.ZodString;
            severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
            summary: z.ZodString;
            metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        }, "strip", z.ZodTypeAny, {
            metadata: Record<string, any>;
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
        }, {
            service: string;
            severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
            summary: string;
            metadata?: Record<string, any> | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
            }, "strip", z.ZodTypeAny, {
                metadata: Record<string, any>;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
            }, {
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                metadata?: Record<string, any> | undefined;
            }>;
            outputSchema: z.ZodObject<{
                id: z.ZodString;
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
                status: z.ZodEnum<["OPEN", "ACKED", "RESOLVED"]>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
                ackedBy: z.ZodOptional<z.ZodString>;
                resolvedBy: z.ZodOptional<z.ZodString>;
                resolution: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }, {
                status: "OPEN" | "ACKED" | "RESOLVED";
                metadata: Record<string, any>;
                id: string;
                createdAt: string;
                updatedAt: string;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                resolution?: string | undefined;
                resolvedBy?: string | undefined;
                ackedBy?: string | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodString;
                severity: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
                summary: z.ZodString;
                metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
            }, "strip", z.ZodTypeAny, {
                metadata: Record<string, any>;
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
            }, {
                service: string;
                severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
                summary: string;
                metadata?: Record<string, any> | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        ingestLogTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            incidentId: z.ZodString;
            source: z.ZodDefault<z.ZodString>;
            level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
            message: z.ZodString;
            metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            incidentId: string;
            metadata: Record<string, any>;
            source: string;
            level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
        }, {
            message: string;
            incidentId: string;
            metadata?: Record<string, any> | undefined;
            source?: string | undefined;
            level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
        }>, z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            incidentId: z.ZodString;
            source: z.ZodDefault<z.ZodString>;
            level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
            message: z.ZodString;
            metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            incidentId: string;
            metadata: Record<string, any>;
            source: string;
            level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
        }, {
            message: string;
            incidentId: string;
            metadata?: Record<string, any> | undefined;
            source?: string | undefined;
            level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                incidentId: z.ZodString;
                source: z.ZodDefault<z.ZodString>;
                level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
                message: z.ZodString;
                metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                incidentId: string;
                metadata: Record<string, any>;
                source: string;
                level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
            }, {
                message: string;
                incidentId: string;
                metadata?: Record<string, any> | undefined;
                source?: string | undefined;
                level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
            }>;
            outputSchema: z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                incidentId: z.ZodString;
                source: z.ZodDefault<z.ZodString>;
                level: z.ZodDefault<z.ZodEnum<["DEBUG", "INFO", "WARN", "ERROR", "FATAL"]>>;
                message: z.ZodString;
                metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                incidentId: string;
                metadata: Record<string, any>;
                source: string;
                level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
            }, {
                message: string;
                incidentId: string;
                metadata?: Record<string, any> | undefined;
                source?: string | undefined;
                level?: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        weatherTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            location: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            location: string;
        }, {
            location: string;
        }>, z.ZodObject<{
            temperature: z.ZodNumber;
            feelsLike: z.ZodNumber;
            humidity: z.ZodNumber;
            windSpeed: z.ZodNumber;
            windGust: z.ZodNumber;
            conditions: z.ZodString;
            location: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            temperature: number;
            feelsLike: number;
            humidity: number;
            windSpeed: number;
            windGust: number;
            conditions: string;
            location: string;
        }, {
            temperature: number;
            feelsLike: number;
            humidity: number;
            windSpeed: number;
            windGust: number;
            conditions: string;
            location: string;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            location: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            location: string;
        }, {
            location: string;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                location: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                location: string;
            }, {
                location: string;
            }>;
            outputSchema: z.ZodObject<{
                temperature: z.ZodNumber;
                feelsLike: z.ZodNumber;
                humidity: z.ZodNumber;
                windSpeed: z.ZodNumber;
                windGust: z.ZodNumber;
                conditions: z.ZodString;
                location: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                temperature: number;
                feelsLike: number;
                humidity: number;
                windSpeed: number;
                windGust: number;
                conditions: string;
                location: string;
            }, {
                temperature: number;
                feelsLike: number;
                humidity: number;
                windSpeed: number;
                windGust: number;
                conditions: string;
                location: string;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                location: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                location: string;
            }, {
                location: string;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
    }, Record<string, import("@mastra/core").Metric>>;
    readonly agentBprime: Agent<"AgentBprime", {
        listDeploysTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                since: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                service?: string | undefined;
                since?: string | undefined;
            }, {
                service?: string | undefined;
                since?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listStrategiesTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
            strategies: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                focusArea: z.ZodString;
                constraints: z.ZodNullable<z.ZodString>;
                plan: z.ZodString;
                metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            strategies: {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }[];
        }, {
            strategies: {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>> & {
            inputSchema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
            outputSchema: z.ZodObject<{
                strategies: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodString;
                    focusArea: z.ZodString;
                    constraints: z.ZodNullable<z.ZodString>;
                    plan: z.ZodString;
                    metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    createdAt: z.ZodString;
                    updatedAt: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    title: string;
                    focusArea: string;
                    constraints: string | null;
                    plan: string;
                    metrics: Record<string, any> | null;
                }, {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    title: string;
                    focusArea: string;
                    constraints: string | null;
                    plan: string;
                    metrics: Record<string, any> | null;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                strategies: {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    title: string;
                    focusArea: string;
                    constraints: string | null;
                    plan: string;
                    metrics: Record<string, any> | null;
                }[];
            }, {
                strategies: {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    title: string;
                    focusArea: string;
                    constraints: string | null;
                    plan: string;
                    metrics: Record<string, any> | null;
                }[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        createStrategyTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            title: z.ZodString;
            focusArea: z.ZodString;
            constraints: z.ZodOptional<z.ZodString>;
            plan: z.ZodString;
            metrics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            focusArea: string;
            plan: string;
            constraints?: string | undefined;
            metrics?: Record<string, any> | undefined;
        }, {
            title: string;
            focusArea: string;
            plan: string;
            constraints?: string | undefined;
            metrics?: Record<string, any> | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            focusArea: z.ZodString;
            constraints: z.ZodNullable<z.ZodString>;
            plan: z.ZodString;
            metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }, {
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            focusArea: string;
            constraints: string | null;
            plan: string;
            metrics: Record<string, any> | null;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            title: z.ZodString;
            focusArea: z.ZodString;
            constraints: z.ZodOptional<z.ZodString>;
            plan: z.ZodString;
            metrics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            focusArea: string;
            plan: string;
            constraints?: string | undefined;
            metrics?: Record<string, any> | undefined;
        }, {
            title: string;
            focusArea: string;
            plan: string;
            constraints?: string | undefined;
            metrics?: Record<string, any> | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                title: z.ZodString;
                focusArea: z.ZodString;
                constraints: z.ZodOptional<z.ZodString>;
                plan: z.ZodString;
                metrics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                title: string;
                focusArea: string;
                plan: string;
                constraints?: string | undefined;
                metrics?: Record<string, any> | undefined;
            }, {
                title: string;
                focusArea: string;
                plan: string;
                constraints?: string | undefined;
                metrics?: Record<string, any> | undefined;
            }>;
            outputSchema: z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                focusArea: z.ZodString;
                constraints: z.ZodNullable<z.ZodString>;
                plan: z.ZodString;
                metrics: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }, {
                id: string;
                createdAt: string;
                updatedAt: string;
                title: string;
                focusArea: string;
                constraints: string | null;
                plan: string;
                metrics: Record<string, any> | null;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                title: z.ZodString;
                focusArea: z.ZodString;
                constraints: z.ZodOptional<z.ZodString>;
                plan: z.ZodString;
                metrics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                title: string;
                focusArea: string;
                plan: string;
                constraints?: string | undefined;
                metrics?: Record<string, any> | undefined;
            }, {
                title: string;
                focusArea: string;
                plan: string;
                constraints?: string | undefined;
                metrics?: Record<string, any> | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        listPostmortemsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools").PostmortemRecord[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools").PostmortemRecord[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                service: z.ZodOptional<z.ZodString>;
                status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED"]>>;
            }, "strip", z.ZodTypeAny, {
                status?: "DRAFT" | "PUBLISHED" | undefined;
                service?: string | undefined;
            }, {
                status?: "DRAFT" | "PUBLISHED" | undefined;
                service?: string | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, z.ZodObject<{
            count: z.ZodNumber;
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools").LogRecord[];
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            query: z.ZodString;
            timeRange: z.ZodOptional<z.ZodObject<{
                from: z.ZodOptional<z.ZodString>;
                to: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                from?: string | undefined;
                to?: string | undefined;
            }, {
                from?: string | undefined;
                to?: string | undefined;
            }>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            limit: number;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
        }, {
            query: string;
            timeRange?: {
                from?: string | undefined;
                to?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                query: z.ZodString;
                timeRange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                query: string;
                limit: number;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                query: string;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            }>;
            outputSchema: z.ZodObject<{
                count: z.ZodNumber;
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools").LogRecord, z.ZodTypeDef, import("@sentinelops/tools").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools").LogRecord[];
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                query: z.ZodString;
                timeRange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                query: string;
                limit: number;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                query: string;
                timeRange?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
    }, Record<string, import("@mastra/core").Metric>>;
};
export type AgentsRegistry = typeof agentsRegistry;
export { HumanOpsMemorySchema } from "./memory";
