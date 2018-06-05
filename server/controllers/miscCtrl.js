const { Misc } = require('../../db/models');


const miscCtrl = {
  get: (req, res) => {
    Misc.findAll({ where: {
      rid: req.query.rid
    }})
      .then(data => {
//        console.log('get misc data ', data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('failed get misc ', err);
        res.status(404).send(err);
      })
  },
  post: (req, res) => {

  }
}

module.exports.miscCtrl = miscCtrl;