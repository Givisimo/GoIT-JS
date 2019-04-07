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

if (quantity === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * quantity;
}

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (totalPrice <= credits) {
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов`,
  );
}

// ================#3==================

let countryInput = prompt('Страна доставки');
let price;
let country;

if (countryInput !== null) {
  country = countryInput.toLowerCase();
}
if (countryInput === null) {
  console.log('Отменено пользователем');
} else {
  switch (country) {
    case 'китай':
      country = 'Китай';
      price = 100;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'южная америка':
      country = 'Южную Америку';
      price = 250;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'австралия':
      country = 'Австралию';
      price = 170;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'индия':
      country = 'Индию';
      price = 80;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'ямайка':
      country = 'Ямайку';
      price = 120;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    default:
      console.log('В вашей стране доставка не доступна');
  }
}
