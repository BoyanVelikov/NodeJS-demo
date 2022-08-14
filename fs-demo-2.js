const fs = require('fs');

fs.appendFile('newFile.txt', 'Creating a new file with FS module', function(err) {
    if(err) {
        console.log(err);
    }
    console.log('File has been saved.');
});