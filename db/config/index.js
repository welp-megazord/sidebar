const Sequelize = require('sequelize');
const db = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
})

db.authenticate()
  .then(() => {
    console.log('connected to db');
  })
  .catch(err => console.log('failed to connect to db ', err));

module.exports.db = db;