let display = '';
let isResultDisplayed = false;

function updateDisplay() {
  const displayElement = document.getElementById('display');
  displayElement.textContent = display;
  adjustFontSize(displayElement);
}

function adjustFontSize(element) {
  const maxFontSize = 24;
  const minFontSize = 12;
  let currentFontSize = maxFontSize;
  element.style.fontSize = `${currentFontSize}px`;

  while (element.scrollHeight > element.clientHeight && currentFontSize > minFontSize) {
    currentFontSize--;
    element.style.fontSize = `${currentFontSize}px`;
  }
}

function handleButtonClick(value) {
  if (isResultDisplayed && !isNaN(value)) {
    display = '';
    isResultDisplayed = false;
  } else if (isResultDisplayed && isNaN(value)) {
    isResultDisplayed = false;
  }

  if (['sin', 'cos', 'tan', 'log', 'ln', 'sqrt'].includes(value)) {
    display += value + '(';
  } else {
    display += value;
  }

  updateDisplay();
}

function handleClear() {
  display = '';
  isResultDisplayed = false;
  updateDisplay();
}

function handleDelete() {
  if (!isResultDisplayed) {
    display = display.slice(0, -1);
    updateDisplay();
  }
}

function handleEquals() {
  try {
    const result = math.evaluate(display).toString();
    display = result;
    isResultDisplayed = true;
  } catch {
    display = 'Error';
    isResultDisplayed = true;
  }
  updateDisplay();
}