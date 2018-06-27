require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const path = require('path');
require('../db/config');
const cors = require('cors');

const { router } = require('./router');

const app = express();
const PORT = 3002;

app.use(cors());

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));
app.use('/api', router);

app.listen(PORT, () => {
  console.log('listening to PORT ', PORT);
})