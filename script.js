// JavaScript "state"
let count = 0;

// Connect to HTML elements
const valueSpan = document.getElementById("value");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Update the text on the page
function updateDisplay() {
  valueSpan.textContent = count;
}

// Initial display
updateDisplay();

// Increase button
increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrease button
decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

