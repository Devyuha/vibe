#!/usr/bin/env node
const { program } = require("commander");
const db = require("./db");
const chalk = require("chalk");

const AddNote = require("./commands/notes/add");
const ListNote = require("./commands/notes/list");
const DeleteNote = require("./commands/notes/delete");

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
    ListNote.listNotes(options);
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
    DeleteNote.deleteNotes(target);
  });


// Add note
program
  .arguments('[note...]')
  .action((noteParts) => {
    const note = noteParts.join(" ").trim();
    if(note) {
      AddNote.addNote(note);
    } else {
      program.help();
    }
  });

// Start program
program.parse(process.argv);
