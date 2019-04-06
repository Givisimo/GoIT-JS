'use strict';
// ================#1==================

let message;
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let userInput = prompt('Введите пароль');

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
} else {
  message = 'Добро пожаловать!';
}

alert(message);

//  ================#2==================

const credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt('Количество купленных дроидов');
let totalPrice;
let messageTask2;

if (quantity === null) {
  messageTask2 = 'Отменено пользователем!';
} else {
  totalPrice = pricePerDroid * quantity;
}

if (totalPrice > credits) {
  messageTask2 = 'Недостаточно средств на счету!';
} else if (totalPrice < credits) {
  messageTask2 = `Вы купили ${quantity} дроидов, на счету осталось ${credits -
    totalPrice} кредитов`;
}
console.log(messageTask2);

// ================#3==================

let countryInput = prompt('Страна доставки');
let price;
let country;
let messageTask3;

if (countryInput !== null) {
  country = countryInput.toLowerCase();
}

switch (country) {
  case 'китай':
    country = 'Китай';
    price = 100;
    break;

  case 'южная америка':
    country = 'Южную Америку';
    price = 250;
    break;

  case 'австралия':
    country = 'Австралию';
    price = 170;
    break;

  case 'индия':
    country = 'Индию';
    price = 80;
    break;

  case 'ямайка':
    country = 'Ямайку';
    price = 120;
    break;

  default:
    messageTask3 = 'В вашей стране доставка не доступна';
}

if (countryInput === null) {
  messageTask3 = 'Отменено пользователем';
  console.log(messageTask3);
} else if (messageTask3 === 'В вашей стране доставка не доступна') {
  console.log(messageTask3);
} else {
  messageTask3 = `Доставка в ${country} будет стоить ${price} кредитов`;
  console.log(messageTask3);
}
