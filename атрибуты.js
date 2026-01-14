// Задание №1 - Получение атрибута value
let elem1 = document.querySelector('#elem');
console.log("Задание №1 - Атрибут value:", elem1.getAttribute('value'));

// Задание №2 - Получение атрибута class
let elem2 = document.querySelector('#elem2');
console.log("Задание №2 - Атрибут class:", elem2.getAttribute('class'));

// Задание №3 - Установка атрибута value
let elem3 = document.querySelector('#elem3');
elem3.setAttribute('value', 'text');
console.log("Задание №3 - Установлен атрибут value:", elem3.getAttribute('value'));

// Задание №4 - Установка атрибута class
let elem4 = document.querySelector('#elem4');
elem4.setAttribute('class', 'valid');
console.log("Задание №4 - Установлен атрибут class:", elem4.getAttribute('class'));

// Задание №5 - Удаление атрибута value
let elem5 = document.querySelector('#elem5');
console.log("Задание №5 - Атрибут value до удаления:", elem5.getAttribute('value'));
elem5.removeAttribute('value');
console.log("Задание №5 - Атрибут value после удаления:", elem5.getAttribute('value'));

// Задание №6 - Проверка наличия атрибута value
let elem6 = document.querySelector('#elem6');
let hasValueAttr = elem6.hasAttribute('value');
console.log("Задание №6 - Наличие атрибута value:", hasValueAttr);

// Задание №7 - Добавление data-text в конец текста по клику
let elem7 = document.querySelector('#elem7');
elem7.addEventListener('click', function() {
    this.textContent += this.dataset.text;
});

// Задание №8 - Добавление порядкового номера из data-num по клику
let task8Divs = document.querySelectorAll('.task8_div');
task8Divs.forEach(div => {
    div.addEventListener('click', function() {
        this.textContent += ' ' + this.dataset.num;
    });
});

// Задание №9 - Счетчик кликов с использованием data-атрибута
let task9Button1 = document.querySelector('#task9_button1');
let task9Button2 = document.querySelector('#task9_button2');
let task9Result = document.querySelector('#task9_result');

task9Button1.addEventListener('click', function() {
    let currentCount = parseInt(this.dataset.clickCount) || 0;
    currentCount++;
    this.dataset.clickCount = currentCount;
});

task9Button2.addEventListener('click', function() {
    let clickCount = task9Button1.dataset.clickCount || 0;
    task9Result.textContent = `Количество кликов: ${clickCount}`;
});

// Задание №10 - Проверка длины введенного текста по data-length
let task10Input = document.querySelector('#task10_input');
let task10Result = document.querySelector('#task10_result');

task10Input.addEventListener('blur', function() {
    let requiredLength = parseInt(this.dataset.length);
    let actualLength = this.value.length;
    
    if (actualLength === requiredLength) {
        task10Result.textContent = 'Правильное количество символов!';
        task10Result.className = 'success';
        this.className = 'success';
    } else {
        task10Result.textContent = `Ошибка! Нужно ввести ${requiredLength} символов, а введено ${actualLength}`;
        task10Result.className = 'error';
        this.className = 'error';
    }
});

// Задание №11 - Проверка длины текста в диапазоне data-min и data-max
let task11Input = document.querySelector('#task11_input');
let task11Result = document.querySelector('#task11_result');

task11Input.addEventListener('blur', function() {
    let minLength = parseInt(this.dataset.min);
    let maxLength = parseInt(this.dataset.max);
    let actualLength = this.value.length;
    
    if (actualLength >= minLength && actualLength <= maxLength) {
        task11Result.textContent = 'Длина текста в допустимом диапазоне!';
        task11Result.className = 'success';
        this.className = 'success';
    } else {
        task11Result.textContent = `Ошибка! Длина должна быть от ${minLength} до ${maxLength} символов, а сейчас ${actualLength}`;
        task11Result.className = 'error';
        this.className = 'error';
    }
});

// Задание №12 - Вычисление стоимости покупки из data-атрибутов с дефисами
let task12Elem = document.querySelector('#task12_elem');
task12Elem.addEventListener('click', function() {
    let price = parseInt(this.dataset.productPrice);
    let amount = parseInt(this.dataset.productAmount);
    let total = price * amount;
    this.textContent += ` (стоимость: ${total})`;
});

// Задание №13 - Запись порядкового номера в data-num через setAttribute
let task13Paragraphs = document.querySelectorAll('.task13_paragraph');
task13Paragraphs.forEach((paragraph, index) => {
    paragraph.setAttribute('data-num', index + 1);
    console.log(`Задание №13 - Абзац ${index + 1}:`, paragraph.getAttribute('data-num'));
});

// Задание №14 - Узнать количество классов элемента
let task14Elem = document.querySelector('#task14_16_elem');
let classCount = task14Elem.classList.length;
console.log("Задание №14 - Количество классов:", classCount);

// Задание №15 - Перебор классов элемента в цикле
console.log("Задание №15 - Классы элемента:");
task14Elem.classList.forEach(className => {
    console.log(" -", className);
});

// Задание №16 - Добавление класса xxx
task14Elem.classList.add('xxx');
console.log("Задание №16 - Классы после добавления xxx:", task14Elem.classList.toString());

// Задание №17 - Удаление классов www и zzz
let task17Elem = document.querySelector('#task17_19_elem');
console.log("Задание №17 - Классы до удаления:", task17Elem.classList.toString());
task17Elem.classList.remove('www', 'zzz');
console.log("Задание №17 - Классы после удаления www и zzz:", task17Elem.classList.toString());

// Задание №18 - Проверка наличия класса ggg
let task18Elem = document.querySelector('#task17_19_elem');
let hasClassGgg = task18Elem.classList.contains('ggg');
console.log("Задание №18 - Наличие класса ggg:", hasClassGgg);

// Задание №19 - Чередование класса www
let task19Elem = document.querySelector('#task17_19_elem');
console.log("Задание №19 - Классы до toggle:", task19Elem.classList.toString());
task19Elem.classList.toggle('www');
console.log("Задание №19 - Классы после первого toggle:", task19Elem.classList.toString());
task19Elem.classList.toggle('www');
console.log("Задание №19 - Классы после второго toggle:", task19Elem.classList.toString());