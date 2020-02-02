'use strict';

let equipoMaria = [62, 34, 55];
let equipoPaula = [35, 60, 59];
let equipoRebeca = [40, 39, 63];

let mediaMaria = equipoMaria[0] + equipoMaria[1] + equipoMaria[2] / equipoMaria.length;
let mediaPaula = equipoPaula[0] + equipoPaula[1] + equipoPaula[2] / equipoPaula.length;
let mediaRebeca = equipoRebeca[0] + equipoRebeca[1] + equipoRebeca[2] / equipoRebeca.length;

if (mediaMaria >= mediaPaula || mediaRebeca) {
  console.log(equipoMaria);
} else if (mediaPaula >= mediaMaria || mediaRebeca) {
  console.log(equipoPaula);
} else if (mediaRebeca >= mediaMaria || mediaPaula) {
  console.log(equipoRebeca);
}
