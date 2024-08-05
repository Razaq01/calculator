let currentInput = '';
let resultDisplayed = false;

function input(value) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += value;
    document.getElementById('result').innerText = currentInput;
}

function del() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').innerText = currentInput || '0';
}

function reset() {
    currentInput = '';
    document
}