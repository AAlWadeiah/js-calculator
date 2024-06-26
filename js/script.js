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

function isInteger(val) {
  if (parseInt(val, 10).toString() === val) return true;
  return false;
}

function parseInput(input) {
  //   console.log(input);
  if (isInteger(input)) {
    // Check if this is the first number in the operation
    if (operator === "") {
      num1 = +input;
    } else {
      num2 = +input;
    }
  } else {
    operator = input;
  }
  //   console.log(num1);
  //   console.log(num2);
  //   console.log(operator);
}

function buttonClickHandler(e) {
  parseInput(e.target.value);
  if (num1 && num2 && operator) {
    result = `${operate(num1, num2, operator)}`;
    console.log(`${num1} ${operator} ${num2} = ${result}`);
    // clear numbers
    num1 = NaN;
    num2 = NaN;
    operator = "";
  }
}

let num1 = NaN;
let num2 = NaN;
let operator = "";
let result = "";

let buttons = document.querySelector("#button-section");
buttons.addEventListener("click", buttonClickHandler);

// TODO: "1.1" returns false for isInteger. Need to update it or create a new function that checks for floats
// console.log(isInteger("1.1"));
