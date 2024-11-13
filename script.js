// Генерация случайного числа от 0 до 10
let randomNumber = Math.floor(Math.random() * 6) * 2; // Случайное число от 0 до 10

// Умножение числа на 2
let multipliedNumber = randomNumber * 2;

// Деление числа на 2 и удаление остатка
let dividedNumber = Math.floor(randomNumber / 2);

// Вывод результатов в виде оповещения
alert(`Случайное число: ${randomNumber}`);
alert(`(Умножение) ${randomNumber} * 2 = ${multipliedNumber}`);
alert(`(Деление) ${randomNumber} / 2 = ${dividedNumber}`);