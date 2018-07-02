const { Detail } = require('../../db/models');

const detailsCtrl = {
  get: (req, res) => {
    Detail.findOne({ rid: req.query.rid }, (err, data) => {
      if (err) { 
        console.log('Error fetching Detail:', err)
        res.send('Error').status(404);
      }
      else {
        console.log('Fetched Details from DB');
        res.send(data).status(200);
      }
    })
  }
}

module.exports.detailsCtrl = detailsCtrl;