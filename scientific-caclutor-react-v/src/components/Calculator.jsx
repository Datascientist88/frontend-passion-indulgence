// src/components/Calculator.jsx
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import '../styles/Calculator.css'; // Make sure to adjust the path to your CSS file

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const updateDisplay = (newDisplay) => {
    setDisplay(newDisplay);
  };

  const handleButtonClick = (value) => {
    if (isResultDisplayed && !isNaN(value)) {
      setDisplay('');
      setIsResultDisplayed(false);
    } else if (isResultDisplayed && isNaN(value)) {
      setIsResultDisplayed(false);
    }

    if (['sin', 'cos', 'tan', 'log', 'ln', 'sqrt'].includes(value)) {
      updateDisplay(display + value + '(');
    } else {
      updateDisplay(display + value);
    }
  };

  const handleClear = () => {
    updateDisplay('');
    setIsResultDisplayed(false);
  };

  const handleDelete = () => {
    if (!isResultDisplayed) {
      updateDisplay(display.slice(0, -1));
    }
  };

  const handleEquals = () => {
    try {
      const result = evaluate(display).toString();
      updateDisplay(result);
      setIsResultDisplayed(true);
    } catch {
      updateDisplay('Error');
      setIsResultDisplayed(true);
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display" style={{ fontSize: '24px' }}>
        {display}
      </div>
      <div className="buttons">
        {/* Top Row: Clear, Delete, Mode, Shift */}
        <button onClick={handleClear}>AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={() => handleButtonClick('MODE')}>MODE</button>
        <button onClick={() => handleButtonClick('SHIFT')}>SHIFT</button>

        {/* Numbers and Basic Operations */}
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>÷</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>×</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        {/* Trigonometric Functions */}
        <button onClick={() => handleButtonClick('sin')}>sin</button>
        <button onClick={() => handleButtonClick('cos')}>cos</button>
        <button onClick={() => handleButtonClick('tan')}>tan</button>

        {/* Logarithmic and Exponential Functions */}
        <button onClick={() => handleButtonClick('log')}>log</button>
        <button onClick={() => handleButtonClick('ln')}>ln</button>
        <button onClick={() => handleButtonClick('EXP')}>EXP</button>

        {/* Additional Functions */}
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
        <button onClick={() => handleButtonClick('^')}>^</button>
        <button onClick={() => handleButtonClick('sqrt')}>sqrt</button>
        <button onClick={() => handleButtonClick('3.14159')}>π</button>
        <button onClick={() => handleButtonClick('Ans')}>Ans</button>
      </div>
    </div>
  );
};

export default Calculator;
