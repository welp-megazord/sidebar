const Sequelize = require('sequelize');
const { pass } = require('./config/config.js');
const db = new Sequelize('details_welp', 'postgres', pass, {
  host: 'localhost',
  dialect: 'postgres'
})

db.authenticate()
  .then(() => {
    console.log('connected to db');
  })
  .catch(err => console.log('failed to connect to db'));

module.exports.db = db;