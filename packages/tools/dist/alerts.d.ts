import { z } from "zod";
type AlertStatus = "OPEN" | "ACKED" | "RESOLVED";
export type AlertRecord = {
    id: string;
    service: string;
    severity: AlertSeverity;
    summary: string;
    metadata: Record<string, unknown>;
    status: AlertStatus;
    createdAt: string;
    updatedAt: string;
    ackedBy?: string;
    resolvedBy?: string;
    resolution?: string;
};
export declare const AlertSeveritySchema: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
export type AlertSeverity = z.infer<typeof AlertSeveritySchema>;
export declare const CreateAlertInputSchema: z.ZodObject<{
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
export declare const AckAlertInputSchema: z.ZodObject<{
    alertId: z.ZodString;
    user: z.ZodString;
}, "strip", z.ZodTypeAny, {
    alertId: string;
    user: string;
}, {
    alertId: string;
    user: string;
}>;
export declare const ResolveAlertInputSchema: z.ZodObject<{
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
export declare function createAlert(input: z.infer<typeof CreateAlertInputSchema>): AlertRecord;
export declare const createAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function ackAlert(input: z.infer<typeof AckAlertInputSchema>): AlertRecord;
export declare const ackAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        alertId: z.ZodString;
        user: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        alertId: string;
        user: string;
    }, {
        alertId: string;
        user: string;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function resolveAlert(input: z.infer<typeof ResolveAlertInputSchema>): AlertRecord;
export declare const resolveAlertTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const subscribeAlertsTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        handlerUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        handlerUrl: string;
    }, {
        handlerUrl: string;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function listAlerts(): AlertRecord[];
export declare function getAlert(alertId: string): AlertRecord | undefined;
export declare function listAlertSubscribers(): string[];
export declare function clearAlerts(): void;
export {};
