/*
    Purpose : This generates all queries related to notes
*/

const DateTime = require("../utils/DateTime");

class NoteQuery {
	/* Generate query based on filter for listing the notes  */
    static getQueryForListing(filterDate = null) {
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

		query + " ORDER BY date, time";

		return {
			query,
			params
		};
    }

	/* Generate query to delete notes by date  */
	static getQueryToDeleteByDate(date) {
		let query = "DELETE FROM notes WHERE date = ?";
		let params = [date];

		return {
			query,
			params
		};
	}

	/* Generate query to delete notes by id */ 
	static getQueryToDeleteById(id) {
		let query = "DELETE FROM notes WHERE id  = ?";
		let params = [id]

		return {
			query,
			params
		}
	}

	/* Generate query to insert note  */
	static getQueryToInsertNote(note) {
		const { date, time } = DateTime.getDateAndTime();
		let query = "INSERT INTO notes (note, date, time) VALUES (?, ?, ?)";
		let params = [
			note,
			date,
			time
		];

		return {
			query,
			params
		}
	}	
}

module.exports = NoteQuery;
