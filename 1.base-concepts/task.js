'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b**2 - 4 * a * c;;
  if (discriminant > 0) {
    arr[0] = (- b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (- b - Math.sqrt(discriminant)) / (2 * a);
  }
  else if (discriminant == 0) {
    arr[0] = -b / (2 * a);
  }
  else if (discriminant < 0) {
    arr;
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
if (isNaN(percent)) {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
} else if (isNaN(contribution)) {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
} else if (isNaN(amount)) {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
}
const month = new Date().getMonth();
const year = new Date().getFullYear();
const numberOFyears = date.getFullYear() - year;
const n = numberOFyears * 12 - month + date.getMonth();
const P = (percent / 100) / 12;
const S = amount - contribution;
const payment = S * (P + (P / (((1 + P) ** n) - 1)))
const totalAmount = (payment * n).toFixed(2);

return Number(totalAmount);
}