const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');

const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

console.log('The program has executed.');