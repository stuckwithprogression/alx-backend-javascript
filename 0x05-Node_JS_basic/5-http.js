const http = require('http');
const countStudents = require('./3-read_file_async');

const filePath = process.argv[2];

const PORT = 1245

const app = http.createServer((req, res) => {
  const url = req.url;
  
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    countStudents(filePath)
    .then((result) => {
      res.write(result);
      res.end();
    })
    .catch(error => {
      res.statusCode = 500;
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
