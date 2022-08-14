const fs = require('fs');
const zlib = require('zlib');

let readStream = fs.ReadStream('index-duplex.js');
let writeStream = fs.WriteStream('index-duplex.js.gz');

let gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

