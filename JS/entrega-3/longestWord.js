'use strict'

function letterCount(str) {
  const longestWord = str.split(' ').sort(function(a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}
const mostLonger = letterCount("hoy hace un dia fantastico");
console.log(mostLonger);
