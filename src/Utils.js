function MakeDayText(index) {
    switch(index) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'INVALID';
    }
}

function MakeMonthText(index) {
    switch(index) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        default:
            return 'INVALID';
    }
}

function MakeTime(time) {
    const date = new Date(time * 1000);
    const am = date.getHours() < 12;
    const hour = am ? date.getHours() : date.getHours() - 12;
    const minutes = ('00' + date.getMinutes()).slice(-2);

    return `${hour}:${minutes} ${am ? 'am' : 'pm'}`;
}

function MakeDate(time) {
    const date = new Date(time * 1000);

    return `${MakeDayText(date.getDay())}, ${MakeMonthText(date.getMonth())} ${date.getDate()} ${date.getFullYear()}`;
}

function DegreesToDirections(degrees) {
    switch(Math.floor((degrees - 11.25) / 22.5)) {
        case -1:
            return 'N';
        case 0:
            return 'NNE';
        case 1:
            return 'NE';
        case 2:
            return 'ENE';
        case 3:
            return 'E';
        case 4:
            return 'ESE';
        case 5:
            return 'SE';
        case 6:
            return 'SSE';
        case 7:
            return 'S';
        case 8:
            return 'SSW';
        case 9:
            return 'SW';
        case 10:
            return 'WSW';
        case 11:
            return 'W';
        case 12:
            return 'WNW';
        case 13:
            return 'NW';
        case 14:
            return 'NNW';
        case 15:
            return 'N';
        default:
            return 'INVALID';
    }
}

const Utils = {MakeDayText, MakeMonthText, MakeTime, MakeDate, DegreesToDirections};

export default Utils;
export {MakeDayText, MakeMonthText, MakeTime, MakeDate, DegreesToDirections};