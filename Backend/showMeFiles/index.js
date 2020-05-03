'use strict'

const fs = require('fs').promises;

const showFiles = fs.readFile()

async function showMeFiles(data) {
    try{
        const info = await fs.stat(data);

        if info.size < 10000 {
            const content = await fs.readFile(data, 'utf-8');
            console.log(`El contenido del fichero es ${content}`)
        } else {
            console.log(`No es posible leer archivos mayores de 10KB`)
        }
    } catch (error) {
        console.error(`Hubo un error leyendo el fichero`)
    }
}

showMeFiles(showFiles.toString())