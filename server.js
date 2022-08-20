const express = require('express');

const PORT = 2000;

//APP
const app = express();
app.get('/', (req, res) => {
  res.send("테스트2")
});

app.listen(PORT);
console.log("Server is running");