const { Restaurant } = require('../../db/models');
const data = require('./data.js');
const { db } = require('../../db/config')

const resCtrl = {
  get: (req, res) => {

  },
  post: (req, res) => {
    db.queryInterface.bulkInsert('restaurants', data.restaurantData)
      .then((data) => {
        console.log('inserted restaurant dummies ', data); 
      })
      .catch((err) => console.log('failed insert restaurant dummies ', err))
 //     res.status(201).send(data)
    db.queryInterface.bulkInsert('hours', data.hoursData)
      .then((data) => {
      console.log('inserted hours dummies ', data);
  //    res.status(201).send(data)
    })
      .catch((err) => console.log('failed insert hours dummies ', err))
    db.queryInterface.bulkInsert('details', data.detailsData)
      .then((data) => {
      console.log('inserted details dummies ', data);
  //    res.status(201).send(data)
    })
      .catch((err) => console.log('failed insert details dummies ', err))
    db.queryInterface.bulkInsert('miscs', data.miscData)
      .then((data) => {
      console.log('inserted misc dummies ', data);
      res.status(201).send(data)
    })
      .catch((err) => console.log('failed insert misc dummies ', err))
  }
}

module.exports.resCtrl = resCtrl;
