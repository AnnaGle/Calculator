// let firstVariable = a;
// let secondVariable = b;
// let operator = x;

let numbersPlacement = document.querySelector('.numbers')

let numberButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function storeVariable (event){
    let storedNumber = event.target.innerText
    console.log (storedNumber)

}

function printBtn() {
    for (var i = 0; i < numberButtons.length; i++) {
        let btn = document.createElement('button');
        btn.className = 'btn'
        btn.onclick = storeVariable
        let t = document.createTextNode(numberButtons[i]);
        btn.appendChild(t);
        numbersPlacement.appendChild(btn);
    }
}
printBtn();





function add(a, b) {
    let sum = a + b
    return sum
}

function substract(a, b) {
    let difference = a - b
    return difference
}

function multiply(a, b) {
    let multiplication = a * b
    return multiplication
}

function devide(a, b) {
    let division = a / b
    return division
}

// function oparate() {
//     if () {
//         let wynik = sum;
//         alert(wynik)
//     }

//     else if () {//substract
//         let wynik = substract;
//         alert(wynik)
//     }

//     else if () {
//         let wynik = multiply
//         alert(wynik)
//     }

//     else if () {
//         let wynik = devide
//         alert(wynik)
//     }
// }