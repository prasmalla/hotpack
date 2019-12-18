/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../src')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.use('/api', apiRouter);

// catch-all non-existent route
app.use((req, res, next) => {
  res.status(404).sendFile(path.resolve(__dirname, '../src/404.html'));
});

// global error handler
app.use((err, req, res, next) => {
  if (req.xhr) res.status(500).send({ error: err });
  else next(err);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
