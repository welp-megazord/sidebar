const model = require('../../db/models');
const data = require('./data.js');
const { db } = require('../../db/config')

const resCtrl = {
  get: (req, res) => {
    let restaurant = {};
    model.Detail.findOne({ rid: req.query.rid }, (err, detailsData) => {
      if (err) { 
        console.log('Error fetching details via resCtrl:', err)
        sendResponse(false);
       } else { 
        console.log('Details fetched via resCtrl!');
        restaurant.details = detailsData;

        model.Hour.findOne({ rid: req.query.rid }, (err, hoursData) => {
          if (err) { 
            console.log('Error fetching hours via resCtrl:', err)
            sendResponse(false);
           } else {
            console.log('Hours fetched via resCtrl!')
            restaurant.hours = hoursData;

            model.Misc.findOne({ rid: req.query.rid }, (err, miscData) => {
              if (err) { 
                console.log('Error fetching misc via resCtrl:', err)
                sendResponse(false);
               } else {
                console.log('Misc fetched via resCtrl!');
                restaurant.misc = miscData;
                sendResponse(true, restaurant);
              }
            });
          }
        });
      }
    });

    sendResponse = (ok, data) => {
      if (ok) {
        console.log('All data present!', data);
        res.send(data).status(200);
      } else {
        res.send('Error fetching data').status(404);
      }
    }
  },
  post: (req, res) => {

  }
}

module.exports.resCtrl = resCtrl;
