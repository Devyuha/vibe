/*
    Purpose : This is a viewer class to display messages for notes.
*/

import { text, info, success, danger, primary } from "./View.js";

class NoteView {
    static insertedNote(id) {
        let message = `${success("Note saved with ID : ")}`;
        message += info(id);

        return message;
    }

    static deletedByDate(numberOfRows, date) {
        let message = `${info(numberOfRows)} `;
        message += text("items deleted from ");
        message += info(date);

        return message;
    }

    static deletedById(id) {
        let message = text("Note with ID ");
        message += info(id);
        message += text(" deleted");

        return message;
    }

    static invalidDeleteTarget() {
        let message = danger("Invalid delete target. Use a valid date (YYYY-MM-DD) or note ID.");

        return message;
    }

    static noNotesFound() {
        let message = warning("No notes found.");

        return message;
    }

    static displayDate(date) {
        let message = `\n${info(`[${date}]`)}:`;

        return message;
    }

    static displayNote(id, note) {
        let message = primary(id) + ". ";
        message += text(note);

        return message;
    }
}

export default NoteView;
