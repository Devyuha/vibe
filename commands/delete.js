const db = require("../db");

function deleteNotes(target) {
  const isDate = /^\d{4}-\d{2}-\d{2}$/.test(target);
  const isID = /^\d+$/.test(target);

  if(isDate) {
    db.run("DELETE FROM notes WHERE date = ?", [target], function(err) {
      if(err) return console.error(err.message);
      console.log(`${this.changes} notes deleted from ${target}`);
    });
  } else if (isID) {
    db.run("DELETE FROM notes WHERE id  = ?", [target], function(err) {
      if(err) return console.error(err.message);
      console.log(`Note with ID ${target} deleted`);
    });
  } else {
    console.log("Invalid delete target. Use a valid date (YYYY-MM-DD) or note ID.");
  }
}

module.exports = deleteNotes;
