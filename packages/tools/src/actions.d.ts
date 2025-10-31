import { z } from "zod";
export declare const ActionStatusSchema: z.ZodEnum<["PENDING", "APPROVED", "REJECTED", "RUNNING", "COMPLETED"]>;
export type ActionStatus = z.infer<typeof ActionStatusSchema>;
export declare const ActionRiskSchema: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
export type ActionRisk = z.infer<typeof ActionRiskSchema>;
export declare const ActionTypeSchema: z.ZodEnum<["ROLLBACK", "RESTART", "SCALE", "INVESTIGATE", "POSTMORTEM"]>;
export type ActionType = z.infer<typeof ActionTypeSchema>;
export declare const CreateIncidentActionSchema: z.ZodObject<{
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
export declare const UpdateIncidentActionStatusSchema: z.ZodObject<{
    status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED", "RUNNING", "COMPLETED"]>;
    approvedBy: z.ZodOptional<z.ZodString>;
    rejectedBy: z.ZodOptional<z.ZodString>;
    rejectionReason: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    status: "PENDING" | "RUNNING" | "APPROVED" | "REJECTED" | "COMPLETED";
    metadata?: Record<string, any> | undefined;
    approvedBy?: string | undefined;
    rejectedBy?: string | undefined;
    rejectionReason?: string | undefined;
}, {
    status: "PENDING" | "RUNNING" | "APPROVED" | "REJECTED" | "COMPLETED";
    metadata?: Record<string, any> | undefined;
    approvedBy?: string | undefined;
    rejectedBy?: string | undefined;
    rejectionReason?: string | undefined;
}>;
export declare const ApproveIncidentActionSchema: z.ZodObject<{
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
export declare const RejectIncidentActionSchema: z.ZodObject<{
    actionId: z.ZodString;
    rejectedBy: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    actionId: string;
    metadata?: Record<string, any> | undefined;
    reason?: string | undefined;
    rejectedBy?: string | undefined;
}, {
    actionId: string;
    metadata?: Record<string, any> | undefined;
    reason?: string | undefined;
    rejectedBy?: string | undefined;
}>;
export type IncidentAction = {
    id: string;
    incidentId: string;
    label: string;
    type: ActionType;
    risk: ActionRisk;
    status: ActionStatus;
    createdAt: string;
    updatedAt: string;
    approvedBy?: string;
    rejectedBy?: string;
    rejectionReason?: string;
    metadata?: Record<string, unknown>;
};
export declare const IncidentActionSchema: z.ZodType<IncidentAction>;
export declare function createIncidentAction(input: z.infer<typeof CreateIncidentActionSchema>): IncidentAction;
export declare const createIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, z.ZodType<IncidentAction, z.ZodTypeDef, IncidentAction>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    outputSchema: z.ZodType<IncidentAction, z.ZodTypeDef, IncidentAction>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function updateIncidentActionStatus(actionId: string, input: z.infer<typeof UpdateIncidentActionStatusSchema>): IncidentAction;
export declare function approveIncidentAction(input: z.infer<typeof ApproveIncidentActionSchema>): IncidentAction;
export declare function rejectIncidentAction(input: z.infer<typeof RejectIncidentActionSchema>): IncidentAction;
export declare const approveIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, z.ZodType<IncidentAction, z.ZodTypeDef, IncidentAction>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    outputSchema: z.ZodType<IncidentAction, z.ZodTypeDef, IncidentAction>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const rejectIncidentActionTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    actionId: z.ZodString;
    rejectedBy: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    actionId: string;
    metadata?: Record<string, any> | undefined;
    reason?: string | undefined;
    rejectedBy?: string | undefined;
}, {
    actionId: string;
    metadata?: Record<string, any> | undefined;
    reason?: string | undefined;
    rejectedBy?: string | undefined;
}>, z.ZodType<IncidentAction, z.ZodTypeDef, IncidentAction>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    actionId: z.ZodString;
    rejectedBy: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    actionId: string;
    metadata?: Record<string, any> | undefined;
    reason?: string | undefined;
    rejectedBy?: string | undefined;
}, {
    actionId: string;
    metadata?: Record<string, any> | undefined;
    reason?: string | undefined;
    rejectedBy?: string | undefined;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        actionId: z.ZodString;
        rejectedBy: z.ZodOptional<z.ZodString>;
        reason: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        reason?: string | undefined;
        rejectedBy?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        reason?: string | undefined;
        rejectedBy?: string | undefined;
    }>;
    outputSchema: z.ZodType<IncidentAction, z.ZodTypeDef, IncidentAction>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        actionId: z.ZodString;
        rejectedBy: z.ZodOptional<z.ZodString>;
        reason: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        reason?: string | undefined;
        rejectedBy?: string | undefined;
    }, {
        actionId: string;
        metadata?: Record<string, any> | undefined;
        reason?: string | undefined;
        rejectedBy?: string | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare function listIncidentActions(options?: {
    incidentId?: string;
    status?: ActionStatus;
}): IncidentAction[];
export declare function getIncidentAction(actionId: string): IncidentAction | undefined;
export declare function clearIncidentActions(): void;
export { IncidentActionSchema, ApproveIncidentActionSchema, RejectIncidentActionSchema, };
