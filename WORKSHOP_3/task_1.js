const productsData = [
    {
        id: 1,
        name: "Ноутбук",
        category: "Электроника",
    },
    {
        id: 2,
        name: "Смартфон",
        category: "Электроника",
    },
    {
        id: 3,
        name: "Кофемашина",
        category: "Бытовая техника",
    },
    {
        id: 4,
        name: "Фотокамера",
        category: "Электроника",
    },
    {
        id: 5,
        name: "Микроволновая печь",
        category: "Бытовая техника",
    },
    {
        id: 6,
        name: "Книга",
        category: "Книги",
    },
    {
        id: 7,
        name: "Футболка",
        category: "Одежда",
    },
    {
        id: 8,
        name: "Шапка",
        category: "Одежда",
    },
    {
        id: 9,
        name: "Стул",
        category: "Мебель",
    },
    {
        id: 10,
        name: "Стол",
        category: "Мебель",
    },
];

const selectElement = document.querySelector('#category-select');

selectElement.addEventListener('change', () => {
    const value = selectElement.value;
    displayProducts(value);
});

function displayProducts(category) {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';

    productsData.forEach((product) => {
        if (category === '' || product.category === category) {
            const listItem = document.createElement('li');
            listItem.textContent = product.name;
            productsList.appendChild(listItem);
        }
    });
}
