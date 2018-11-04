
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// first parameter in get is the route where the data is being sent
app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

// parameters
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
  res.send(req.query);
});

// To create a port in windows `set PORT=3000`
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));