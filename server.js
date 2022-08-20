const express = require('express');

const PORT = 2000;

//APP
const app = express();
app.get('/', (req, res) => {
  res.send("Hello World")
});

app.listen(PORT);
console.log("Server is running");