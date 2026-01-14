function updateDateTime() {
    let date = new Date();
    
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    
    let outputElement = document.getElementById('output');
    outputElement.innerHTML = `
        <div class="date-info">Текущий день: ${currentDay}</div>
        <div class="date-info">Текущий месяц: ${currentMonth}</div>
        <div class="date-info">Текущий год: ${currentYear}</div>
    `;
    
    let timeElement = document.getElementById('timeOutput');
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `Текущее время: ${hours}:${minutes}:${seconds}`;

    let dayOfWeek = date.getDay();
    let isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    let daysUntilSunday = (7 - dayOfWeek) % 7;
    
    let months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
    let currentMonthName = months[date.getMonth()];
    
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let currentDayName = days[dayOfWeek];

    let weekInfoElement = document.getElementById('weekInfo');
    if (!weekInfoElement) {
        weekInfoElement = document.createElement('div');
        weekInfoElement.id = 'weekInfo';
        weekInfoElement.className = 'week-info';
        document.body.appendChild(weekInfoElement);
    }
    
    weekInfoElement.innerHTML = `
        <p>День недели: ${currentDayName} (номер: ${dayOfWeek})</p>
        <p>Месяц: ${currentMonthName}</p>
        <p>Тип дня: ${isWeekend ? 'выходной' : 'рабочий'}</p>
        <p>До воскресенья: ${daysUntilSunday} дней</p>
    `;

    let birthday = new Date(2007, 4, 25);
    let birthdayDay = birthday.getDay();
    
    let newYear2025 = new Date(2025, 0, 1);
    
    let date1 = new Date(1988, 2, 1);
    let date2 = new Date(2000, 0, 10);
    let diffDays = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
    
    let now = new Date();
    let monthsDiff = (now.getFullYear() - birthday.getFullYear()) * 12 + (now.getMonth() - birthday.getMonth());
    
    let date3 = new Date(2000, 8, 1);
    let date4 = new Date(2010, 1, 15);
    let diffMs = Math.abs(date4 - date3);
    let diffDays2 = diffMs / (1000 * 60 * 60 * 24);
    let monthsDiff2 = (date4.getFullYear() - date3.getFullYear()) * 12 + (date4.getMonth() - date3.getMonth());
    let yearsDiff = date4.getFullYear() - date3.getFullYear();

    let dateCalcElement = document.getElementById('dateCalculations');
    if (!dateCalcElement) {
        dateCalcElement = document.createElement('div');
        dateCalcElement.id = 'dateCalculations';
        dateCalcElement.className = 'date-calculations';
        document.body.appendChild(dateCalcElement);
    }
    
    dateCalcElement.innerHTML = `
        <h3>Расчеты с датами (№10-17)</h3>
        <p>День недели в день рождения (25.05.2007): ${days[birthdayDay]}</p>
        <p>Timestamp 1 января 2025: ${newYear2025.getTime()}</p>
        <p>Дней между 1.03.1988 и 10.01.2000: ${Math.floor(diffDays)}</p>
        <p>Месяцев с дня рождения: ${monthsDiff}</p>
        <p>Миллисекунд между 1.09.2000 и 15.02.2010: ${diffMs}</p>
        <p>Разница в днях: ${Math.floor(diffDays2)}</p>
        <p>Разница в месяцах: ${monthsDiff2}</p>
        <p>Разница в годах: ${yearsDiff}</p>
    `;

    let autoCorrectElement = document.getElementById('autoCorrectDates');
    if (!autoCorrectElement) {
        autoCorrectElement = document.createElement('div');
        autoCorrectElement.id = 'autoCorrectDates';
        autoCorrectElement.className = 'auto-correct-dates';
        document.body.appendChild(autoCorrectElement);
        
        autoCorrectElement.innerHTML = `
            <h3>Автоматическая корректировка дат (1-12 задание)</h3>
            <p>№1: new Date(2018, 1, 35) = ${date18}</p>
            <p>№2: new Date(2018, 15, 1) = ${date19}</p>
            <p>№3: new Date(2018, 3, 31) = ${date20}</p>
            <p>№4: new Date(2018, 1, 31) = ${date21}</p>
            <p>№5: new Date(2018, 12, 33) = ${date22}</p>
            <p>№6: new Date(2018, 33, 33) = ${date23}</p>
            <p>№7: new Date(2018, 5, 0) = ${date24}</p>
            <p>№8: new Date(2018, 0, 0) = ${date25}</p>
            <p>№9: new Date(2018, -12, -33) = ${date26}</p>
            <p>№10: new Date(2018, 0, 1, 23, 0, 60) = ${date27}</p>
            <p>№11: new Date(2018, 0, 1, 23, 60, 0) = ${date28}</p>
            <p>№12: new Date(2018, 0, 1, 100, 100, 100) = ${date29}</p>
        `;
    }


    let dateFunctionsElement = document.getElementById('dateFunctions');
    if (!dateFunctionsElement) {
        dateFunctionsElement = document.createElement('div');
        dateFunctionsElement.id = 'dateFunctions';
        dateFunctionsElement.className = 'date-functions';
        document.body.appendChild(dateFunctionsElement);
        
        dateFunctionsElement.innerHTML = `
            <p>Последний день февраля 2020: ${getLastDayOfMonth(1, 2020)}</p>
            <p>День недели последнего дня мая 2025: ${days[lastDayMay2025.getDay()]}</p>
            <p>2020 год високосный? ${isLeap(2020)}</p>
            <p>2021 год високосный? ${isLeap(2021)}</p>
            <p>31 января 2025 корректна? ${checkDate(2025, 0, 31)}</p>
            <p>32 января 2025 корректна? ${checkDate(2025, 0, 32)}</p>
            <p>День недели 31 декабря этого года: ${days[dec31ThisYear.getDay()]}</p>
            <p>День недели первого числа прошлого месяца: ${days[firstDayPrevMonth.getDay()]}</p>
            <p>День недели месяц назад: ${days[sameDayLastMonth.getDay()]}</p>
            <p>День недели 31 декабря следующего года: ${days[dec31NextYear.getDay()]}</p>
            <p>День недели через год: ${days[sameDayNextYear.getDay()]}</p>
            <p>День недели год назад: ${days[sameDayLastYear.getDay()]}</p>
        `;
    }

    let dateCalculationsElement = document.getElementById('dateCalculationsAdvanced');
    if (!dateCalculationsElement) {
        dateCalculationsElement = document.createElement('div');
        dateCalculationsElement.id = 'dateCalculationsAdvanced';
        dateCalculationsElement.className = 'date-calculations-advanced';
        document.body.appendChild(dateCalculationsElement);
        
        dateCalculationsElement.innerHTML = `
            <p>Дней между 1 января и 10 сентября: ${Math.floor(days41)}</p>
            <p>Дней между 20 текущего и 10 следующего: ${Math.floor(days42)}</p>
            <p>Часов между вчерашним полднем и сейчас: ${Math.floor(hours43)}</p>
            <p>Часов с начала дня: ${Math.floor(hours44)}</p>
            <p>Часов до конца дня: ${Math.floor(hours45)}</p>
            <p>1 января в выходные с 2000 года: ${weekendJan1Count}</p>
            <p>Секунд с начала дня: ${Math.floor(seconds47)}</p>
            <p>Секунд до конца дня: ${Math.floor(seconds48)}</p>
            <p>Дней до нового года: ${Math.floor(days49)}</p>
            <p>Пятниц 13-е в этом году: ${friday13Count}</p>
            <p>Год 3 месяца назад: ${threeMonthsAgo.getFullYear()}</p>
            <p>День недели последнего дня месяца: ${days[lastDayThisMonth.getDay()]}</p>
            <p>Текущий год високосный? ${isCurrentLeap}</p>
            <p>Предыдущий високосный год: ${prevLeapYear}</p>
            <p>Следующий високосный год: ${nextLeapYear}</p>
        `;
    }

    let dateComparisonElement = document.getElementById('dateComparison');
    if (!dateComparisonElement) {
        dateComparisonElement = document.createElement('div');
        dateComparisonElement.id = 'dateComparison';
        dateComparisonElement.className = 'date-comparison';
        document.body.appendChild(dateComparisonElement);
        
        let comparisonResult56 = '';
        if (date1 > date2) {
            comparisonResult56 = date1 + " больше чем " + date2;
        } else if (date1 < date2) {
            comparisonResult56 = date1 + " меньше чем " + date2;
        } else {
            comparisonResult56 = "Даты равны";
        }
        
        dateComparisonElement.innerHTML = `
            <p>Сравнение ${date1} и ${date2}: ${comparisonResult56}</p>
            <p>Знак Зодиака для ${testDate}: ${zodiacSign}</p>
            <p>Полдень уже прошел? ${isNoonPassed}</p>
            <p>Половина месяца прошла? ${isHalfMonthPassed}</p>
        `;
    }

}

document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

let date = new Date();
console.log("Текущий день: " + date.getDate());
console.log("Текущий месяц: " + (date.getMonth() + 1));
console.log("Текущий год: " + date.getFullYear());

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

function convertDateFormat(dateStr) {
    let arr = dateStr.split('-');
    let result = arr[2] + '.' + arr[1] + '.' + arr[0];
    return result;
}

let inputDate = '2025-12-31';
let convertedDate = convertDateFormat(inputDate);

console.log("Исходная дата: " + inputDate);
console.log("Преобразованная дата: " + convertedDate);

let convertedDateAlt = inputDate.split('-').reverse().join('.');
console.log("Альтернативное преобразование: " + convertedDateAlt);

let dayOfWeek = date.getDay();
console.log("Номер текущего дня недели: " + dayOfWeek);

let isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
console.log("Сегодня " + (isWeekend ? "выходной" : "рабочий день"));

let daysUntilSunday = (7 - dayOfWeek) % 7;
console.log("Дней до ближайшего воскресенья: " + daysUntilSunday);

let months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let currentMonthName = months[date.getMonth()];
console.log("Текущий месяц: " + currentMonthName);

let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let currentDayName = days[dayOfWeek];
console.log("Текущий день недели: " + currentDayName);

let birthday = new Date(2007, 4, 25);
let birthdayDay = birthday.getDay();
console.log("День недели в день рождения: " + days[birthdayDay]);

let newYear2025 = new Date(2025, 0, 1);
console.log("Timestamp 1 января 2025: " + newYear2025.getTime());

let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diffDays = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log("Дней между датами: " + Math.floor(diffDays));

let now = new Date();
let monthsDiff = (now.getFullYear() - birthday.getFullYear()) * 12 + (now.getMonth() - birthday.getMonth());
console.log("Месяцев с дня рождения: " + monthsDiff);

let date3 = new Date(2000, 8, 1);
let date4 = new Date(2010, 1, 15);
let diffMs = Math.abs(date4 - date3);
console.log("Миллисекунд между датами: " + diffMs);

let diffDays2 = diffMs / (1000 * 60 * 60 * 24);
console.log("Разница в днях: " + Math.floor(diffDays2));

let monthsDiff2 = (date4.getFullYear() - date3.getFullYear()) * 12 + (date4.getMonth() - date3.getMonth());
console.log("Разница в месяцах: " + monthsDiff2);

let yearsDiff = date4.getFullYear() - date3.getFullYear();
console.log("Разница в годах: " + yearsDiff);

let date18 = new Date(2018, 1, 35);
console.log("new Date(2018, 1, 35) = " + date18);

let date19 = new Date(2018, 15, 1);
console.log("new Date(2018, 15, 1) = " + date19);

let date20 = new Date(2018, 3, 31);
console.log("new Date(2018, 3, 31) = " + date20);

let date21 = new Date(2018, 1, 31);
console.log("new Date(2018, 1, 31) = " + date21);

let date22 = new Date(2018, 12, 33);
console.log("new Date(2018, 12, 33) = " + date22);

let date23 = new Date(2018, 33, 33);
console.log("new Date(2018, 33, 33) = " + date23);

let date24 = new Date(2018, 5, 0);
console.log("new Date(2018, 5, 0) = " + date24);

let date25 = new Date(2018, 0, 0);
console.log("new Date(2018, 0, 0) = " + date25);

let date26 = new Date(2018, -12, -33);
console.log("new Date(2018, -12, -33) = " + date26);

let date27 = new Date(2018, 0, 1, 23, 0, 60);
console.log("new Date(2018, 0, 1, 23, 0, 60) = " + date27);

let date28 = new Date(2018, 0, 1, 23, 60, 0);
console.log("new Date(2018, 0, 1, 23, 60, 0) = " + date28);

let date29 = new Date(2018, 0, 1, 100, 100, 100);
console.log("new Date(2018, 0, 1, 100, 100, 100) = " + date29);

function getLastDayOfMonth(month, year) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log("Последний день февраля 2020: " + getLastDayOfMonth(1, 2020));

let lastDayMay2025 = new Date(2025, 4, getLastDayOfMonth(4, 2025));
console.log("День недели последнего дня мая 2025: " + days[lastDayMay2025.getDay()]);

function isLeap(year) {
    let date = new Date(year, 2, 0);
    return date.getDate() === 29;
}
console.log("2020 год високосный? " + isLeap(2020));
console.log("2021 год високосный? " + isLeap(2021));

function checkDate(year, month, day) {
    let date = new Date(year, month, day);
    return date.getFullYear() === year && 
           date.getMonth() === month && 
           date.getDate() === day;
}
console.log("31 января 2025 корректна? " + checkDate(2025, 0, 31));
console.log("32 января 2025 корректна? " + checkDate(2025, 0, 32));

let dec31ThisYear = new Date(now.getFullYear(), 11, 31);
console.log("День недели 31 декабря этого года: " + days[dec31ThisYear.getDay()]);

let firstDayPrevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
console.log("День недели первого числа прошлого месяца: " + days[firstDayPrevMonth.getDay()]);

let sameDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log("День недели месяц назад: " + days[sameDayLastMonth.getDay()]);

let dec31NextYear = new Date(now.getFullYear() + 1, 11, 31);
console.log("День недели 31 декабря следующего года: " + days[dec31NextYear.getDay()]);

let sameDayNextYear = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log("День недели через год: " + days[sameDayNextYear.getDay()]);

let sameDayLastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log("День недели год назад: " + days[sameDayLastYear.getDay()]);

let jan1 = new Date(now.getFullYear(), 0, 1);
let sep10 = new Date(now.getFullYear(), 8, 10);
let days41 = Math.abs(sep10 - jan1) / (1000 * 60 * 60 * 24);
console.log("Дней между 1 января и 10 сентября: " + Math.floor(days41));

let day20 = new Date(now.getFullYear(), now.getMonth(), 20);
let day10Next = new Date(now.getFullYear(), now.getMonth() + 1, 10);
let days42 = Math.abs(day10Next - day20) / (1000 * 60 * 60 * 24);
console.log("Дней между 20 текущего и 10 следующего: " + Math.floor(days42));

let yesterdayNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let hours43 = Math.abs(now - yesterdayNoon) / (1000 * 60 * 60);
console.log("Часов между вчерашним полднем и сейчас: " + Math.floor(hours43));

let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let hours44 = Math.abs(now - startOfDay) / (1000 * 60 * 60);
console.log("Часов с начала дня: " + Math.floor(hours44));

let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let hours45 = Math.abs(endOfDay - now) / (1000 * 60 * 60);
console.log("Часов до конца дня: " + Math.floor(hours45));

let weekendJan1Count = 0;
for (let year = 2000; year <= now.getFullYear(); year++) {
    let jan1 = new Date(year, 0, 1);
    if (jan1.getDay() === 0 || jan1.getDay() === 6) {
        weekendJan1Count++;
    }
}
console.log("1 января в выходные с 2000 года: " + weekendJan1Count);

let seconds47 = Math.abs(now - startOfDay) / 1000;
console.log("Секунд с начала дня: " + Math.floor(seconds47));

let seconds48 = Math.abs(endOfDay - now) / 1000;
console.log("Секунд до конца дня: " + Math.floor(seconds48));

let nextYear = new Date(now.getFullYear() + 1, 0, 1);
let days49 = Math.abs(nextYear - now) / (1000 * 60 * 60 * 24);
console.log("Дней до нового года: " + Math.floor(days49));

let friday13Count = 0;
for (let month = 0; month < 12; month++) {
    let date = new Date(now.getFullYear(), month, 13);
    if (date.getDay() === 5) {
        friday13Count++;
    }
}
console.log("Пятниц 13-е в этом году: " + friday13Count);

let threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
console.log("Год 3 месяца назад: " + threeMonthsAgo.getFullYear());

let lastDayThisMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
console.log("День недели последнего дня месяца: " + days[lastDayThisMonth.getDay()]);

let isCurrentLeap = isLeap(now.getFullYear());
console.log("Текущий год високосный? " + isCurrentLeap);

let prevLeapYear = now.getFullYear() - 1;
while (!isLeap(prevLeapYear)) {
    prevLeapYear--;
}
console.log("Предыдущий високосный год: " + prevLeapYear);

let nextLeapYear = now.getFullYear() + 1;
while (!isLeap(nextLeapYear)) {
    nextLeapYear++;
}
console.log("Следующий високосный год: " + nextLeapYear);

let date111 = '09-21';
let date222 = '09-23';
console.log("Сравнение " + date111 + " и " + date222);
if (date111 > date222) {
    console.log(date111 + " больше чем " + date222);
} else if (date111 < date222) {
    console.log(date111 + " меньше чем " + date222);
} else {
    console.log("Даты равны");
}

function getZodiacSign(dateStr) {
    let [month, day] = dateStr.split('-').map(Number);
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Овен';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Телец';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Близнецы';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Рак';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Лев';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Дева';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Весы';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Скорпион';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Стрелец';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Козерог';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Водолей';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Рыбы';
    return 'Неизвестно';
}

let testDate = '08-20';
let zodiacSign = getZodiacSign(testDate);
console.log("Знак Зодиака для " + testDate + ": " + zodiacSign);

let currentTime = new Date();
let noonToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
let isNoonPassed = currentTime > noonToday;
console.log("Полдень уже прошел? " + isNoonPassed);

let fifteenthThisMonth = new Date(now.getFullYear(), now.getMonth(), 15);
let isHalfMonthPassed = currentTime > fifteenthThisMonth;
console.log("Половина месяца прошла? " + isHalfMonthPassed);