'use strict';

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

let totalScore = 0;

for (let i = 1; totalScore < 50; i++) {
  const dice = randomNumber();
  totalScore += dice;
  if (totalScore < 50) {
    console.log(`Tirada ${i}, ha salido un ${dice}, tienes un total de: ${totalScore} puntos`);
  } else {
    console.log(`Tirada ${i}, ha salido un ${dice}, enhorabuena ya tienes los ${totalScore} puntos`);
  }
}

