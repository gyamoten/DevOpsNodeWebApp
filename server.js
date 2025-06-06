'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Stream I AM MUSIC! Now Docker Deployment with Github Actions!! Hoffentlich hat das bald mal ein Ende...');
});
app.get('/about', (req, res) => {
  res.send('My name is Tenzin!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
