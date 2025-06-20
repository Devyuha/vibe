#!/usr/bin/env node
const { program } = require("commander");
const chalk = require("chalk");
const db = require("./db");

// Controllers
const NoteController = require("./controllers/NoteController");

// Program info
program
    .version("1.0.0")
    .description("Vibe - A simple CLI mood note tracker");

// List notes
program
    .command("list")
    .description("List saved notes")
    .option("-d, --date <date>", "Filter by date or use 'today'")
    .action((options) => {
        NoteController.listNotes(options);
    });

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
    .action((target) => {
        NoteController.deleteNotes(target);
    });


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
