// 'use strict';
// // ================#1==================
// let message;
// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let userInput;
//
// userInput = prompt('Введите пароль');
//
// if (userInput === null) {
//   message = 'Отменено пользователем!';
// } else if (userInput !== ADMIN_PASSWORD) {
//   message = 'Доступ запрещен, неверный пароль!';
// } else {
//   message = 'Добро пожаловать!';
// }
//
// alert(message);
//
// // ================#2==================
const credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt('Количество купленных дроидов');
let totalPrice;

if (quantity === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  totalPrice = pricePerDroid * quantity;
}

if (totalPrice > credits && true) {
  message = 'Недостаточно средств на счету!';
  console.log(message);
} else if (totalPrice < credits && true) {
  message = `Вы купили ${quantity} дроидов, на счету осталось ${credits -
    totalPrice} кредитов`;
  console.log(message);
}

// ================#3==================

let countryInput = prompt('Страна доставки');
let priceChina = 100;
let priceSthAm = 250;
let priceAustralia = 170;
let priceIndia = 80;
let priceJamaica = 120;
let country;
country = countryInput === null ? true : countryInput.toLowerCase();

switch (country) {
  case 'китай':
    message = `Доставка в Китай будет стоить ${priceChina} кредитов`;
    console.log(message);
    break;

  case 'южная америка':
    message = `Доставка в Южную Америку будет стоить ${priceSthAm} кредитов`;
    console.log(message);
    break;

  case 'австралия':
    message = `Доставка в Австралию будет стоить ${priceAustralia} кредитов`;
    console.log(message);
    break;

  case 'индия':
    message = `Доставка в Индию будет стоить ${priceIndia} кредитов`;
    console.log(message);
    break;

  case 'ямайка':
    message = `Доставка в Ямайку будет стоить ${priceJamaica} кредитов`;
    console.log(message);
    break;

  case true:
    message = 'Отменено пользователем';
    console.log(message);
    break;

  default:
    message = 'В вашей стране доставка не доступна';
    console.log(message);
}
