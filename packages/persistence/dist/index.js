"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = initDb;
exports.getDb = getDb;
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
let db = null;
let migrationsApplied = false;
function runMigrations(database) {
    database.exec(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS alerts (
      id TEXT PRIMARY KEY,
      service TEXT NOT NULL,
      severity TEXT NOT NULL,
      summary TEXT NOT NULL,
      metadata TEXT NOT NULL,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      acked_by TEXT,
      resolved_by TEXT,
      resolution TEXT
    );

    CREATE TABLE IF NOT EXISTS alert_subscribers (
      handler_url TEXT PRIMARY KEY,
      subscribed_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS deploy_jobs (
      id TEXT PRIMARY KEY,
      service TEXT NOT NULL,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      spec TEXT NOT NULL,
      type TEXT NOT NULL,
      parent_job_id TEXT,
      outcome TEXT
    );

    CREATE TABLE IF NOT EXISTS logs (
      id TEXT PRIMARY KEY,
      incident_id TEXT NOT NULL,
      source TEXT NOT NULL,
      level TEXT NOT NULL,
      message TEXT NOT NULL,
      metadata TEXT NOT NULL,
      timestamp TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS postmortems (
      id TEXT PRIMARY KEY,
      incident_id TEXT NOT NULL,
      service TEXT NOT NULL,
      draft_text TEXT NOT NULL,
      attachments TEXT NOT NULL,
      authors TEXT NOT NULL,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      published_at TEXT,
      published_by TEXT
    );

    CREATE TABLE IF NOT EXISTS incident_actions (
      id TEXT PRIMARY KEY,
      incident_id TEXT NOT NULL,
      label TEXT NOT NULL,
      type TEXT NOT NULL,
      risk TEXT NOT NULL,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      approved_by TEXT,
      rejected_by TEXT,
      rejection_reason TEXT,
      metadata TEXT
    );

    CREATE TABLE IF NOT EXISTS hackathon_strategies (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      focus_area TEXT NOT NULL,
      constraints TEXT,
      plan TEXT NOT NULL,
      metrics TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);
}
function initDb(options) {
    if (!db) {
        const filename = options?.filename ??
            (options?.memory ? ":memory:" : process.env.SENTINELOPS_DB_PATH) ??
            "sentinelops.db";
        db = new better_sqlite3_1.default(filename, {
            verbose: process.env.SENTINELOPS_DB_VERBOSE ? console.debug : undefined,
        });
        db.pragma("journal_mode = WAL");
    }
    if (!migrationsApplied && db) {
        runMigrations(db);
        migrationsApplied = true;
    }
    return db;
}
function getDb() {
    return initDb();
}
//# sourceMappingURL=index.js.map