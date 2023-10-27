const express = require('express');
const app = express();
require('dotenv').config();

const tenderRouter = require('./routes/tender');
const filtersRouter = require('./routes/filters');

app.use('/', tenderRouter);
app.use('/', filtersRouter);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});