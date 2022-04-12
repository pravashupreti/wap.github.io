const fs = require('fs');
const http = require('http')
const path = require('path')
const server = http.createServer();

server.on('request', (req, res) => {

    let image = fs.readFileSync(path.join(__dirname, '..', 'image.jpg'));

    res.end(image)
});

server.listen(8000);