const { Detail } = require('../../db/models');

const detailsCtrl = {
  get: (req, res) => {
    Detail.findAll({ where: {
      rid: req.query.rid
    }})
      .then(data => {
   //     console.log('get details ', data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('failed get details ', err);
        res.status(404).send(err);
      })
  },
  post: (req, res) => {

  }
}

module.exports.detailsCtrl = detailsCtrl;