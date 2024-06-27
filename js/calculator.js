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

// Takes an array containing a series of digits and decimal point, and reduces them into a single number
function constructNumber(numArr) {
  console.log(numArr);
  console.log(numArr.join(""));
  return parseFloat(numArr.join(""));
}

function isInteger(val) {
  if (parseInt(val, 10).toString() === val) return true;
  return false;
}

function isOperator(val) {
  return "+-/*%".split("").includes(val);
}

// console.log(isOperator("*"));
// console.log(isOperator("/"));
// console.log(isOperator("+"));
// console.log(isOperator("-"));
// console.log(isOperator("%"));
// console.log(isOperator(""));

// Get the number of digits after the decimal point so we know what we can round up to
// Only use if the length of val is more than MAX_OUTPUT_CHARS
function getDigitCount(val) {
  let [wholeDigits, decimalDigits] = splitFloat(val);
  return [wholeDigits.length, decimalDigits ? decimalDigits.length : 0];
}

function splitFloat(val) {
  return val.toString().split(".");
}

function evaluate(newOp = "") {
  if (numArr1.length < 1 && numArr2.length < 1 && !operator) {
    console.error("Expression is incomplete");
    // Do not do anything
    return;
  }
  if (newOp !== "") {
    // Operator is set and we get another operator
    evaluate(); // evaluate and reset numArr1, numArr2, and operator
    numArr1 = [result]; // set result of previous expression to be first num in new expression
    operator = newOp; // set operator for new expression
    return; // Done evaluating first expression and ready for new expression
  }

  let num1 = constructNumber(numArr1);
  let num2 = constructNumber(numArr2);
  //   After evaluating the expression,`` need to know how much to round up to
  let expOut = operate(num1, num2, operator);
  // If length whole digits of expOut is greater than MAX_OUTPUT_CHARS ...
  // If length of decimal digits + length of whole digits expOut is greater than MAX_OUTPUT_CHARS ...

  result = `${expOut}`;
  console.log(`${num1} ${operator} ${num2} = ${result}`);
  // clear numbers
  numArr1 = [];
  numArr2 = [];
  operator = "";
}

function parseInput(input) {
  //   console.log(input);
  if (isInteger(input) || input === ".") {
    // Do not allow multiple decimal points in number
    if (input === "." && numArr1.includes("." || numArr2.includes("."))) return;

    if (operator === "") {
      // Check if this is the first number in the operation
      numArr1.push(input);
      updateDisplay(constructNumber(numArr1));
      // console.log(numArr1);
    } else {
      numArr2.push(input);
      updateDisplay(constructNumber(numArr2));
      // console.log(numArr2);
    }
  } else {
    operator = input;
    // console.log(operator);
  }
}

function updateDisplay(output) {
  let ioDisplay = document.querySelector("#io-display");
  ioDisplay.textContent = output;
}

function buttonClickHandler(e) {
  let input = e.target.value;

  if (input === "=") {
    evaluate();
    updateDisplay(result);
  } else if (isOperator(input) && operator !== "") {
    evaluate(input);
    updateDisplay(result);
  } else if (isInteger(input) || input === "." || isOperator(input)) {
    parseInput(input);
  } else if (input === "c") {
    // clear everything
    numArr1 = [];
    numArr2 = [];
    operator = "";
    result = "";
    memory = [];
    updateDisplay("0");
  }
}

// Using arrays for the numbers allows us to take a series of numbers and a single decimal point, and construct a float from that
// Also, this makes it easier to implement the "backspace" functionality. We just have to do a Array.pop() everytime a user clicks bksp
let numArr1 = [];
let numArr2 = [];
let operator = "";
let result = "";
let memory = [];

const MAX_OUTPUT_CHARS = 14;

let buttons = document.querySelector("#button-section");
buttons.addEventListener("click", buttonClickHandler);
