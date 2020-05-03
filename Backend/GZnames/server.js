'use strict'

const names = require("./names.json");
const express = require("express");
const { sample } = require("lodash");
const app = express();

app.get("/names", (req, res) => {
  const { gender } = req.query;

  if (!gender) {
    return res.send(names);
  }

  if (gender === "F" || gender === "M") {
    return res.send(names.filter((name) => name.gender === gender));
  }

  throw new Error("Gender must be M or F.");
});

app.get("/names/random", (req, res) => {
  res.send(sample(names));
});

app.use((error, req, res, next) => {
  res.status(400).send(error.message);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000);


