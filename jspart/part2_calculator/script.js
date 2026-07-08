const display = document.getElementById('inp_res');
const buttons = document.querySelectorAll('.buttons input[type="button"]');

let currentInput = '';
let perviousInput = '';
let operator = null;
let shouldResetDisplay = false;

function updateDisplay(value) {
    display.value = value || '0';
}

function inputDigit(digit) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }

    currentInput += digit;
    updateDisplay(currentInput);
}

function inputDecimal() {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
    if (currentInput === '0' || currentInput === '') {
        currentInput = '0.';
        updateDisplay(currentInput);
    }
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);
    if (operator && !shouldResetDisplay) {
        const result = performCalculation(operator, perviousInput, inputValue);
        currentInput = String(result);
        updateDisplay(currentInput);
        perviousInput = result;
    } else {
        perviousInput = inputValue;
    }
    operator = nextOperator;
    shouldResetDisplay = true;
}

function performCalculation(operator, firstOperand, secondOperand) {
    const first = parseFloat(firstOperand);
    const second = parseFloat(secondOperand);
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return second !== 0 ? first / second : 'Error';
        default:
            return second;
    }
}

function handleEqual() {
    if (!operator) return;
    const inputValue = parseFloat(currentInput);
    const result = performCalculation(operator, perviousInput, inputValue);
    currentInput = String(result);
    updateDisplay(currentInput);
    operator = null;
    perviousInput = null;
    shouldResetDisplay = true;
}

function clearDisplay() {
    currentInput = '';
    perviousInput = '';
    operator = null;
    shouldResetDisplay = false;
    updateDisplay('0');
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (button.id === 'btn_clear') {
            clearDisplay();
            
        }
        else if (button.id === 'btn_equal') {
            handleEqual();
        }
        else if (value === '.') {
            inputDecimal();
        }
        else if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value);
        }
        else if (value >= '0' && value <= '9') {
            inputDigit(value);
        }
    });
});


