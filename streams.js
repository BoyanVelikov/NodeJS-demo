const fs = require('fs');
let data = '';

const readableStream = fs.createReadStream('sampleDoc.txt');
readableStream.setEncoding('utf-8');

readableStream.on('data', function(chunk) {
    data += chunk;
});

readableStream.on('end', function() {
    console.log(data);
});

readableStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('The program has executed.');

