const express = require('express');

const app = express();

const port = 3000;

app.get('/tin-tuc',(req,res) => res.send('hello world'));

app.listen(port,() => console.log(`Example server listen at localhost:${port} `));