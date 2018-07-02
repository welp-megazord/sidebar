const { Hour } = require('../../db/models');

const hoursCtrl = {
  get: (req, res) => {
    Hour.findOne({ rid: req.query.rid }, (err, data) => {
      if (err) { 
        console.log('Error fetching Hour:', err)
        res.send('Error').status(404);
      }
      else {
        console.log('Fetched Hours from DB');
        res.send(data).status(200);
      }
    })
  }
}

module.exports.hoursCtrl = hoursCtrl;