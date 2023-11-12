// подсказки от преподавателя
// const contentEl = document.querySelector('.content');

// // snippet -> cel - Create Element
// const h1El = document.createElement('h1');
// // предыдущему элементу добавит класс 'title'
// h1E1.classList.add('title');
// h1El.textContent = 1;
// // внутрь блока .content будет добавлен элемент h1 с классом title
// contentEl.appendChild(h1El);

const contentEl = document.querySelector('.content');
const btnAdd = document.querySelector('.add');
const btnDel = document.querySelector('.del');
const btnClone = document.querySelector('.clone');
const divEl = document.querySelector('.block');

btnAdd.addEventListener('click', () => {
    // создали новый элемент
    const newDivEl = document.createElement('div');
    // добавили ему класс
    newDivEl.classList.add('block');
    // добавили элементу контент
    newDivEl.textContent = contentEl.children.length + 1;
    // вставили элемент div.block в div.content
    contentEl.appendChild(newDivEl);
});

btnDel.addEventListener('click', () => {
    if (contentEl.children.length > 0) {
        const lastBox = contentEl.lastChild;
        contentEl.removeChild(lastBox);
    }
});

btnClone.addEventListener('click', () => {
    const lastBox = contentEl.lastChild;
    const clone = lastBox.cloneNode(true);
    contentEl.appendChild(clone);
});
