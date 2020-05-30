var http = require('http');

var server = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') {
        res.writeHead(404);
    }
    res.write("<h1>Hello World!</h1>")
    res.end();
});

server.listen(8080);