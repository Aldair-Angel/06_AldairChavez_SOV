var http = require('http');

var server = http.createServer();

function mensaje(petic, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola Jovenes');
    resp.end();
}

server.on('request', mensaje);

server.listen(3000, '127.0.0.1', function(){
    console.log('La aplicacion se esta ejecutando sobre el puerto 3000');
});

