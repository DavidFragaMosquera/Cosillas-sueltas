'use strict';

let equipoMaria = [62, 34, 55];
let equipoPaula = [35, 60, 59];
let equipoRebeca = [40, 39, 63];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let Maria = equipoMaria.reduce(reducer) / equipoMaria.length;
let Paula = equipoPaula.reduce(reducer) / equipoPaula.length;
let Rebeca = equipoRebeca.reduce(reducer) / equipoRebeca.length;

if (Maria >= Paula || Rebeca) {
  console.log('El equipo de Maria tiene una media mas alta');
} else if (Paula >= Maria || Rebeca) {
  console.log('El equipo de Paula tiene una media mas alta');
} else if (Rebeca >= Maria || Paula) {
  console.log('El equipo de Rebeca tiene una media mas alta');
}

