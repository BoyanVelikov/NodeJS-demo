const fs = require('fs');

fs.rename('file-to-rename.txt', 'file-updated-name.txt', function(err) {
    if(err) {
        throw err;
    }

    console.log('File has been renamed!');
});