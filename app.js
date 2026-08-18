const express = require('express');
const app = express();
const fruits = require("./routes/fruits")

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Hello world!');
})

app.use('/fruits', fruits);

module.exports = app