'use strict'
const inputs = document.querySelectorAll(".value");

const url =
  "https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY,MXN,CHF";
fetch(url)
  .then(euro => euro.json())
  .then(data => {
    document.querySelector("#USD").dataset.cambio = data.rates.USD;
    document.querySelector("#GBP").dataset.cambio = data.rates.GBP;
    document.querySelector("#JPY").dataset.cambio = data.rates.JPY;
    document.querySelector("#MXN").dataset.cambio = data.rates.MXN;
    document.querySelector("#CHF").dataset.cambio = data.rates.CHF;

    inputs.forEach(input => {
      input.value = input.dataset.cambio;
    });
  });

function valorCambiado(input) {
  const factor = input.value / input.dataset.cambio;
  inputs.forEach(campo => {
    campo.value = (campo.dataset.cambio * factor).toFixed(2);
  });
}
