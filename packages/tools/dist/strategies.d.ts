import { z } from "zod";
export declare const StrategySchema: z.ZodObject<{
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
export type StrategyRecord = z.infer<typeof StrategySchema>;
export declare const CreateStrategyInputSchema: z.ZodObject<{
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
export declare function createStrategy(input: z.infer<typeof CreateStrategyInputSchema>): StrategyRecord;
export declare function listStrategies(): StrategyRecord[];
export declare function clearStrategies(): void;
export declare const createStrategyTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const listStrategiesTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
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
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>> & {
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
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
