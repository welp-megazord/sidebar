const express = require('express');
const parser = require('body-parser');
const path = require('path');
require('../db/config');

const { router } = require('./router');

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));
app.use('/api', router);

app.listen(port, () => {
  console.log('listening to port ', port);
})