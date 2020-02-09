"use strict"

/* soy consciente de que el programa no está bien, no he encontrado la forma de deshacerme de los espacios para formar una cadena con todos los strings */

  function palindromeTwo(str) {
    return str.split('').join();
  }
  const palabraDerecho = palindromeTwo('arriba la birra');
  console.log(palabraDerecho);

  function palabraReves(str) {
    return str
      .split('')
      .reverse()
      .join();
  }
  const palabraAlReves = palabraReves('arriba la birra');
  console.log(palabraAlReves);

  if (palabraDerecho === palabraAlReves) {
    console.log('la frase es palindromo');
  } else {
    console.log('la frase no es palindromo');
  }
