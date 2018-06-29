const { Misc } = require('../../db/models');

const miscCtrl = {
  get: (req, res) => {
    Misc.findOne({ rid: req.query.rid })
      .then(data => {
        console.log('Misc Data Received from DB:', data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('Failed to get Misc data from DB:', err);
        res.status(404).send(err);
      })
  },
  post: (req, res) => {

  }
}

module.exports.miscCtrl = miscCtrl;