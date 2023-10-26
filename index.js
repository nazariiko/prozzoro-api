const express = require('express');
const app = express();
require('dotenv').config();

const tenderRouter = require('./routes/tender');
const filtersRouter = require('./routes/filters');

app.use('/', tenderRouter);
app.use('/', filtersRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});