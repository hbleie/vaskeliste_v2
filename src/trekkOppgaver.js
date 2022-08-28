
const jsonData = require('./vaskeliste.json')

function getWeek() {
    const yesterday = new Date(Date.now() - 86400000)
    const startDate = new Date(yesterday.getFullYear(), 0, 1);
    var days = Math.floor((yesterday - startDate) /
        (24 * 60 * 60 * 1000));

    var weekNumber = Math.ceil(days / 7);
    return (weekNumber);

}

function trekkOppgaver(data, week = getWeek()) {
    return [week, data[week.toString()][0], data[week.toString()][1], data[week.toString()][2]];
}


export default trekkOppgaver(jsonData);
