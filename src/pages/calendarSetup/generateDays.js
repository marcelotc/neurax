export function GetDates(daysToAdd) {
    var aryDates = [];

    for (var i = 1; i <= daysToAdd; i++) {
        var currentDate = new Date();
        var startDate = new Date(currentDate);

        var day = 60 * 60 * 24 * 1000;

        var dataAtual = new Date(startDate.getTime());
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