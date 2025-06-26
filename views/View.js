/*
    Purpose : Holds the color scheme data for types of text.
*/

const chalk = require("chalk")

const text = chalk.hex("#A7C1A8");
const primary = chalk.hex("#3674B5");
const info = chalk.hex("#03A6A1");
const warning  = chalk.hex("#FFB823");
const danger = chalk.hex("#FF3F33");
const success = chalk.hex("#06923E");

module.exports = {
    text,
    info,
    warning,
    danger,
    success,
    primary
}
