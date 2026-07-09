
const numInput = document.getElementById('numInput');
const genTableBtn = document.getElementById('genTableBtn');
const tableResult = document.getElementById('tableResult');

function generateMultiplicationTable(n) {
    let html = '';
    for (let i = 1; i <= 10; i++) {
        html += `${n} × ${i} = ${n * i}\n`;
    }
    return html;
}

genTableBtn.addEventListener('click', () => {
    const num = parseInt(numInput.value);
    if (isNaN(num) || num < 1) {
        tableResult.textContent = 'Введите положительное число.';
        return;
    }
    tableResult.textContent = generateMultiplicationTable(num);
});


const products = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор'];
const generateCardsBtn = document.getElementById('generateCardsBtn');
const cardsContainer = document.getElementById('cardsContainer');

function createCard(productName) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${productName}</h3>
        <p>Отличный товар по выгодной цене!</p>
    `;
    return card;
}

function renderCards(productsArray) {
    cardsContainer.innerHTML = ''; // очищаем
    productsArray.forEach(product => {
        const card = createCard(product);
        cardsContainer.appendChild(card);
    });
}

generateCardsBtn.addEventListener('click', () => {
    renderCards(products);
});


const numberInput = document.getElementById('numberInput');
const addNumberBtn = document.getElementById('addNumberBtn');
const numberList = document.getElementById('numberList');
const sumDisplay = document.getElementById('sumDisplay');
const avgDisplay = document.getElementById('avgDisplay');

let numbers = [];

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    return calculateSum(arr) / arr.length;
}

function updateStats() {
    const sum = calculateSum(numbers);
    const avg = calculateAverage(numbers);
    sumDisplay.textContent = sum;
    avgDisplay.textContent = avg.toFixed(2);
}

function renderNumberList() {
    numberList.innerHTML = '';
    numbers.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        numberList.appendChild(li);
    });
}

addNumberBtn.addEventListener('click', () => {
    const val = parseFloat(numberInput.value);
    if (isNaN(val) || val === '') {
        alert('Введите число!');
        return;
    }
    numbers.push(val);
    renderNumberList();
    updateStats();
    numberInput.value = '';
});


const passwordInput = document.getElementById('passwordInput');
const checkPasswordBtn = document.getElementById('checkPasswordBtn');
const passwordResult = document.getElementById('passwordResult');

function checkPassword(password) {
    const errors = [];
    if (password.length < 8) errors.push('минимум 8 символов');
    if (password === "123456789" || password === "password") errors.push('серьезно? Используйте более сложный пароль. ну правда, что это за пароль? а пооригинальннее придумать не судьба? сложно придумать пароль, который будет содержать хотя бы одну заглавную букву и хотя бы одну цифру. Попробуйте что-то вроде "Password123" или "MySecurePass1". Ну уж точно не "123456789" или "password".');
    if (!/\d/.test(password)) errors.push('должна быть хотя бы одна цифра');
    if (!/[a-zA-Z]/.test(password)) errors.push('должна быть хотя бы одна буква');
    
    return {
        valid: errors.length === 0,
        errors: errors
    };
}

checkPasswordBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    const result = checkPassword(password);
    if (result.valid) {
        passwordResult.innerHTML = '<span class="success">✅ Пароль надёжный!</span>';
    } else {
        passwordResult.innerHTML = `<span class="error">❌ ${result.errors.join('; ')}</span>`;
    }
});

const menu = ['Главная', 'Каталог', 'О нас', 'Контакты'];
const generateMenuBtn = document.getElementById('generateMenuBtn');
const menuNav = document.getElementById('menuNav');

function generateMenuHTML(items) {
    let html = '<ul>';
    items.forEach(item => {
        // делаем ссылки вида #, но можно заменить на реальные
        html += `<li><a href="#">${item}</a></li>`;
    });
    html += '</ul>';
    return html;
}

generateMenuBtn.addEventListener('click', () => {
    menuNav.innerHTML = generateMenuHTML(menu);
});

const scopeDemoBtn = document.getElementById('scopeDemoBtn');
const scopeOutput = document.getElementById('scopeOutput');

// Глобальная переменная
let globalVar = 'Я глобальная переменная';

function scopeDemo() {
    // Локальная переменная
    let localVar = 'Я локальная переменная (внутри функции)';
    console.log('=== Область видимости ===');
    console.log('Глобальная переменная (доступна внутри функции):', globalVar);
    console.log('Локальная переменная (доступна только внутри):', localVar);
    // Попытка обратиться к локальной переменной снаружи вызовет ошибку, но мы её не делаем.
    // Вместо этого выведем сообщение в блок на странице.
    scopeOutput.innerHTML = `
        <strong>Результат в консоли:</strong><br>
        globalVar = "${globalVar}"<br>
        localVar = "${localVar}" (видна только внутри функции)<br>
        <span style="color: #6c757d;">Попробуйте вызвать localVar в консоли — получите ошибку, так как она локальная.</span>
    `;
    return localVar;
}

scopeDemoBtn.addEventListener('click', () => {
    scopeDemo();
    // Попытка доступа к localVar вне функции — будет ошибка, но мы её не делаем.
    // Просто показываем, что локальная переменная недоступна снаружи.
    console.log('Попытка доступа к localVar снаружи:');
    try {
        console.log(localVar); // выдаст ReferenceError, но мы перехватываем
    } catch (e) {
        console.log('Ошибка: localVar не определена (локальная переменная недоступна снаружи)');
    }
});