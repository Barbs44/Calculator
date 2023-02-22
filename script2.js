const calculator = {
    displayPreviousOperandTextElement: document.querySelector('[data-previous-operand]'),
    displayCurrentOperandTextElement: document.querySelector('[data-current-operand]'),
    clearButton: document.querySelector('[data-all-clear]'),
    deleteButton: document.querySelector('[data-delete]'),
    operationButtons: document.querySelectorAll('[data-operation]'),
    numberButtons: document.querySelectorAll('[data-number]'),
    equalsButton: document.querySelector('[data-equals]'),
    previousOperand: '',
    currentOperand: '',
    operation: undefined,
  };
  
  calculator.clearButton.addEventListener('click', () => {
    calculator.currentOperand = '';
    calculator.previousOperand = '';
    calculator.operation = undefined;
    updateDisplay();
  });
  
  calculator.deleteButton.addEventListener('click', () => {
    calculator.currentOperand = calculator.currentOperand.toString().slice(0, -1);
    updateDisplay();
  });
  
  calculator.operationButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const operation = event.target.innerText;
      if (calculator.currentOperand === '') return;
      if (calculator.previousOperand !== '') {
        calculate();
      }
      calculator.operation = operation;
      calculator.previousOperand = calculator.currentOperand;
      calculator.currentOperand = '';
      updateDisplay();
    });
  });
  
  calculator.numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const number = event.target.innerText;
      calculator.currentOperand = calculator.currentOperand.toString() + number.toString();
      updateDisplay();
    });
  });
  
  calculator.equalsButton.addEventListener('click', (event) => {
    calculate();
    updateDisplay();
  });
  
  function calculate() {
    let computation;
    const prev = parseFloat(calculator.previousOperand);
    const current = parseFloat(calculator.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (calculator.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    calculator.currentOperand = computation;
    calculator.operation = undefined;
    calculator.previousOperand = '';
  }
  
  

function updateDisplay() {
            const currentOperandElement = document.querySelector("[data-current-operand]");
            const previousOperandElement = document.querySelector("[data-previous-operand]");
            
            currentOperandElement.innerText = calculator.currentOperand;
            if (calculator.previousOperand !== "") {
              previousOperandElement.innerText = `${calculator.previousOperand} ${calculator.operation}`;
            } else {
              previousOperandElement.innerText = "";
            }
          }
          
          const numberButtons = document.querySelectorAll("[data-number]");
          numberButtons.forEach(button => {
            button.addEventListener("click", () => {
              calculator.appendNumber(button.innerText);
              updateDisplay();
            });
          });
          
          const operationButtons = document.querySelectorAll("[data-operation]");
          operationButtons.forEach(button => {
            button.addEventListener("click", () => {
              calculator.chooseOperation(button.innerText);
              updateDisplay();
            });
          });
          
          const equalsButton = document.querySelector("[data-equals]");
          equalsButton.addEventListener("click", button => {
            calculator.compute();
            updateDisplay();
          });
          
          const deleteButton = document.querySelector("[data-delete]");
          deleteButton.addEventListener("click", button => {
            calculator.delete();
            updateDisplay();
          });
          
          const allClearButton = document.querySelector("[data-all-clear]");
          allClearButton.addEventListener("click", button => {
            calculator.clear();
            updateDisplay();
          });
          