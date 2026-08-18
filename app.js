const express = require('express');
const cors = require("cors");
const app = express();
const fruits = require("./routes/fruits")

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
   res.send('Hello world!');
})

app.use('/fruits', fruits);

module.exports = app