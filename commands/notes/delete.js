/*
	Purpose : This class holds all methods related to deleting notes.
*/

const db = require("../../db");
const NoteQuery = require("../../queries/Note");

class DeleteNote {
	static deleteNotes(target) {
		const isDate = /^\d{4}-\d{2}-\d{2}$/.test(target);
		const isID = /^\d+$/.test(target);

		if(isDate) {
			let { query, params } = NoteQuery.getQueryToDeleteByDate(target);
			db.run(query, params, function(err) {
				if(err) return console.error(err.message);
				console.log(`${this.changes} notes deleted from ${params}`);
			});
		} else if (isID) {
			let { query, params } = NoteQuery.getQueryToDeleteById(target);
			db.run(query, params, function(err) {
				if(err) return console.error(err.message);
				console.log(`Note with ID ${params} deleted`);
			});
		} else {
			console.log("Invalid delete target. Use a valid date (YYYY-MM-DD) or note ID.");
		}
	}
}

module.exports = DeleteNote;
