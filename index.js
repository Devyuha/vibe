#!/usr/bin/env node
const { program } = require("commander");
const db = require("./db");
const chalk = require("chalk");

const addNote = require("./commands/add");
const listNotes = require("./commands/list");
const deleteNotes = require("./commands/delete");

program
  .version("1.0.0")
  .description("Vibe - A simple CLI mood note tracker");

program
  .command("list")
  .description("List saved notes")
  .option("-d, --date <date>", "Filter by date or use 'today'")
  .action((options) => {
    listNotes(options.date);
  });

program
  .command("delete <target>")
  .description("Delete note by id or date")
  .action((target) => {
    deleteNotes(target);
  });

program
  .arguments('[note...]')
  .action((noteParts) => {
    const note = noteParts.join(" ").trim();
    if(note) {
      addNote(note);
    } else {
      program.help();
    }
  });

program.parse(process.argv);
