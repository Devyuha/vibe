/* 
    Purpose : This is where the db configuration is written
*/

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const sqlite3 = require("sqlite3").verbose();
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, "vibe.db");

const db = new sqlite3.Database(dbPath);

/* 
    Execute queries and create tables on initiating the DB.
*/
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      note TEXT NOT NULL,
      date TEXT,
      time TEXT
    )
  `)
});

export default db;
