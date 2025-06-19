const db = require("../../db");
const NoteQuery = require("../../queries/Note");

class AddNote {
    static addNote(note) {
        const { query, params } = NoteQuery.getQueryToInsertNote(note);
        db.run(
            query,
            params,
            function(err) {
                if(err) return console.error("Error : ", err.message);
                console.log("Note saved with ID : ", this.lastID);
            }
        );
    }
}

module.exports = AddNote;
