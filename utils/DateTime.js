class DateTime {
    static getDateAndTime() {
        const now = new Date();
        const date = now.toISOString().split("T")[0];
        const time = now.toTimeString().split(" ")[0];

        return {
            date,
            time
        }
    }
}

module.exports = DateTime;
