"use strict";

// Con bucle

const numeroBinario = "1010";

function binaryConverter(str) {
  let result = 0;
  let exp = 0;
  

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i] * 2 ** exp++;
  }
  return result;
}

console.log(binaryConverter(numeroBinario));


//****************************************************************//


// con parseInt

let binario;
binario = prompt('Introduce un numero binario');
const decimal = parseInt(binario, 2);
console.log(decimal);

