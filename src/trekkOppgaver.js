
const jsonData = require('./vaskeliste.json')

function getWeek() {
    const currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    return result

}

function trekkOppgaver(data, week = getWeek()) {
    return [week, data[week.toString()][0], data[week.toString()][1], data[week.toString()][2]];
}


export default trekkOppgaver(jsonData);
