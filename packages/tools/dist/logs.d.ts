import { z } from "zod";
export type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
export type LogRecord = {
    id: string;
    incidentId: string;
    source: string;
    level: LogLevel;
    message: string;
    metadata: Record<string, unknown>;
    timestamp: string;
};
export declare const IngestLogInputSchema: z.ZodObject<{
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
export declare function ingestLog(input: z.infer<typeof IngestLogInputSchema>): LogRecord;
export declare const ingestLogTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, z.ZodType<LogRecord, z.ZodTypeDef, LogRecord>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    outputSchema: z.ZodType<LogRecord, z.ZodTypeDef, LogRecord>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const queryLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    logs: z.ZodArray<z.ZodType<LogRecord, z.ZodTypeDef, LogRecord>, "many">;
}, "strip", z.ZodTypeAny, {
    count: number;
    logs: LogRecord[];
}, {
    count: number;
    logs: LogRecord[];
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
        logs: z.ZodArray<z.ZodType<LogRecord, z.ZodTypeDef, LogRecord>, "many">;
    }, "strip", z.ZodTypeAny, {
        count: number;
        logs: LogRecord[];
    }, {
        count: number;
        logs: LogRecord[];
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const sampleLogsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
    logs: z.ZodArray<z.ZodType<LogRecord, z.ZodTypeDef, LogRecord>, "many">;
    expiresAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    incidentId: string;
    logs: LogRecord[];
    expiresAt: string;
}, {
    incidentId: string;
    logs: LogRecord[];
    expiresAt: string;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
        logs: z.ZodArray<z.ZodType<LogRecord, z.ZodTypeDef, LogRecord>, "many">;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        logs: LogRecord[];
        expiresAt: string;
    }, {
        incidentId: string;
        logs: LogRecord[];
        expiresAt: string;
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        incidentId: z.ZodString;
        ttlSeconds: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        incidentId: string;
        ttlSeconds: number;
    }, {
        incidentId: string;
        ttlSeconds?: number | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function listLogs(): LogRecord[];
export declare function clearLogs(): void;
