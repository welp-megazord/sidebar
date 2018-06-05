const { Hour } = require('../../db/models');

const hoursCtrl = {
  get: (req, res) => {
    Hour.findAll({ where: {
      rid: req.query.rid
    }})
      .then(data => {
//        console.log('found hours data ', data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('failed hours data ', err);
        res.status(404).send(err)
      })
  },
  post: (req, res) => {

  }
}

module.exports.hoursCtrl = hoursCtrl;