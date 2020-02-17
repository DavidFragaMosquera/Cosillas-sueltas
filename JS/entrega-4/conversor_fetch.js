'use strict'
const exchangeURL = 'https://api.exchangerate-api.com/v4/latest/EUR';

async function getRates(amount) {
    const euro = await (await fetch(exchangeURL)).json();
    console.log(`${getRates} euros son ${euro.rates.USD * amount} dolares`)
    console.log(`${euro.rates.USD * amount} dolares son ${euro.rates.JPY * amount} yenes`)
}
getRates(20);
