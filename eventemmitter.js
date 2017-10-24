
var http = require('http');
var events = require('events')

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });

    var eventEmitter = new events.EventEmitter();

    eventEmitter.on('scream', function () {
        console.log('A scream is detected!');
    });

    eventEmitter.emit('scream');

});

server.listen(3000);