const fs = require('fs');

// fs.rmdirSync('./dir-to-delete');

fs.rmdir('./dir-to-delete', err => {
    if(err) {
        console.log(err);
    }
    return;
});

