const { Misc } = require('../../db/models');

const miscCtrl = {
  get: (req, res) => {
    Misc.findOne({ rid: req.query.rid }, (err, data) => {
      if (err) { 
        console.log('Error fetching Misc:', err)
        res.send('Error').status(404);
      }
      else {
        console.log('Fetched misc from DB');
        res.send(data).status(200);
      }
    })
  }
}

module.exports.miscCtrl = miscCtrl;