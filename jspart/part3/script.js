
const products = [
  "Ноутбук",
  "Мышь",
  "Клавиатура",
  "Монитор",
  "Принтер",
  "Сканер",
  "Колонки",
  "Веб-камера",
  "Микрофон",
  "Наушники",
  "Суперкомпьютер",
  "Графический планшет",
  "Игровая консоль",
  "Смарт-часы",
  "Фитнес-браслет",
  "Внешний жесткий диск",
  "USB-флешка",
  "Карта памяти",
  "Проектор",
  "Смартфон",
  "Беспроводная зарядка",
  "Виртуальная реальность",
  "3D-принтер",
  "Робот-пылесос",
  "Электронная книга",
  "Смарт-колонка",
  "Геймпад",
  "Видеокарта",
  "Материнская плата",
  "Процессор",
  "Оперативная память",
  "Блок питания",
  "Корпус компьютера",
  "Система охлаждения",
  "Монитор для игр",
  "Клавиатура с подсветкой",
  "Мышь с высокой DPI",
  "Веб-камера с высоким разрешением",
];
// task 1
const catalog = document.getElementById("catalog");
const addProductBtn = document.getElementById("addProductBtn");

addProductBtn.addEventListener("click", () => {
  var newProduct = products[Math.floor(Math.random() * products.length)];
  const productElement = document.createElement("li");
  productElement.className = "product";
  productElement.textContent = newProduct;
  catalog.appendChild(productElement);
});

// task 2
const searchInput = document.getElementById("searchInput");
const filteredProducts = document.getElementById("filteredProducts");
const filterProductBtn = document.getElementById("filterBtn");

filterProductBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const currentItems = filteredProducts.querySelectorAll("li");

  if (currentItems.length > 0) {
    currentItems.forEach((item) => item.classList.add("product-exit"));

    setTimeout(() => {
      filteredProducts.innerHTML = "";
      addNewProducts(searchTerm);
    }, 300);
  } else {
    addNewProducts(searchTerm);
  }
});
function addNewProducts(searchTerm) {
  products.forEach((product) => {
    if (product.toLowerCase().includes(searchTerm)) {
      const li = document.createElement("li");
      li.className = "product-enter";
      li.textContent = product;
      filteredProducts.appendChild(li);
    }
  });
  if (filteredProducts.children.length === 0) {
    const li = document.createElement("li");
    li.className = "product-enter";
    li.textContent = "Нет совпадений";
    filteredProducts.appendChild(li);
  }
}

// task 3
const users = [
  { id: 1, name: "Анна" },
  { id: 2, name: "Иван" },
  { id: 3, name: "Олег" },
];

document.getElementById("findUserBtn").addEventListener("click", () => {
  const id = parseInt(document.getElementById("userIdInput").value);
  const user = users.find((u) => u.id === id);
  const resultDiv = document.getElementById("userResult");
  resultDiv.textContent = user
    ? `Найден: ${user.name}`
    : "Пользователь не найден";
});

// task 4
const prices = [500, 1200, 3000, 700];

document.getElementById("showPricesBtn").addEventListener("click", () => {
  const discounted = prices.map((p) => Math.round(p * 0.9));
  const formatted = prices.map((p) => `Цена товара: ${p} ₽`);
  document.getElementById("pricesResult").innerHTML =
    `<p>Исходные: ${prices.join(", ")}</p>` +
    `<p>Скидка 10%: ${discounted.join(", ")}</p>` +
    `<ul>${formatted.map((s) => `<li>${s}</li>`).join("")}</ul>`;
});
// task 5
const tasks = [
  { id: 1, title: "Сделать HTML", completed: true },
  { id: 2, title: "Сделать CSS", completed: false },
  { id: 3, title: "Сделать JS", completed: false },
];
const tasksList = document.getElementById("tasksList");

function renderTasks(filtered) {
  tasksList.innerHTML = filtered
    .map((t) => `<li>${t.completed ? "✅" : "⬜"} ${t.title}</li>`)
    .join("");
}

document
  .getElementById("showAllTasksBtn")
  .addEventListener("click", () => renderTasks(tasks));
document
  .getElementById("showCompletedBtn")
  .addEventListener("click", () =>
    renderTasks(tasks.filter((t) => t.completed)),
  );
document
  .getElementById("showPendingBtn")
  .addEventListener("click", () =>
    renderTasks(tasks.filter((t) => !t.completed)),
  );

renderTasks(tasks);
// task 6
const cart = [
  { title: "Мышь", price: 1000, count: 2 },
  { title: "Клавиатура", price: 3000, count: 1 },
  { title: "Монитор", price: 15000, count: 1 },
];

const cartItems = document.getElementById("cartItems");
cartItems.innerHTML = cart
  .map(
    (item) =>
      `<li>${item.title} - ${item.price}₽ x ${item.count} = ${item.price * item.count}₽</li>`,
  )
  .join("");

const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
const totalCount = cart.reduce((count, item) => count + item.count, 0);
const mostExpensive = cart.reduce((max, item) =>
  item.price > max.price ? item : max,
);

document.getElementById("cartSummary").textContent =
  `Всего товаров: ${totalCount}, Сумма: ${total}₽, Самый дорогой: ${mostExpensive.title} (${mostExpensive.price}₽)`;
// task 7
const sortProducts = [
  { title: "Ноутбук", price: 50000 },
  { title: "Мышь", price: 1200 },
  { title: "Клавиатура", price: 3500 },
  { title: "Монитор", price: 22000 },
];
const sortedList = document.getElementById("sortedProductsList");

function renderSorted(arr) {
  sortedList.innerHTML = arr
    .map((p) => `<li>${p.title} - ${p.price}₽</li>`)
    .join("");
}

document.getElementById("sortDefaultBtn").addEventListener("click", () => {
  renderSorted([...sortProducts]);
});

document.getElementById("sortAscBtn").addEventListener("click", () => {
  renderSorted([...sortProducts].sort((a, b) => a.price - b.price));
});

document.getElementById("sortDescBtn").addEventListener("click", () => {
  renderSorted([...sortProducts].sort((a, b) => b.price - a.price));
});

renderSorted([...sortProducts]);
