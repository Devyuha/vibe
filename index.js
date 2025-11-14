#!/usr/bin/env node
import { program } from "commander";
// Controllers
import NoteController from "./controllers/NoteController.js";

// Program info
program
    .version("1.0.0")
    .description("Vibe - A simple CLI mood note tracker");

// List notes
program
    .command("list")
    .description("List saved notes")
    .option("-d, --date <date>", "Filter by date or use 'today'")
    .action(NoteController.listNotes);

// Truncate tables
program
    .command("clear")
    .description("Truncate all tables in db")
    .action(() => {
        //
    })

// Delete notes
program
    .command("delete <target>")
    .description("Delete note by id or date")
    .action(NoteController.deleteNotes);


// Add note
program
    .arguments('[note...]')
    .action((noteParts) => {
        const note = noteParts.join(" ").trim();
        if(note) {
            NoteController.addNote(note);
        } else {
            program.help();
        }
    });

// Start program
program.parse(process.argv);
