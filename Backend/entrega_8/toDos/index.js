'use strict'

const minimist = require("minimist");
const chalk = require("chalk");

const {
  addTodo,
  markAsDone,
  markAsUnDone,
  listTodos,
  cleanTodos,
} = require("./lib/actions");

const { _, priority, list, done, undone, clean } = minimist(
  process.argv.slice(2)
);

if (clean) {
  cleanTodos().then(() => {
    console.log(chalk.green('Lista de tareas limpia'));
    process.exit();
  });
}

if (list) {
  listTodos().then(() => {
    process.exit();
  });
}

if (done) {
  markAsDone({ index: done }).then(() => {
    console.log(chalk.green('Tarea marcada como hecha correctamente'));
    process.exit();
  });
}

if (undone) {
  markAsUnDone({ index: undone }).then(() => {
    console.log(chalk.green('Tarea marcada como no hecha correctamente'));

    process.exit();
  });
}

const todoText = _.join(" ");

if (todoText) {
  addTodo({
    text: todoText,
    priority,
  }).then(() => {
    console.log(chalk.green('Tarea añadida correctamente'));
    process.exit();
  });
}
