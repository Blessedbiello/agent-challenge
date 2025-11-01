import type { Database as BetterSqliteDatabase } from "better-sqlite3";
export interface InitDbOptions {
    filename?: string;
    memory?: boolean;
}
export declare function initDb(options?: InitDbOptions): BetterSqliteDatabase;
export declare function getDb(): BetterSqliteDatabase;
