'use strict';

let otherOperation = '+';
let otherNumber = 8;
let anotherNumber = 5;

switch (otherOperation) {
  case '+':
    console.log(otherNumber + anotherNumber);
    break;
  case '-':
    console.log(otherNumber - anotherNumber);
    break;
  case '/':
    console.log(otherNumber / anotherNumber);
    break;
  case '*':
    console.log(otherNumber * anotherNumber);
    break;
  case '**':
    console.log(otherNumber ** anotherNumber);
    break;
  default:
    console.log('operacion no correcta');
}
