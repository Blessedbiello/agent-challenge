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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
    }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
    }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        logs: import("@sentinelops/tools/logs").LogRecord[];
        expiresAt: string;
    }, {
        incidentId: string;
        logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
    }>, z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>;
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
    }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
    }>, z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>;
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
    }>, z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>;
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
    }>, z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>;
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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        logs: import("@sentinelops/tools/logs").LogRecord[];
        expiresAt: string;
    }, {
        incidentId: string;
        logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
    }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
    }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
export declare const codeExpertAgent: Agent<"CodeExpertAgent", {
    gitStatusTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
        enabled: z.ZodBoolean;
        status: z.ZodNullable<z.ZodObject<{
            branch: z.ZodNullable<z.ZodString>;
            tracking: z.ZodNullable<z.ZodString>;
            ahead: z.ZodNumber;
            behind: z.ZodNumber;
            isClean: z.ZodBoolean;
            staged: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                headStatus: z.ZodString;
                worktreeStatus: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }, {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }>, "many">;
            unstaged: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                headStatus: z.ZodString;
                worktreeStatus: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }, {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }>, "many">;
            untracked: z.ZodArray<z.ZodString, "many">;
            created: z.ZodArray<z.ZodString, "many">;
            deleted: z.ZodArray<z.ZodString, "many">;
            modified: z.ZodArray<z.ZodString, "many">;
            conflicted: z.ZodArray<z.ZodString, "many">;
            renamed: z.ZodArray<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            branch: string | null;
            tracking: string | null;
            ahead: number;
            behind: number;
            isClean: boolean;
            staged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            unstaged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            untracked: string[];
            created: string[];
            deleted: string[];
            modified: string[];
            conflicted: string[];
            renamed: {
                from: string;
                to: string;
            }[];
        }, {
            branch: string | null;
            tracking: string | null;
            ahead: number;
            behind: number;
            isClean: boolean;
            staged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            unstaged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            untracked: string[];
            created: string[];
            deleted: string[];
            modified: string[];
            conflicted: string[];
            renamed: {
                from: string;
                to: string;
            }[];
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        status: {
            branch: string | null;
            tracking: string | null;
            ahead: number;
            behind: number;
            isClean: boolean;
            staged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            unstaged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            untracked: string[];
            created: string[];
            deleted: string[];
            modified: string[];
            conflicted: string[];
            renamed: {
                from: string;
                to: string;
            }[];
        } | null;
        enabled: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        status: {
            branch: string | null;
            tracking: string | null;
            ahead: number;
            behind: number;
            isClean: boolean;
            staged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            unstaged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            untracked: string[];
            created: string[];
            deleted: string[];
            modified: string[];
            conflicted: string[];
            renamed: {
                from: string;
                to: string;
            }[];
        } | null;
        enabled: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>> & {
        inputSchema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        outputSchema: z.ZodObject<{
            enabled: z.ZodBoolean;
            status: z.ZodNullable<z.ZodObject<{
                branch: z.ZodNullable<z.ZodString>;
                tracking: z.ZodNullable<z.ZodString>;
                ahead: z.ZodNumber;
                behind: z.ZodNumber;
                isClean: z.ZodBoolean;
                staged: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    headStatus: z.ZodString;
                    worktreeStatus: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }, {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }>, "many">;
                unstaged: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    headStatus: z.ZodString;
                    worktreeStatus: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }, {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }>, "many">;
                untracked: z.ZodArray<z.ZodString, "many">;
                created: z.ZodArray<z.ZodString, "many">;
                deleted: z.ZodArray<z.ZodString, "many">;
                modified: z.ZodArray<z.ZodString, "many">;
                conflicted: z.ZodArray<z.ZodString, "many">;
                renamed: z.ZodArray<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                branch: string | null;
                tracking: string | null;
                ahead: number;
                behind: number;
                isClean: boolean;
                staged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                unstaged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                untracked: string[];
                created: string[];
                deleted: string[];
                modified: string[];
                conflicted: string[];
                renamed: {
                    from: string;
                    to: string;
                }[];
            }, {
                branch: string | null;
                tracking: string | null;
                ahead: number;
                behind: number;
                isClean: boolean;
                staged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                unstaged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                untracked: string[];
                created: string[];
                deleted: string[];
                modified: string[];
                conflicted: string[];
                renamed: {
                    from: string;
                    to: string;
                }[];
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            status: {
                branch: string | null;
                tracking: string | null;
                ahead: number;
                behind: number;
                isClean: boolean;
                staged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                unstaged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                untracked: string[];
                created: string[];
                deleted: string[];
                modified: string[];
                conflicted: string[];
                renamed: {
                    from: string;
                    to: string;
                }[];
            } | null;
            enabled: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            status: {
                branch: string | null;
                tracking: string | null;
                ahead: number;
                behind: number;
                isClean: boolean;
                staged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                unstaged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                untracked: string[];
                created: string[];
                deleted: string[];
                modified: string[];
                conflicted: string[];
                renamed: {
                    from: string;
                    to: string;
                }[];
            } | null;
            enabled: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    gitDiffTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
        cached: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cached?: boolean | undefined;
    }, {
        cached?: boolean | undefined;
    }>>, z.ZodObject<{
        enabled: z.ZodBoolean;
        diff: z.ZodNullable<z.ZodObject<{
            cached: z.ZodBoolean;
            files: z.ZodArray<z.ZodObject<{
                file: z.ZodString;
                changes: z.ZodNumber;
                insertions: z.ZodNumber;
                deletions: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }, {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }>, "many">;
            insertions: z.ZodNumber;
            deletions: z.ZodNumber;
            changes: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            changes: number;
            insertions: number;
            deletions: number;
            cached: boolean;
            files: {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }[];
        }, {
            changes: number;
            insertions: number;
            deletions: number;
            cached: boolean;
            files: {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }[];
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        diff: {
            changes: number;
            insertions: number;
            deletions: number;
            cached: boolean;
            files: {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }[];
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        enabled: boolean;
        diff: {
            changes: number;
            insertions: number;
            deletions: number;
            cached: boolean;
            files: {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }[];
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
        cached: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cached?: boolean | undefined;
    }, {
        cached?: boolean | undefined;
    }>>, any, any>> & {
        inputSchema: z.ZodOptional<z.ZodObject<{
            cached: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            cached?: boolean | undefined;
        }, {
            cached?: boolean | undefined;
        }>>;
        outputSchema: z.ZodObject<{
            enabled: z.ZodBoolean;
            diff: z.ZodNullable<z.ZodObject<{
                cached: z.ZodBoolean;
                files: z.ZodArray<z.ZodObject<{
                    file: z.ZodString;
                    changes: z.ZodNumber;
                    insertions: z.ZodNumber;
                    deletions: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }, {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }>, "many">;
                insertions: z.ZodNumber;
                deletions: z.ZodNumber;
                changes: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                changes: number;
                insertions: number;
                deletions: number;
                cached: boolean;
                files: {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }[];
            }, {
                changes: number;
                insertions: number;
                deletions: number;
                cached: boolean;
                files: {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }[];
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            diff: {
                changes: number;
                insertions: number;
                deletions: number;
                cached: boolean;
                files: {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }[];
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            enabled: boolean;
            diff: {
                changes: number;
                insertions: number;
                deletions: number;
                cached: boolean;
                files: {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }[];
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
            cached: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            cached?: boolean | undefined;
        }, {
            cached?: boolean | undefined;
        }>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    gitStageTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
        paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        paths?: string[] | undefined;
    }, {
        paths?: string[] | undefined;
    }>>, z.ZodObject<{
        enabled: z.ZodBoolean;
        success: z.ZodBoolean;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        success: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        enabled: boolean;
        success: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
        paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        paths?: string[] | undefined;
    }, {
        paths?: string[] | undefined;
    }>>, any, any>> & {
        inputSchema: z.ZodOptional<z.ZodObject<{
            paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            paths?: string[] | undefined;
        }, {
            paths?: string[] | undefined;
        }>>;
        outputSchema: z.ZodObject<{
            enabled: z.ZodBoolean;
            success: z.ZodBoolean;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            success: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            enabled: boolean;
            success: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
            paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            paths?: string[] | undefined;
        }, {
            paths?: string[] | undefined;
        }>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    gitCommitTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        message: z.ZodString;
        allowEmpty: z.ZodOptional<z.ZodBoolean>;
        signoff: z.ZodOptional<z.ZodBoolean>;
        author: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            email: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        allowEmpty?: boolean | undefined;
        signoff?: boolean | undefined;
        author?: {
            name: string;
            email?: string | undefined;
        } | undefined;
    }, {
        message: string;
        allowEmpty?: boolean | undefined;
        signoff?: boolean | undefined;
        author?: {
            name: string;
            email?: string | undefined;
        } | undefined;
    }>, z.ZodObject<{
        enabled: z.ZodBoolean;
        commit: z.ZodNullable<z.ZodObject<{
            sha: z.ZodString;
            summary: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            sha: string;
            summary: string;
        }, {
            sha: string;
            summary: string;
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        commit: {
            sha: string;
            summary: string;
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        enabled: boolean;
        commit: {
            sha: string;
            summary: string;
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        message: z.ZodString;
        allowEmpty: z.ZodOptional<z.ZodBoolean>;
        signoff: z.ZodOptional<z.ZodBoolean>;
        author: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            email: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        allowEmpty?: boolean | undefined;
        signoff?: boolean | undefined;
        author?: {
            name: string;
            email?: string | undefined;
        } | undefined;
    }, {
        message: string;
        allowEmpty?: boolean | undefined;
        signoff?: boolean | undefined;
        author?: {
            name: string;
            email?: string | undefined;
        } | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            message: z.ZodString;
            allowEmpty: z.ZodOptional<z.ZodBoolean>;
            signoff: z.ZodOptional<z.ZodBoolean>;
            author: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                email: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                email?: string | undefined;
            }, {
                name: string;
                email?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            allowEmpty?: boolean | undefined;
            signoff?: boolean | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }, {
            message: string;
            allowEmpty?: boolean | undefined;
            signoff?: boolean | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }>;
        outputSchema: z.ZodObject<{
            enabled: z.ZodBoolean;
            commit: z.ZodNullable<z.ZodObject<{
                sha: z.ZodString;
                summary: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                sha: string;
                summary: string;
            }, {
                sha: string;
                summary: string;
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            commit: {
                sha: string;
                summary: string;
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            enabled: boolean;
            commit: {
                sha: string;
                summary: string;
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            message: z.ZodString;
            allowEmpty: z.ZodOptional<z.ZodBoolean>;
            signoff: z.ZodOptional<z.ZodBoolean>;
            author: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                email: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                email?: string | undefined;
            }, {
                name: string;
                email?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            allowEmpty?: boolean | undefined;
            signoff?: boolean | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }, {
            message: string;
            allowEmpty?: boolean | undefined;
            signoff?: boolean | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    gitPushTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
        remote: z.ZodOptional<z.ZodString>;
        branch: z.ZodOptional<z.ZodString>;
        force: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        branch?: string | undefined;
        remote?: string | undefined;
        force?: boolean | undefined;
    }, {
        branch?: string | undefined;
        remote?: string | undefined;
        force?: boolean | undefined;
    }>>, z.ZodObject<{
        enabled: z.ZodBoolean;
        result: z.ZodNullable<z.ZodObject<{
            remote: z.ZodString;
            branch: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            branch: string;
            remote: string;
        }, {
            branch: string;
            remote: string;
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        result: {
            branch: string;
            remote: string;
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        enabled: boolean;
        result: {
            branch: string;
            remote: string;
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
        remote: z.ZodOptional<z.ZodString>;
        branch: z.ZodOptional<z.ZodString>;
        force: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        branch?: string | undefined;
        remote?: string | undefined;
        force?: boolean | undefined;
    }, {
        branch?: string | undefined;
        remote?: string | undefined;
        force?: boolean | undefined;
    }>>, any, any>> & {
        inputSchema: z.ZodOptional<z.ZodObject<{
            remote: z.ZodOptional<z.ZodString>;
            branch: z.ZodOptional<z.ZodString>;
            force: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            branch?: string | undefined;
            remote?: string | undefined;
            force?: boolean | undefined;
        }, {
            branch?: string | undefined;
            remote?: string | undefined;
            force?: boolean | undefined;
        }>>;
        outputSchema: z.ZodObject<{
            enabled: z.ZodBoolean;
            result: z.ZodNullable<z.ZodObject<{
                remote: z.ZodString;
                branch: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                branch: string;
                remote: string;
            }, {
                branch: string;
                remote: string;
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            result: {
                branch: string;
                remote: string;
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            enabled: boolean;
            result: {
                branch: string;
                remote: string;
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
            remote: z.ZodOptional<z.ZodString>;
            branch: z.ZodOptional<z.ZodString>;
            force: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            branch?: string | undefined;
            remote?: string | undefined;
            force?: boolean | undefined;
        }, {
            branch?: string | undefined;
            remote?: string | undefined;
            force?: boolean | undefined;
        }>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
    };
    gitBranchTool: import("@mastra/core/tools").Tool<z.ZodObject<{
        name: z.ZodString;
        base: z.ZodOptional<z.ZodString>;
        checkout: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        base?: string | undefined;
        checkout?: boolean | undefined;
    }, {
        name: string;
        base?: string | undefined;
        checkout?: boolean | undefined;
    }>, z.ZodObject<{
        enabled: z.ZodBoolean;
        branch: z.ZodNullable<z.ZodObject<{
            name: z.ZodString;
            checkedOut: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            checkedOut: boolean;
        }, {
            name: string;
            checkedOut: boolean;
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        branch: {
            name: string;
            checkedOut: boolean;
        } | null;
        enabled: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        branch: {
            name: string;
            checkedOut: boolean;
        } | null;
        enabled: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
        name: z.ZodString;
        base: z.ZodOptional<z.ZodString>;
        checkout: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        base?: string | undefined;
        checkout?: boolean | undefined;
    }, {
        name: string;
        base?: string | undefined;
        checkout?: boolean | undefined;
    }>, any, any>> & {
        inputSchema: z.ZodObject<{
            name: z.ZodString;
            base: z.ZodOptional<z.ZodString>;
            checkout: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            base?: string | undefined;
            checkout?: boolean | undefined;
        }, {
            name: string;
            base?: string | undefined;
            checkout?: boolean | undefined;
        }>;
        outputSchema: z.ZodObject<{
            enabled: z.ZodBoolean;
            branch: z.ZodNullable<z.ZodObject<{
                name: z.ZodString;
                checkedOut: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                checkedOut: boolean;
            }, {
                name: string;
                checkedOut: boolean;
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            branch: {
                name: string;
                checkedOut: boolean;
            } | null;
            enabled: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            branch: {
                name: string;
                checkedOut: boolean;
            } | null;
            enabled: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>;
        execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            name: z.ZodString;
            base: z.ZodOptional<z.ZodString>;
            checkout: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            base?: string | undefined;
            checkout?: boolean | undefined;
        }, {
            name: string;
            base?: string | undefined;
            checkout?: boolean | undefined;
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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        logs: import("@sentinelops/tools/logs").LogRecord[];
        expiresAt: string;
    }, {
        incidentId: string;
        logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
    }>, z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
        outputSchema: z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>;
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
        postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
    }, {
        count: number;
        postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
        logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
    }, {
        count: number;
        logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
        }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
        }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
                expiresAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                logs: import("@sentinelops/tools/logs").LogRecord[];
                expiresAt: string;
            }, {
                incidentId: string;
                logs: import("@sentinelops/tools/logs").LogRecord[];
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
        }>, z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>;
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
        }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
        }>, z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>;
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
        }>, z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>;
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
        }>, z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>;
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
                expiresAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                logs: import("@sentinelops/tools/logs").LogRecord[];
                expiresAt: string;
            }, {
                incidentId: string;
                logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
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
        }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
        }>, z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/actions").IncidentAction, z.ZodTypeDef, import("@sentinelops/tools/actions").IncidentAction>;
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
    readonly codeExpertAgent: Agent<"CodeExpertAgent", {
        gitStatusTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
            enabled: z.ZodBoolean;
            status: z.ZodNullable<z.ZodObject<{
                branch: z.ZodNullable<z.ZodString>;
                tracking: z.ZodNullable<z.ZodString>;
                ahead: z.ZodNumber;
                behind: z.ZodNumber;
                isClean: z.ZodBoolean;
                staged: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    headStatus: z.ZodString;
                    worktreeStatus: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }, {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }>, "many">;
                unstaged: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    headStatus: z.ZodString;
                    worktreeStatus: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }, {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }>, "many">;
                untracked: z.ZodArray<z.ZodString, "many">;
                created: z.ZodArray<z.ZodString, "many">;
                deleted: z.ZodArray<z.ZodString, "many">;
                modified: z.ZodArray<z.ZodString, "many">;
                conflicted: z.ZodArray<z.ZodString, "many">;
                renamed: z.ZodArray<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                branch: string | null;
                tracking: string | null;
                ahead: number;
                behind: number;
                isClean: boolean;
                staged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                unstaged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                untracked: string[];
                created: string[];
                deleted: string[];
                modified: string[];
                conflicted: string[];
                renamed: {
                    from: string;
                    to: string;
                }[];
            }, {
                branch: string | null;
                tracking: string | null;
                ahead: number;
                behind: number;
                isClean: boolean;
                staged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                unstaged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                untracked: string[];
                created: string[];
                deleted: string[];
                modified: string[];
                conflicted: string[];
                renamed: {
                    from: string;
                    to: string;
                }[];
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            status: {
                branch: string | null;
                tracking: string | null;
                ahead: number;
                behind: number;
                isClean: boolean;
                staged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                unstaged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                untracked: string[];
                created: string[];
                deleted: string[];
                modified: string[];
                conflicted: string[];
                renamed: {
                    from: string;
                    to: string;
                }[];
            } | null;
            enabled: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            status: {
                branch: string | null;
                tracking: string | null;
                ahead: number;
                behind: number;
                isClean: boolean;
                staged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                unstaged: {
                    path: string;
                    headStatus: string;
                    worktreeStatus: string;
                }[];
                untracked: string[];
                created: string[];
                deleted: string[];
                modified: string[];
                conflicted: string[];
                renamed: {
                    from: string;
                    to: string;
                }[];
            } | null;
            enabled: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>> & {
            inputSchema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
            outputSchema: z.ZodObject<{
                enabled: z.ZodBoolean;
                status: z.ZodNullable<z.ZodObject<{
                    branch: z.ZodNullable<z.ZodString>;
                    tracking: z.ZodNullable<z.ZodString>;
                    ahead: z.ZodNumber;
                    behind: z.ZodNumber;
                    isClean: z.ZodBoolean;
                    staged: z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        headStatus: z.ZodString;
                        worktreeStatus: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }, {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }>, "many">;
                    unstaged: z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        headStatus: z.ZodString;
                        worktreeStatus: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }, {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }>, "many">;
                    untracked: z.ZodArray<z.ZodString, "many">;
                    created: z.ZodArray<z.ZodString, "many">;
                    deleted: z.ZodArray<z.ZodString, "many">;
                    modified: z.ZodArray<z.ZodString, "many">;
                    conflicted: z.ZodArray<z.ZodString, "many">;
                    renamed: z.ZodArray<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    branch: string | null;
                    tracking: string | null;
                    ahead: number;
                    behind: number;
                    isClean: boolean;
                    staged: {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }[];
                    unstaged: {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }[];
                    untracked: string[];
                    created: string[];
                    deleted: string[];
                    modified: string[];
                    conflicted: string[];
                    renamed: {
                        from: string;
                        to: string;
                    }[];
                }, {
                    branch: string | null;
                    tracking: string | null;
                    ahead: number;
                    behind: number;
                    isClean: boolean;
                    staged: {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }[];
                    unstaged: {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }[];
                    untracked: string[];
                    created: string[];
                    deleted: string[];
                    modified: string[];
                    conflicted: string[];
                    renamed: {
                        from: string;
                        to: string;
                    }[];
                }>>;
                error: z.ZodOptional<z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                }, {
                    code: string;
                    message: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                status: {
                    branch: string | null;
                    tracking: string | null;
                    ahead: number;
                    behind: number;
                    isClean: boolean;
                    staged: {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }[];
                    unstaged: {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }[];
                    untracked: string[];
                    created: string[];
                    deleted: string[];
                    modified: string[];
                    conflicted: string[];
                    renamed: {
                        from: string;
                        to: string;
                    }[];
                } | null;
                enabled: boolean;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }, {
                status: {
                    branch: string | null;
                    tracking: string | null;
                    ahead: number;
                    behind: number;
                    isClean: boolean;
                    staged: {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }[];
                    unstaged: {
                        path: string;
                        headStatus: string;
                        worktreeStatus: string;
                    }[];
                    untracked: string[];
                    created: string[];
                    deleted: string[];
                    modified: string[];
                    conflicted: string[];
                    renamed: {
                        from: string;
                        to: string;
                    }[];
                } | null;
                enabled: boolean;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        gitDiffTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
            cached: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            cached?: boolean | undefined;
        }, {
            cached?: boolean | undefined;
        }>>, z.ZodObject<{
            enabled: z.ZodBoolean;
            diff: z.ZodNullable<z.ZodObject<{
                cached: z.ZodBoolean;
                files: z.ZodArray<z.ZodObject<{
                    file: z.ZodString;
                    changes: z.ZodNumber;
                    insertions: z.ZodNumber;
                    deletions: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }, {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }>, "many">;
                insertions: z.ZodNumber;
                deletions: z.ZodNumber;
                changes: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                changes: number;
                insertions: number;
                deletions: number;
                cached: boolean;
                files: {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }[];
            }, {
                changes: number;
                insertions: number;
                deletions: number;
                cached: boolean;
                files: {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }[];
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            diff: {
                changes: number;
                insertions: number;
                deletions: number;
                cached: boolean;
                files: {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }[];
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            enabled: boolean;
            diff: {
                changes: number;
                insertions: number;
                deletions: number;
                cached: boolean;
                files: {
                    file: string;
                    changes: number;
                    insertions: number;
                    deletions: number;
                }[];
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
            cached: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            cached?: boolean | undefined;
        }, {
            cached?: boolean | undefined;
        }>>, any, any>> & {
            inputSchema: z.ZodOptional<z.ZodObject<{
                cached: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                cached?: boolean | undefined;
            }, {
                cached?: boolean | undefined;
            }>>;
            outputSchema: z.ZodObject<{
                enabled: z.ZodBoolean;
                diff: z.ZodNullable<z.ZodObject<{
                    cached: z.ZodBoolean;
                    files: z.ZodArray<z.ZodObject<{
                        file: z.ZodString;
                        changes: z.ZodNumber;
                        insertions: z.ZodNumber;
                        deletions: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        file: string;
                        changes: number;
                        insertions: number;
                        deletions: number;
                    }, {
                        file: string;
                        changes: number;
                        insertions: number;
                        deletions: number;
                    }>, "many">;
                    insertions: z.ZodNumber;
                    deletions: z.ZodNumber;
                    changes: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    changes: number;
                    insertions: number;
                    deletions: number;
                    cached: boolean;
                    files: {
                        file: string;
                        changes: number;
                        insertions: number;
                        deletions: number;
                    }[];
                }, {
                    changes: number;
                    insertions: number;
                    deletions: number;
                    cached: boolean;
                    files: {
                        file: string;
                        changes: number;
                        insertions: number;
                        deletions: number;
                    }[];
                }>>;
                error: z.ZodOptional<z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                }, {
                    code: string;
                    message: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                enabled: boolean;
                diff: {
                    changes: number;
                    insertions: number;
                    deletions: number;
                    cached: boolean;
                    files: {
                        file: string;
                        changes: number;
                        insertions: number;
                        deletions: number;
                    }[];
                } | null;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }, {
                enabled: boolean;
                diff: {
                    changes: number;
                    insertions: number;
                    deletions: number;
                    cached: boolean;
                    files: {
                        file: string;
                        changes: number;
                        insertions: number;
                        deletions: number;
                    }[];
                } | null;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
                cached: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                cached?: boolean | undefined;
            }, {
                cached?: boolean | undefined;
            }>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        gitStageTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
            paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            paths?: string[] | undefined;
        }, {
            paths?: string[] | undefined;
        }>>, z.ZodObject<{
            enabled: z.ZodBoolean;
            success: z.ZodBoolean;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            success: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            enabled: boolean;
            success: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
            paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            paths?: string[] | undefined;
        }, {
            paths?: string[] | undefined;
        }>>, any, any>> & {
            inputSchema: z.ZodOptional<z.ZodObject<{
                paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                paths?: string[] | undefined;
            }, {
                paths?: string[] | undefined;
            }>>;
            outputSchema: z.ZodObject<{
                enabled: z.ZodBoolean;
                success: z.ZodBoolean;
                error: z.ZodOptional<z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                }, {
                    code: string;
                    message: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                enabled: boolean;
                success: boolean;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }, {
                enabled: boolean;
                success: boolean;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
                paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                paths?: string[] | undefined;
            }, {
                paths?: string[] | undefined;
            }>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        gitCommitTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            message: z.ZodString;
            allowEmpty: z.ZodOptional<z.ZodBoolean>;
            signoff: z.ZodOptional<z.ZodBoolean>;
            author: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                email: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                email?: string | undefined;
            }, {
                name: string;
                email?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            allowEmpty?: boolean | undefined;
            signoff?: boolean | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }, {
            message: string;
            allowEmpty?: boolean | undefined;
            signoff?: boolean | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }>, z.ZodObject<{
            enabled: z.ZodBoolean;
            commit: z.ZodNullable<z.ZodObject<{
                sha: z.ZodString;
                summary: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                sha: string;
                summary: string;
            }, {
                sha: string;
                summary: string;
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            commit: {
                sha: string;
                summary: string;
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            enabled: boolean;
            commit: {
                sha: string;
                summary: string;
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            message: z.ZodString;
            allowEmpty: z.ZodOptional<z.ZodBoolean>;
            signoff: z.ZodOptional<z.ZodBoolean>;
            author: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                email: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                email?: string | undefined;
            }, {
                name: string;
                email?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            allowEmpty?: boolean | undefined;
            signoff?: boolean | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }, {
            message: string;
            allowEmpty?: boolean | undefined;
            signoff?: boolean | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                message: z.ZodString;
                allowEmpty: z.ZodOptional<z.ZodBoolean>;
                signoff: z.ZodOptional<z.ZodBoolean>;
                author: z.ZodOptional<z.ZodObject<{
                    name: z.ZodString;
                    email: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    email?: string | undefined;
                }, {
                    name: string;
                    email?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                allowEmpty?: boolean | undefined;
                signoff?: boolean | undefined;
                author?: {
                    name: string;
                    email?: string | undefined;
                } | undefined;
            }, {
                message: string;
                allowEmpty?: boolean | undefined;
                signoff?: boolean | undefined;
                author?: {
                    name: string;
                    email?: string | undefined;
                } | undefined;
            }>;
            outputSchema: z.ZodObject<{
                enabled: z.ZodBoolean;
                commit: z.ZodNullable<z.ZodObject<{
                    sha: z.ZodString;
                    summary: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    sha: string;
                    summary: string;
                }, {
                    sha: string;
                    summary: string;
                }>>;
                error: z.ZodOptional<z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                }, {
                    code: string;
                    message: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                enabled: boolean;
                commit: {
                    sha: string;
                    summary: string;
                } | null;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }, {
                enabled: boolean;
                commit: {
                    sha: string;
                    summary: string;
                } | null;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                message: z.ZodString;
                allowEmpty: z.ZodOptional<z.ZodBoolean>;
                signoff: z.ZodOptional<z.ZodBoolean>;
                author: z.ZodOptional<z.ZodObject<{
                    name: z.ZodString;
                    email: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    email?: string | undefined;
                }, {
                    name: string;
                    email?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                allowEmpty?: boolean | undefined;
                signoff?: boolean | undefined;
                author?: {
                    name: string;
                    email?: string | undefined;
                } | undefined;
            }, {
                message: string;
                allowEmpty?: boolean | undefined;
                signoff?: boolean | undefined;
                author?: {
                    name: string;
                    email?: string | undefined;
                } | undefined;
            }>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        gitPushTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
            remote: z.ZodOptional<z.ZodString>;
            branch: z.ZodOptional<z.ZodString>;
            force: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            branch?: string | undefined;
            remote?: string | undefined;
            force?: boolean | undefined;
        }, {
            branch?: string | undefined;
            remote?: string | undefined;
            force?: boolean | undefined;
        }>>, z.ZodObject<{
            enabled: z.ZodBoolean;
            result: z.ZodNullable<z.ZodObject<{
                remote: z.ZodString;
                branch: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                branch: string;
                remote: string;
            }, {
                branch: string;
                remote: string;
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            result: {
                branch: string;
                remote: string;
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            enabled: boolean;
            result: {
                branch: string;
                remote: string;
            } | null;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
            remote: z.ZodOptional<z.ZodString>;
            branch: z.ZodOptional<z.ZodString>;
            force: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            branch?: string | undefined;
            remote?: string | undefined;
            force?: boolean | undefined;
        }, {
            branch?: string | undefined;
            remote?: string | undefined;
            force?: boolean | undefined;
        }>>, any, any>> & {
            inputSchema: z.ZodOptional<z.ZodObject<{
                remote: z.ZodOptional<z.ZodString>;
                branch: z.ZodOptional<z.ZodString>;
                force: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                branch?: string | undefined;
                remote?: string | undefined;
                force?: boolean | undefined;
            }, {
                branch?: string | undefined;
                remote?: string | undefined;
                force?: boolean | undefined;
            }>>;
            outputSchema: z.ZodObject<{
                enabled: z.ZodBoolean;
                result: z.ZodNullable<z.ZodObject<{
                    remote: z.ZodString;
                    branch: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    branch: string;
                    remote: string;
                }, {
                    branch: string;
                    remote: string;
                }>>;
                error: z.ZodOptional<z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                }, {
                    code: string;
                    message: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                enabled: boolean;
                result: {
                    branch: string;
                    remote: string;
                } | null;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }, {
                enabled: boolean;
                result: {
                    branch: string;
                    remote: string;
                } | null;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
                remote: z.ZodOptional<z.ZodString>;
                branch: z.ZodOptional<z.ZodString>;
                force: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                branch?: string | undefined;
                remote?: string | undefined;
                force?: boolean | undefined;
            }, {
                branch?: string | undefined;
                remote?: string | undefined;
                force?: boolean | undefined;
            }>>, any, any>, options: import("@mastra/core").ToolInvocationOptions) => Promise<any>;
        };
        gitBranchTool: import("@mastra/core/tools").Tool<z.ZodObject<{
            name: z.ZodString;
            base: z.ZodOptional<z.ZodString>;
            checkout: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            base?: string | undefined;
            checkout?: boolean | undefined;
        }, {
            name: string;
            base?: string | undefined;
            checkout?: boolean | undefined;
        }>, z.ZodObject<{
            enabled: z.ZodBoolean;
            branch: z.ZodNullable<z.ZodObject<{
                name: z.ZodString;
                checkedOut: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                checkedOut: boolean;
            }, {
                name: string;
                checkedOut: boolean;
            }>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
            }, {
                code: string;
                message: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            branch: {
                name: string;
                checkedOut: boolean;
            } | null;
            enabled: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }, {
            branch: {
                name: string;
                checkedOut: boolean;
            } | null;
            enabled: boolean;
            error?: {
                code: string;
                message: string;
            } | undefined;
        }>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
            name: z.ZodString;
            base: z.ZodOptional<z.ZodString>;
            checkout: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            base?: string | undefined;
            checkout?: boolean | undefined;
        }, {
            name: string;
            base?: string | undefined;
            checkout?: boolean | undefined;
        }>, any, any>> & {
            inputSchema: z.ZodObject<{
                name: z.ZodString;
                base: z.ZodOptional<z.ZodString>;
                checkout: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                base?: string | undefined;
                checkout?: boolean | undefined;
            }, {
                name: string;
                base?: string | undefined;
                checkout?: boolean | undefined;
            }>;
            outputSchema: z.ZodObject<{
                enabled: z.ZodBoolean;
                branch: z.ZodNullable<z.ZodObject<{
                    name: z.ZodString;
                    checkedOut: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    checkedOut: boolean;
                }, {
                    name: string;
                    checkedOut: boolean;
                }>>;
                error: z.ZodOptional<z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                }, {
                    code: string;
                    message: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                branch: {
                    name: string;
                    checkedOut: boolean;
                } | null;
                enabled: boolean;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }, {
                branch: {
                    name: string;
                    checkedOut: boolean;
                } | null;
                enabled: boolean;
                error?: {
                    code: string;
                    message: string;
                } | undefined;
            }>;
            execute: (context: import("@mastra/core").ToolExecutionContext<z.ZodObject<{
                name: z.ZodString;
                base: z.ZodOptional<z.ZodString>;
                checkout: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                base?: string | undefined;
                checkout?: boolean | undefined;
            }, {
                name: string;
                base?: string | undefined;
                checkout?: boolean | undefined;
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
            expiresAt: string;
        }, {
            incidentId: string;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
                expiresAt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                incidentId: string;
                logs: import("@sentinelops/tools/logs").LogRecord[];
                expiresAt: string;
            }, {
                incidentId: string;
                logs: import("@sentinelops/tools/logs").LogRecord[];
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
        }>, z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, any, any, import("@mastra/core").ToolExecutionContext<z.ZodObject<{
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
            outputSchema: z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>;
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
            postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
        }, {
            count: number;
            postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
                postmortems: z.ZodArray<z.ZodType<import("@sentinelops/tools/postmortems").PostmortemRecord, z.ZodTypeDef, import("@sentinelops/tools/postmortems").PostmortemRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
            }, {
                count: number;
                postmortems: import("@sentinelops/tools/postmortems").PostmortemRecord[];
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
            logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
        }, "strip", z.ZodTypeAny, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
        }, {
            count: number;
            logs: import("@sentinelops/tools/logs").LogRecord[];
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
                logs: z.ZodArray<z.ZodType<import("@sentinelops/tools/logs").LogRecord, z.ZodTypeDef, import("@sentinelops/tools/logs").LogRecord>, "many">;
            }, "strip", z.ZodTypeAny, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
            }, {
                count: number;
                logs: import("@sentinelops/tools/logs").LogRecord[];
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
