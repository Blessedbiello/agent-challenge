import { z } from "zod";
export type WeatherToolResult = z.infer<typeof WeatherToolResultSchema>;
declare const WeatherToolResultSchema: z.ZodObject<{
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
export declare const weatherTool: import("@mastra/core/tools").Tool<z.ZodObject<{
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
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
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
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        location: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        location: string;
    }, {
        location: string;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export {};
