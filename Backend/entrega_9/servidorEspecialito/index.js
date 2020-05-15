'use strict'

require('dotenv').config();
const express = require('express');
const app = express();


const port = process.env.PORT;

app.get('/', function (req, res) {
  const date = new Date();
  const hour = date.getHours();
  if (hour > 6 && hour < 12) {
    res.status(200).send({ message: 'Welkomin DeepWeb' });
  }
  else {
    throw new Error();
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res
    .status(404)
    .send(`Error 404. La DeepWeb solo abre de 6 a 12`);
});

app.listen(3000,() => {
console.log('Servidor web iniciado');
});
