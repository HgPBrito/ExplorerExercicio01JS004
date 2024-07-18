/*
    Solicite 2 números, faça a soma, subtração, multiplicação, divisão, resto da divisão e apresente o resultado final ao usuário.
*/

alert('Vamos fazer umas contas com 2 números!');
let numberOne = prompt('Por favor digite um número?');
let numberTwo = prompt('Por favor digite mais um número?');

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sumNumbers              = numberOne + numberTwo;
const subtractionNumbers      = numberOne - numberTwo;
const multiplicationNumbers   = numberOne * numberTwo;
const divisionNumbers         = numberOne / numberTwo;
const remainderNumbers        = numberOne % numberTwo;
const exponentialNumbers      = numberOne ** numberTwo;

let oddOrEven = '';
let sameOrDifferent = '';

if(sumNumbers % 2 == 0){
    oddOrEven ='par';
} else {
    oddOrEven ='ímpar';
}

if(numberOne == numberTwo){
    sameOrDifferent ='igual ao';
} else {
    sameOrDifferent ='diferente do';
}

alert(`A soma de ${numberOne} e ${numberTwo} é ${sumNumbers}, e este número é ${oddOrEven}!`);
alert(`A subtração de ${numberOne} e ${numberTwo} é ${subtractionNumbers}!`);
alert(`A multiplicação de ${numberOne} e ${numberTwo} é ${multiplicationNumbers}!`);
alert(`A divisão de ${numberOne} e ${numberTwo} é ${divisionNumbers}!`);
alert(`A o resto da divisão de ${numberOne} e ${numberTwo} é ${remainderNumbers}!`);
alert(`A exponenciação de ${numberOne} e ${numberTwo} é ${exponentialNumbers}!`);
alert(`O número ${numberOne} é ${sameOrDifferent} número ${numberTwo}!`);