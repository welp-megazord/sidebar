const db = require('mongoose');

db.connect('mongodb://localhost/yelp', (err) => {
  if(err) { console.log('Error connecting to database:', err) }
  else { console.log('Connected to MongoDB') }
});

module.exports = {
  db
}
