const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let total = 0;

    for(let i = 0; i < 5; i++) {
        total++;
    }

    res.send(`Jane has ${total} apples`);
});

app.listen(8000, 
    () => console.log('Server on port 8000'));
