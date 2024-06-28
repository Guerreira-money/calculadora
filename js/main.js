
let memory = 0;

function insert(numero) {
    let display = document.getElementById('calc-fundo-display');
    display.innerHTML = display.innerHTML + numero;
}

function power() {
    let display = document.getElementById('calc-fundo-display');
    let content = display.innerHTML;
    if (content.length > 0) {
        display.innerHTML = content + '^';
    }
}

function calcular() {
    let display = document.getElementById('calc-fundo-display');
    let content = display.innerHTML.replace(',', '.');

    // Substitui a notação de potência ^ por **
    content = content.replace(/(\d+)\^(\d+)/g, '$1**$2');

    let resultado = eval(content);
    display.innerHTML = resultado.toString().replace('.', ',');
}

function limparConteudo() {
    document.getElementById('calc-fundo-display').innerHTML = "";
}

function backspace() {
    let display = document.getElementById('calc-fundo-display');
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
}

function clearEntry() {
    document.getElementById('calc-fundo-display').innerHTML = "0";
}

function sqrt() {
    let display = document.getElementById('calc-fundo-display');
    let content = display.innerHTML;
    let resultado = Math.sqrt(parseFloat(content.replace(',', '.')));
    display.innerHTML = resultado.toString().replace('.', ',');
}

function reciprocal() {
    let display = document.getElementById('calc-fundo-display');
    let content = display.innerHTML;
    let resultado = 1 / parseFloat(content.replace(',', '.'));
    display.innerHTML = resultado.toString().replace('.', ',');
}

function percentage() {
    let display = document.getElementById('calc-fundo-display');
    let content = display.innerHTML;

    if (content.includes('+') || content.includes('-') || content.includes('*') || content.includes('/')) {
        let operators = ['+', '-', '*', '/'];
        let lastOperatorIndex = -1;
        let lastOperator = '';

        for (let operator of operators) {
            let index = content.lastIndexOf(operator);
            if (index > lastOperatorIndex) {
                lastOperatorIndex = index;
                lastOperator = operator;
            }
        }

        let num1 = parseFloat(content.substring(0, lastOperatorIndex).replace(',', '.'));
        let num2 = parseFloat(content.substring(lastOperatorIndex + 1).replace(',', '.')) / 100;
        let result = eval(num1 + lastOperator + (num1 * num2));
        display.innerHTML = result.toString().replace('.', ',');
    } else {
        let resultado = parseFloat(content.replace(',', '.')) / 100;
        display.innerHTML = resultado.toString().replace('.', ',');
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById('calc-fundo-display').innerHTML = memory.toString().replace('.', ',');
}

function memoryAdd() {
    let display = document.getElementById('calc-fundo-display');
    let content = parseFloat(display.innerHTML.replace(',', '.'));
    memory += content;
}

function memorySubtract() {
    let display = document.getElementById('calc-fundo-display');
    let content = parseFloat(display.innerHTML.replace(',', '.'));
    memory -= content;
}

function memoryStore() {
    let display = document.getElementById('calc-fundo-display');
    memory = parseFloat(display.innerHTML.replace(',', '.'));
}

function memoryShow() {
document.getElementById('calc-fundo-display').innerHTML = memory.toString().replace('.', ',');
}


function toggleSign() {
    let display = document.getElementById('calc-fundo-display');
    let content = display.innerHTML;
    if (content[0] === '-') {
        display.innerHTML = content.substring(1);
    } else {
        display.innerHTML = '-' + content;
    }
}