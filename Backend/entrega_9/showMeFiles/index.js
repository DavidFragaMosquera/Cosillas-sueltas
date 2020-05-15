
const path = require("path");
const fs = require("fs").promises;

async function showFile(filePath) {
  
  try {
    const absolutePath = path.resolve(filePath);
    const pathInfo = await fs.stat(absolutePath);

    if (!pathInfo.isFile()) {
      throw new Error("La ruta no es un fichero");
    }

    if (pathInfo.size > 10000) {
      throw new Error("El fichero es demasiado grande");
    }

    const pathContent = await fs.readFile(absolutePath);

    return pathContent.toString();
  } catch (error) {
    console.error(error.message);
  }
}

async function main() {
  const arguments = process.argv.slice(2);
  for (const argument of arguments) {
    const content = await showFile(argument);
    if (content) console.log(content);
  }
}

main();


