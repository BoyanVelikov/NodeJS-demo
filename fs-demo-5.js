const fs = require('fs');

// fs.unlinkSync('./file-to-delete');

fs.unlink('./file-to-delete.txt', err => {
    if(err) {
        console.log(err);
    }
    return;
});

