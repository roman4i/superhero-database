const express = require('express');
const path = require('path');
const paths = require('./config/paths');
const homeRoute = require('./routes/home.routes');

const app = express();

app.use(express.static(paths.build));

app.get('/', homeRoute);

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
})
