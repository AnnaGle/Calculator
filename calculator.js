let firstVariable = '';
let secondVariable = '';
// let operator = x;
let storedOperation = null;

let numbersPlacement = document.querySelector('.numbers')
let space = document.querySelector('.space')
let operator = document.querySelector('.operator')

let numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0', '.'];

let operetionButtons = ['+','-','÷', 'x' ,'AC', '=',]


function storeNumberVariable(event) {
    let storedNumber = event.target.innerText
    if (storedOperation !== null) {
        if (secondVariable === '' && storedNumber === '.') {
            secondVariable += '0'
        }
        secondVariable += storedNumber;

    }
    else {
        if (firstVariable === '' && storedNumber === '.') {
            firstVariable += '0'
        }
        firstVariable += storedNumber;
    }
    display()
}

const display = () => {
    console.log({ firstVariable, secondVariable, storedOperation, storedOperation })
    if (secondVariable.length > 0) {
        space.innerText = secondVariable
    } else {
        space.innerText = firstVariable
    }
}

function storeOperationVariable(event) {
    let operation = event.target.innerText

    if (firstVariable === "") return

    if (operation === 'AC') {
        firstVariable = '';
        secondVariable = '';
        storedOperation = null;
    }
    else {
        if (firstVariable !== "" && secondVariable !== "" && storedOperation !== null) {
            oparate()
        }
        if (operation !== '=') {
            storedOperation = operation;
        }
    }
    display()
}

function printNumberBtn() {
    for (var i = 0; i < numberButtons.length; i++) {
        let btn = document.createElement('button');
        btn.className = 'btn'
        btn.onclick = storeNumberVariable
        let t = document.createTextNode(numberButtons[i]);
        btn.appendChild(t);
        numbersPlacement.appendChild(btn);
    }
}
printNumberBtn();

function printOperationBtn() {
    for (var i = 0; i < operetionButtons.length; i++) {
        let opbtn = document.createElement('button');
        opbtn.className = 'opbtn'
        opbtn.onclick = storeOperationVariable
        let t = document.createTextNode(operetionButtons[i]);
        opbtn.appendChild(t);
        operator.appendChild(opbtn);
    }
}
printOperationBtn();

function oparate() {
    let result = 0
    if (storedOperation === '+') {
        result = Number(firstVariable) + Number(secondVariable)
    }
    else if (storedOperation === '-') {
        result = Number(firstVariable) - Number(secondVariable)
    }
    else if (storedOperation === 'x') {
        result = Number(firstVariable) * Number(secondVariable)
    }
    else if (storedOperation === '÷') {
        result = Number(firstVariable) / Number(secondVariable)
    }

    firstVariable = Math.round(result*1000000000)/1000000000
    secondVariable = '';
    storedOperation = null;
}
