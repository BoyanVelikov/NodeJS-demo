const fs = require('fs');

let filePath = './more-data.txt';
let data = 'More more text';

fs.writeFile(filePath, data, error => {
    if(error) {
        console.log(error);
    }

    return;
});
