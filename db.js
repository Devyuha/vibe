/* 
    Purpose : This is where the db configuration is written
*/

const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.join(__dirname, "vibe.db");

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

module.exports = db;
