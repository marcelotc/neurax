export function GetDates(daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd - 1; i++) {
        var currentDate = new Date();
        var startDate = new Date(currentDate);

        // seconds * minutes * hours * milliseconds = 1 day 
        var day = 60 * 60 * 24 * 1000;

        var dataAtual = new Date(startDate.getTime() + day);
        currentDate.setDate(dataAtual.getDate() + i);

        var year = currentDate.getFullYear()
        var month = currentDate.getMonth() + 1
        var date = currentDate.getDate()

        if (date < 10) {
            date = '0' + date;
        }
        if (month < 10) {
            month = '0' + month;
        }

        aryDates.push(year + "-" + month + "-" + date);
    }

    return aryDates;
}
function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "domingo";
    weekdays[1] = "segunda";
    weekdays[2] = "terca";
    weekdays[3] = "quarta";
    weekdays[4] = "quinta";
    weekdays[5] = "sexta";
    weekdays[6] = "sabado";

    return weekdays[dayIndex];
}

export function dataAtual() {

    var dateString = new Date();

    let year = dateString.getFullYear();
    let month = dateString.getMonth() + 1;
    let date = dateString.getDate();

    if (date < 10) {
        date = '0' + date;
    }
    if (month < 10) {
        month = '0' + month;
    }

    const dataAtual = year + '-' + month + '-' + date

    return dataAtual;
}