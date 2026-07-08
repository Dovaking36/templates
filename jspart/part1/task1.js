// Task1
const btn = document.getElementById('btn_send');
const inputField = document.getElementById('inputField');
btn.addEventListener('click', function() {
    var name = inputField.value;
    if (name.trim() === '') {
        alert('Пожалуйста, введите ваше имя.');
        return;
    }
    alert('Привет, ' + name + '!');
})
// Task2 & Task5
const btn2 = document.getElementById('btn_send2');
const inp_cost = document.getElementById('inp_cost');
const inp_discount = document.getElementById('inp_discount');
const result = document.getElementById('result');

btn2.addEventListener('click', function() {
    var cost = parseFloat(inp_cost.value);
    var discount = parseFloat(inp_discount.value);
    var productType = '';

    if (isNaN(cost) || isNaN(discount)) {
        alert('Пожалуйста, введите корректные значения.');
        return;
    }

    if (discount < 0 || discount > 100) {
        alert('Пожалуйста, введите скидку от 0 до 100.');
        return;
    }
    if (cost === 0){
        productType = 'Бесплатный продукт';
    }
    if (cost > 0 && cost <= 1000) {
        productType = 'Дешёвый продукт';
    }
    if (cost > 1000 && cost <= 10000) {
        productType = 'Обычный продукт';
    }
    if (cost > 10000) {
        productType = 'Дорогой продукт';
    }

    var finalCost = cost - (cost * discount / 100);
    result.innerHTML = 'Итоговая цена: ' + finalCost.toFixed(2) + ' руб.' + '<br>Тип продукта: ' + productType;
});
// Task3
const btn3 = document.getElementById('btn_send3');
const inp_age = document.getElementById('inp_age');
const result2 = document.getElementById('result3');

btn3.addEventListener('click', function() {
    var age = parseInt(inp_age.value);
    if (isNaN(age)) {
        alert('Пожалуйста, введите корректный возраст.');
        return;
    }
    if (age < 18) {
        result2.innerHTML = 'Доступ запрещён';
        return;
    }
    if (age >= 18 && age <= 60) {
        result2.innerHTML = 'Доступ разрешён';
        return;
    }
    if (age > 60) {
        result2.innerHTML = 'Льготный доступ разрешён';
        return;
    }
});
// Task4
const btn4 = document.getElementById('btn_send4');
const result3 = document.getElementById('result4');
const name1 = document.getElementById('inp_name');
const email = document.getElementById('inp_email');
const password = document.getElementById('inp_password');

btn4.addEventListener('click', function() {
    var nameValue = name1.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if (nameValue === '' || emailValue === '' || passwordValue === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    result3.innerHTML = 'Данные успешно отправлены!';
});

//Task6

const btn_switch = document.getElementById('btn_switch');
const switch_result = document.getElementById('switch_result');

btn_switch.addEventListener('click', function() {
    if (switch_result.classList.contains('case0')) {
        switch_result.classList.remove('case0');
        switch_result.classList.add('case1');
        switch_result.innerHTML = '1';
    } else {
        switch_result.classList.remove('case1');
        switch_result.classList.add('case0');
        switch_result.innerHTML = '0';
    }
});