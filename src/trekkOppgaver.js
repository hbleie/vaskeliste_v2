
const jsonData = require('./vaskeliste.json')

function getWeek() {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));

    var weekNumber = Math.ceil(days / 7);
    return (weekNumber);

}

function trekkOppgaver(data, week = getWeek()) {
    return [week, data[week.toString()][0], data[week.toString()][1], data[week.toString()][2]];
}


export default trekkOppgaver(jsonData);
