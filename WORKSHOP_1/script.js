// примеры от преподавателя

// доступ к элементу через snippet -> qs
const titleEl = document.querySelector('.title');
console.log(titleEl);
titleEl.textContent = 'Новый текст';

const buttonEl = document.querySelector('.button');
// добавить событие на кнопку через EventListener
// snippet -> ae 
// или через стрелочную ф. (e) => 
buttonEl.addEventListener('click', function (e) {
    // alert('Hello new JS')
    titleEl.textContent = inputEl.value;
    // XSS-уязвимость - можно добавить целый код
    // titleEl.innerHTML = `<a href="#">link</a>`;
});

const inputEl = document.querySelector('.input');
inputEl.addEventListener('input', function (e) {
    console.log(inputEl.value)
});


