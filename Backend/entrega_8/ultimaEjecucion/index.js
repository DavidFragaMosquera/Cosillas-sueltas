const { formatDistance } = require('date-fns');
const { gl } = require('date-fns/locale');
const fs = require('fs').promises;
const path = require('path');

const lastUpdateFile = path.join(__dirname, 'lastUpdate.txt');

async function main() {  
    try {
        const data = await fs.readFile(lastUpdateFile);

        console.log( 
            `La ultima conexion ha sido: ${formatDistance(
            new Date(),
            new Date(data.toString()),
            { locale: gl}
        )}`
        );
    
    } catch (error) {
        console.log('Primera vez que me ejecutas');
    } finally {

    await fs.writeFile(lastUpdateFile, new Date().toString());

    }
}

main();