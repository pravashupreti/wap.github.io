const fs = require('fs');
const http = require('http')
const path = require('path')

const server = http.createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream(path.join(__dirname, '..', 'image.jpg'));
    src.pipe(res);
});

server.listen(8000);