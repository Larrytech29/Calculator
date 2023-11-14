let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (firstNumber === '') {
    firstNumber = currentInput;
    currentInput = '';
    operator = op;
  } else {
    calculate();
    operator = op;
  }
}

function appendDecimal() {
  if (currentInput.indexOf('.') === -1) {
    if (currentInput === '') {
      currentInput += '0.';
    } else {
      currentInput += '.';
    }
    display.value = currentInput;
  }
}

function clearDisplay() {
  display.value = '';
  currentInput = '';
  operator = '';
  firstNumber = '';
}

function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(firstNumber) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(firstNumber) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(firstNumber) / parseFloat(currentInput);
      break;
  }
  display.value = result;
  firstNumber = result;
  currentInput = '';
  operator = '';
}