// Math functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function sqrRoot(a) {
  return Math.sqrt(a);
}

function percentToDecimal(a) {
  return a / 100;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    case "sq":
      return sqrRoot(a);
      break;
    case "%":
      return percentToDecimal(a);
      break;
    default:
      console.warn(`Unhandled operator: ${operator}`);
      break;
  }
}

let num1;
let num2;
let operator;
