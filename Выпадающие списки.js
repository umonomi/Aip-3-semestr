
"use strict";

// Функция для безопасного добавления элементов
function safeAppend(element) {
    if (document.body) {
        document.body.appendChild(element);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(element);
        });
    }
}

console.log("=== РАБОТА С ВЫПАДАЮЩИМИ СПИСКАМИ В JAVASCRIPT ===");

// №1 - Вывод текста выбранного пункта в абзац
const select1 = document.createElement('select');
select1.id = 'select1';
const option1a = document.createElement('option');
option1a.textContent = 'один';
const option1b = document.createElement('option');
option1b.textContent = 'два';
const option1c = document.createElement('option');
option1c.textContent = 'три';
select1.appendChild(option1a);
select1.appendChild(option1b);
select1.appendChild(option1c);

const paragraph1 = document.createElement('p');
paragraph1.textContent = 'Выбранный пункт...';
const button1 = document.createElement('button');
button1.textContent = 'Показать выбранный';

safeAppend(select1);
safeAppend(button1);
safeAppend(paragraph1);

button1.addEventListener('click', function() {
    paragraph1.textContent = select1.value;
});
console.log("№1 - Селект с выводом в абзац создан");
console.log("-------------");

// №2 - Список годов с проверкой на високосность
const select2 = document.createElement('select');
select2.id = 'select2';
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Выберите год...';

for (let year = 2020; year <= 2030; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    select2.appendChild(option);
}

safeAppend(select2);
safeAppend(paragraph2);

select2.addEventListener('change', function() {
    const year = parseInt(this.value);
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    paragraph2.textContent = `${year} год - ${isLeap ? 'високосный' : 'не високосный'}`;
});
console.log("№2 - Список годов создан");
console.log("-------------");

console.log("=== АТРИБУТ VALUE В ВЫПАДАЮЩИХ СПИСКАХ В JAVASCRIPT ===");

// №1 - Дни недели с проверкой на выходной
const select3 = document.createElement('select');
select3.id = 'select3';
const paragraph3 = document.createElement('p');
paragraph3.textContent = 'Выберите день...';

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
days.forEach((day, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = day;
    select3.appendChild(option);
});

safeAppend(select3);
safeAppend(paragraph3);

select3.addEventListener('change', function() {
    const dayNumber = parseInt(this.value);
    const isWeekend = dayNumber >= 6;
    paragraph3.textContent = `${this.options[this.selectedIndex].text} - ${isWeekend ? 'выходной' : 'рабочий'}`;
});
console.log("№1 - Список дней недели создан");
console.log("-------------");

console.log("=== ИЗМЕНЕНИЕ ВЫБРАННОГО ПУНКТА СПИСКА НА JAVASCRIPT ===");

// №1 - Текущий месяц по умолчанию
const select4 = document.createElement('select');
select4.id = 'select4';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
months.forEach(month => {
    const option = document.createElement('option');
    option.textContent = month;
    select4.appendChild(option);
});

// Устанавливаем текущий месяц
const currentMonth = new Date().getMonth();
select4.selectedIndex = currentMonth;

safeAppend(select4);
console.log("№1 - Список месяцев с текущим месяцем создан");
console.log("-------------");

console.log("=== НОМЕР ВЫБРАННОГО ПУНКТА ВЫПАДАЮЩЕГО СПИСКА ===");

// №1 - Выбор пункта по номеру из инпута
const select5 = document.createElement('select');
select5.id = 'select5';
const input1 = document.createElement('input');
input1.type = 'number';
input1.placeholder = 'Введите номер пункта';

for (let i = 1; i <= 5; i++) {
    const option = document.createElement('option');
    option.textContent = `Пункт ${i}`;
    select5.appendChild(option);
}

safeAppend(input1);
safeAppend(select5);

input1.addEventListener('blur', function() {
    const index = parseInt(this.value) - 1;
    if (index >= 0 && index < select5.options.length) {
        select5.selectedIndex = index;
    }
});
console.log("№1 - Селект с выбором по номеру создан");
console.log("-------------");

// №2 - Текущий день по умолчанию
const select6 = document.createElement('select');
select6.id = 'select6';

const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
weekDays.forEach(day => {
    const option = document.createElement('option');
    option.textContent = day;
    select6.appendChild(option);
});

// Устанавливаем текущий день
const currentDay = new Date().getDay();
select6.selectedIndex = currentDay;

safeAppend(select6);
console.log("№2 - Список дней с текущим днем создан");
console.log("-------------");

console.log("=== МАССИВ ПУНКТОВ ВЫПАДАЮЩЕГО СПИСКА НА JAVASCRIPT ===");

// №1 - Добавление value в конец текста каждого пункта
const select7 = document.createElement('select');
select7.id = 'select7';

for (let i = 1; i <= 3; i++) {
    const option = document.createElement('option');
    option.value = `value${i}`;
    option.textContent = `Пункт ${i}`;
    select7.appendChild(option);
}

const button2 = document.createElement('button');
button2.textContent = 'Добавить value';

safeAppend(select7);
safeAppend(button2);

button2.addEventListener('click', function() {
    for (let option of select7) {
        option.textContent = `${option.textContent} (${option.value})`;
    }
});
console.log("№1 - Селект с добавлением value создан");
console.log("-------------");

console.log("=== РАБОТА С ПУНКТАМИ ВЫПАДАЮЩЕГО СПИСКА НА JAVASCRIPT ===");

// №1 - Добавление знаков к выбранному/невыбранным пунктам
const select8 = document.createElement('select');
select8.id = 'select8';

for (let i = 1; i <= 4; i++) {
    const option = document.createElement('option');
    option.textContent = `Элемент ${i}`;
    select8.appendChild(option);
}

const button3 = document.createElement('button');
button3.textContent = 'Добавить знаки';

safeAppend(select8);
safeAppend(button3);

button3.addEventListener('click', function() {
    for (let option of select8) {
        if (option.selected) {
            option.textContent = option.textContent + '!';
        } else {
            option.textContent = option.textContent + '?';
        }
    }
});
console.log("№1 - Селект с добавлением знаков создан");
console.log("-------------");

console.log("=== ВЫБОР ПУНКТА СПИСКА В JAVASCRIPT ===");

// №1 - Выбор последнего пункта
const select9 = document.createElement('select');
select9.id = 'select9';
const button4 = document.createElement('button');
button4.textContent = 'Выбрать последний';

for (let i = 1; i <= 5; i++) {
    const option = document.createElement('option');
    option.textContent = `Вариант ${i}`;
    select9.appendChild(option);
}

safeAppend(select9);
safeAppend(button4);

button4.addEventListener('click', function() {
    const lastOption = select9[select9.length - 1];
    lastOption.selected = true;
});
console.log("№1 - Селект с выбором последнего пункта создан");
console.log("-------------");

console.log("=== ПОЛУЧЕНИЕ ВЫБРАННОГО OPTION В JAVASCRIPT ===");

// №1 - Вывод текста выбранного пункта
const select10 = document.createElement('select');
select10.id = 'select10';
const button5 = document.createElement('button');
button5.textContent = 'Показать текст';

for (let i = 1; i <= 3; i++) {
    const option = document.createElement('option');
    option.textContent = `Элемент ${i}`;
    select10.appendChild(option);
}

safeAppend(select10);
safeAppend(button5);

button5.addEventListener('click', function() {
    const selectedOption = select10[select10.selectedIndex];
    console.log("№1 - Выбранный текст:", selectedOption.textContent);
});
console.log("№1 - Селект с выводом текста создан");
console.log("-------------");

// №2 - Добавление восклицательного знака к выбранному пункту
const select11 = document.createElement('select');
select11.id = 'select11';
const button6 = document.createElement('button');
button6.textContent = 'Добавить !';

for (let i = 1; i <= 3; i++) {
    const option = document.createElement('option');
    option.textContent = `Пункт ${i}`;
    select11.appendChild(option);
}

safeAppend(select11);
safeAppend(button6);

button6.addEventListener('click', function() {
    const selectedOption = select11[select11.selectedIndex];
    selectedOption.textContent = selectedOption.textContent + '!';
});
console.log("№2 - Селект с добавлением ! создан");
console.log("-------------");

// Если документ уже загружен, добавляем элементы сразу
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM загружен, все элементы добавлены");
    });
} else {
    console.log("DOM уже загружен, все элементы добавлены");
}
