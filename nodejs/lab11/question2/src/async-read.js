const fs = require('fs');
const http = require('http')
const path = require('path')

const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'image.jpg'), (err, data) => {
        if (err) throw err;

        res.end(data);
    });
});

server.listen(8000);