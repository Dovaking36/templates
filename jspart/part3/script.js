// task 1
const products = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор'];
const catalog = document.getElementById('catalog');
const addProductBtn = document.getElementById('addProductBtn');

addProductBtn.addEventListener('click', () => {
    var newProduct = products[Math.floor(Math.random() * products.length)];
    const productElement = document.createElement('li');
    productElement.className = 'product';
    productElement.textContent = newProduct;
    catalog.appendChild(productElement);
});

// task 2
const searchInput = document.getElementById('searchInput');
const filteredProducts = document.getElementById('filteredProducts');
const filterProductBtn = document.getElementById('filterBtn'); 

const task2products = [
    'Ноутбук', 'Мышь', 'Клавиатура', 'Монитор', 'Принтер', 'Сканер',
    'Колонки', 'Веб-камера', 'Микрофон', 'Наушники', 'Суперкомпьютер',
    'Графический планшет', 'Игровая консоль', 'Смарт-часы', 'Фитнес-браслет',
    'Внешний жесткий диск', 'USB-флешка', 'Карта памяти', 'Проектор', 'Смартфон',
    'Беспроводная зарядка', 'Виртуальная реальность', '3D-принтер',
    'Робот-пылесос', 'Электронная книга', 'Смарт-колонка', 'Геймпад',
    'Видеокарта', 'Материнская плата', 'Процессор', 'Оперативная память',
    'Блок питания', 'Корпус компьютера', 'Система охлаждения',
    'Монитор для игр', 'Клавиатура с подсветкой', 'Мышь с высокой DPI',
    'Веб-камера с высоким разрешением'
];

filterProductBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const currentItems = filteredProducts.querySelectorAll('li');

    if (currentItems.length > 0) {

        currentItems.forEach(item => item.classList.add('product-exit'));


        setTimeout(() => {
            filteredProducts.innerHTML = ''; 
            addNewProducts(searchTerm);      
        }, 300);
    } else {
        addNewProducts(searchTerm);
    }
});
function addNewProducts(searchTerm) {
    task2products.forEach(product => {
        if (product.toLowerCase().includes(searchTerm)) {
            const li = document.createElement('li');
            li.className = 'product-enter'; 
            li.textContent = product;
            filteredProducts.appendChild(li);
        }
    });
    if (filteredProducts.children.length === 0) {
        const li = document.createElement('li');
        li.className = 'product-enter'; 
        li.textContent = 'Нет совпадений';
        filteredProducts.appendChild(li);
    }
}

