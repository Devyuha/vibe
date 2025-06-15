const db = require("../db");
const chalk = require("chalk");

function listNotes(filterDate) {
  let query = "SELECT * FROM notes";
  let params = [];

  if(filterDate) {
    let date = filterDate;
    if(filterDate === "today") {
      date = new Date().toISOString().split('T')[0];
    }
    query += " WHERE date = ?";
    params.push(date);
  }

  db.all(query + " ORDER BY date, time", params, (err, rows) => {
    if(err) return console.error(err.message);

    if(rows.length === 0) {
      console.log(chalk.yellow("No notes found."));
      return;
    }

    let lastDate = "";
    rows.forEach((row) => {
      if(row.date !== lastDate) {
        console.log(`\n${chalk.cyan(`[${row.date}]`)}:`);
        lastDate = row.date;
      }
      
      const [hour, minute, second] = row.time.split(':');
      let hour12 = hour % 12 || 12;
      const ampm = hour < 12 ? 'AM' : 'PM';
      const formattedTime = `${hour12}:${minute} ${ampm}`;

      console.log(`${chalk.green(`[${row.id}]`)}${chalk.yellow(`[${formattedTime}]`)}: ${row.note}`);
    });
  });
}

module.exports = listNotes;
