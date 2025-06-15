const db = require("../db");

module.exports = function addNote(note) {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const time = now.toTimeString().split(" ")[0];

  db.run(
    "INSERT INTO notes (note, date, time) VALUES (?, ?, ?)",
    [note, date, time],
    function(err) {
      if(err) return console.error("Error : ", err.message);
      console.log("Note saved with ID : ", this.lastID);
    }
  );
}
