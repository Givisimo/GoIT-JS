'use strict';
// ================#1==================
let message;
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let userInput;

userInput = prompt('Введите пароль');

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

if (quantity === null) {
  message = 'Отменено пользователем!';
} else {
  totalPrice = pricePerDroid * quantity;
}

if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else if (totalPrice < credits) {
  message = `Вы купили ${quantity} дроидов, на счету осталось ${credits -
    totalPrice} кредитов`;
}
console.log(message);

// ================#3==================

let countryInput = prompt('Страна доставки');
let priceChina = 100;
let priceSthAm = 250;
let priceAustralia = 170;
let priceIndia = 80;
let priceJamaica = 120;
let country;

if (countryInput !== null) {
  country = countryInput.toLowerCase();
}

switch (country) {
  case 'китай':
    message = `Доставка в Китай будет стоить ${priceChina} кредитов`;
    break;

  case 'южная америка':
    message = `Доставка в Южную Америку будет стоить ${priceSthAm} кредитов`;
    break;

  case 'австралия':
    message = `Доставка в Австралию будет стоить ${priceAustralia} кредитов`;
    break;

  case 'индия':
    message = `Доставка в Индию будет стоить ${priceIndia} кредитов`;
    break;

  case 'ямайка':
    message = `Доставка в Ямайку будет стоить ${priceJamaica} кредитов`;
    break;

  default:
    message = 'В вашей стране доставка не доступна';
}

if (countryInput === null) {
  message = 'Отменено пользователем';
}

console.log(message);
