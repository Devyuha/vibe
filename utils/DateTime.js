/*
    Purpose : This class hold the utilities to manipulate date and time.
*/

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

    static formatTime(time) {
        const [hour, minute, second] = time.split(':');
        let hour12 = hour % 12 || 12;
        const ampm = hour < 12 ? 'AM' : 'PM';
        const formattedTime = `${hour12}:${minute} ${ampm}`;

        return formattedTime;
    }
}

export default DateTime;
