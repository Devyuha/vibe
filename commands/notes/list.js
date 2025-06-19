/*
	Purpose : This class holds all the methods related to listing the notes.
*/

const db = require("../../db");
const chalk = require("chalk");
const NoteQuery = require("../../queries/Note");

class ListNote {
	/* List notes method */
	static listNotes({ date: filterDate }) {
		const { query, params } = NoteQuery.getQueryForListing(filterDate);

		db.all(query, params, (err, rows) => {
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
}

module.exports = ListNote;
