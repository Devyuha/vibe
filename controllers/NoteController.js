/*
    Purpose : This is the Notes Controller.
*/

const chalk = require("chalk");
const db = require("../db");
const DateTime = require("../utils/DateTime");
const NoteQuery = require("../queries/Note");
const NoteView = require("../views/NoteView");

class NoteController {
    // Insert notes
    static addNote(note) {
        const { query, params } = NoteQuery.getQueryToInsertNote(note);
        db.run(
            query,
            params,
            function(err) {
                if(err) return console.error("Error : ", err.message);
                console.log(NoteView.insertedNote(this.lastID));
            }
        );
    }

    // Delete notes by date or id
    static deleteNotes(target) {
		const isDate = /^\d{4}-\d{2}-\d{2}$/.test(target);
		const isID = /^\d+$/.test(target);

		if(isDate) {
			let { query, params } = NoteQuery.getQueryToDeleteByDate(target);
			db.run(query, params, function(err) {
				if(err) return console.error(err.message);
				console.log(NoteView.deletedByDate(this.changes, params));
			});
		} else if (isID) {
			let { query, params } = NoteQuery.getQueryToDeleteById(target);
			db.run(query, params, function(err) {
				if(err) return console.error(err.message);
				console.log(NoteView.deletedById(params));
			});
		} else {
			console.log(NoteView.invalidDeleteTarget());
		}
	}

    // List notes all or by date
	static listNotes({ date: filterDate }) {
		const { query, params } = NoteQuery.getQueryForListing(filterDate);

		db.all(query, params, (err, rows) => {
			if(err) return console.error(err.message);

			if(rows.length === 0) {
				console.log(NoteView.noNotesFound());
				return;
			}

			let lastDate = "";
			rows.forEach((row) => {
				if(row.date !== lastDate) {
                    console.log(NoteView.displayDate(row.date));
                    lastDate = row.date;
				}
				
				console.log(NoteView.displayNote(row.id, row.note));
			});
		});
	}
}

module.exports = NoteController;
