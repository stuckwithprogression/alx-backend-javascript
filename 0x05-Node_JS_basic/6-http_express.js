const express = require('express');

const app = express();
const PORT = 1245;
const HOST = 'localhost';
const URL = `http://${HOST}:${PORT}`;


app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${URL}`);
});

module.exports = app;
