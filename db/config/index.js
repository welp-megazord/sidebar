const db = require('mongoose');

db.connect('mongodb://ec2-34-238-38-249.compute-1.amazonaws.com:27017/yelp', (err) => {
  if(err) { console.log('Error connecting to database:', err) }
  else { console.log('Connected to MongoDB') }
});

module.exports = {
  db
}
