var http = require('http');
var fs = require('fs');
const { response } = require('express');
var index = fs.readFileSync('index.html');

const port = 3000

fs.readFile('./index.html', function(err, html) {
    if (err) throw err;
    http.createServer(function(req, res) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(port)
})