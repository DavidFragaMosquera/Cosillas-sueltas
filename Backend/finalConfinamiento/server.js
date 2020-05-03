const http = require('http');
const { differenceInDays} = require('date-fns');

const server = http.createServer();

server.on('request', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');

    const finConfinamiento = new Date(2020, 5, 31);

    const diasRestantes = differenceInDays(finConfinamiento, new Date());

    res.end(
        JSON.stringify({ message: `Faltan ${diasRestantes} dias para finalizar el puto confinamiento`})
    );
});

server.listen(3000);