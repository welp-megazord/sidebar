const { detailsCtrl } = require('../controllers/detailsCtrl');
const { hoursCtrl } = require('../controllers/hoursCtrl');
const { miscCtrl } = require('../controllers/miscCtrl');
const { resCtrl } = require('../controllers/resCtrl');
const router = require('express').Router();

router.route('/details')
  .get(detailsCtrl.get)

router.route('/hours')
  .get(hoursCtrl.get)

router.route('/misc')
  .get(miscCtrl.get)

router.route('/restaurants')
  .get(resCtrl.get)
  .post(resCtrl.post)
  .put(resCtrl.put)
  .delete(resCtrl.delete);

module.exports.router = router;