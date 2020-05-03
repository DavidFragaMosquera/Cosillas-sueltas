const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

const availableMemory = (freeMemory / totalMemory) * 100;

console.log(`Memoria libre: ${Math.round(availableMemory)} %`);
