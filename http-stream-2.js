const fs = require('fs');
const server = require('http').createServer();

server.on('request', (res, req) => {
    const src = fs.createReadStream('sampleDoc.txt');
    src.on('data', data => res.write(data));
    src.on('end', () => res.end());
});

server.listen(8000);