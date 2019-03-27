'use strict';

// ================#1==================
let message;
const ADMIN_PASSWORD = 'm4ng0h4ckz';

message = prompt('Введите пароль', 'pasword');

if (message == null) {
  message = 'Отменено пользователем!';
} else if (message !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
} else {
  message = 'Добро пожаловать!';
}

alert(message);

// ================#2==================
const credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt('Количество купленных дроидов', '3, 5, 8, 12');
let totalPrice;

totalPrice = pricePerDroid * quantity;

if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else if (message == null) {
  message = 'Отменено пользователем!';
} else {
  message = `Вы купили ${quantity} дроидов, на счету осталось ${credits -
    totalPrice} кредитов`;
}

console.log(message);

// ================#3==================
let country = prompt('Страна доставки');

switch (country) {
  case 'Китай':
    message = 'Доставка в Китай будет стоить 100 кредитов';
    break;

  case 'Южная Америка':
    message = 'Доставка в Южную Америку будет стоить 250 кредитов';
    break;

  case 'Австралия':
    message = 'Доставка в Австралию будет стоить 170 кредитов';
    break;

  case 'Индия':
    message = 'Доставка в Индию будет стоить 80 кредитов';
    break;

  case 'Ямайка':
    message = 'Доставка в Ямайку будет стоить 120 кредитов';
    break;
  default:
    message = 'В вашей стране доставка не доступна';
}

console.log(message);
