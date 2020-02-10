"use strict"

function palindromeTwo(str) {
  return str
    .replace(/ /g, '')
    .split('')
    .join('');
}
const palabraDerecho = palindromeTwo('arriba la birra');

function palabraReves(str) {
  return str
    .replace(/ /g, '')
    .split('')
    .reverse()
    .join('');
}
const palabraAlReves = palabraReves('arriba la birra');

if (palabraDerecho === palabraAlReves) {
  console.log('la frase es palindromo');
} else {
  console.log('la frase no es palindromo');
}
