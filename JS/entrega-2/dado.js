'use strict';

function dice() {
  const diceNum = Math.round(Math.random() * (6 - 1) + 1);
}
let totalScore = 0;
for (let i = 1; totalScore <= 50; i++) {
  const diceNum = dice();
  totalScore = diceNum;
}

console.log('tirada ${i} : ha salido un ${diceNum},Total ${totalScore}');
