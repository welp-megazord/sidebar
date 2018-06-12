const Sequelize = require('sequelize');
const db = new Sequelize(process.env.db_name, process.env.db_username, process.env.db_pass, {
  host: 'localhost',
  dialect: 'postgres'
})

db.authenticate()
  .then(() => {
    console.log('connected to db');
  })
  .catch(err => console.log('failed to connect to db'));

module.exports.db = db;