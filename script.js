// This is a WIP

// Declare and initialize variables
let a = "";
let b = "";
let operator = "";
let displayValue = "";

// Get references to DOM elements
const display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("buttons");
const operatorButtons = document.getElementsByClassName("operators");
const equalsButton = document.getElementById("=");

// Define a click handler function for the number buttons
function handleNumberClick() {
  const number = this.textContent; // Get the number from the clicked button
  displayValue += number; // Append the number to the display value
  display.value = displayValue; // Update the display with the new value
  a = displayValue;
}

// Define a click handler function for the operator buttons
function handleOperatorClick() {
  const number = this.textContent; // Get the number from the clicked button
  displayValue = number; // Show only operator in display
  display.value = displayValue; // Update the display with the new value
}

// Define a click handler function for the equals button
function handleEqualsClick() {
  equalsButton.addEventListener("click", operate);
  display.value = operate(a, b, operator);
}

// Attach the click handler to each number button using a loop
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", handleNumberClick);
}

// Attach the click handler to each operator button using a loop
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", handleOperatorClick);
}

// Add
function add(a, b) {
  return a + b;
}

// Subtract
function subtract(a, b) {
  return a - b;
}

// Multiply
function multiply(a, b) {
  return a * b;
}

// Divide
function divide(a, b) {
  return a / b;
}

// Operate function
function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}
