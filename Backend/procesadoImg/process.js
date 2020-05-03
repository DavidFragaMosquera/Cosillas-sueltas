const sharp = require ('sharp');
const minimist = require('minimist');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

async function processDirectory({inputDir,outputDir, watermark, grayscale}) {

    try{
        await fs.ensureDir(outputDir);
        await fs.access(watermark);
        await fs.access(inputDir);

        console.log(todo correito meu, tira palante);

    } catch(error) {
        if(error.code === 'ENOENT') {
            console.error(
                chalk.redBright('El directorio de imagenes o watermark no existen')
                );
        } else {
        console.log(error);
    }
 }
}

const { inputDir, outputDir, watermark, grayscale } = minimist (porcess.argv.slice(2));

console.log(grayscale);


if (!inputDir || !outputDir || !watermark) {
    console.error(
       chalk.redBright(
           `Los argumentos inputDir, outputDir y watermark son obligatorios`
       ) 
    );
    process.exit();
}

processDirectory({
    inputDir: path.resolve(inputDir),
    outputDIr: path.resolve(outputDir),
    watermark: path.resolve(watermark),
    grayscale: path.resolve(grayscale),
});
