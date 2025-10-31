export declare function triggerChaosIncident(scenarioIndex?: number): Promise<{
    incidentId: string;
    scenario: string;
}>;
export declare function listChaosScenarios(): {
    index: number;
    name: string;
    service: string;
    severity: "HIGH" | "CRITICAL" | "MEDIUM";
}[];
