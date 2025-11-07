/*
    Purpose : Holds the color scheme data for types of text.
*/

function hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
        hex = hex.split("").map(c => c + c).join("");
    }
    const num = parseInt(hex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function colorize(hex) {
    const [r, g, b] = hexToRgb(hex);

    return (text) =>
        `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;
}

const text     = colorize("#A7C1A8");
const primary  = colorize("#3674B5");
const info     = colorize("#03A6A1");
const warning  = colorize("#FFB823");
const danger   = colorize("#FF3F33");
const success  = colorize("#06923E");

module.exports = {
    text,
    info,
    warning,
    danger,
    success,
    primary
}
