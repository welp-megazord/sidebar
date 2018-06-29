const model = require('../../db/models');
const data = require('./data.js');
const { db } = require('../../db/config')

let index = 0;
model.Detail.findOne().sort('-rid').exec((err, data) => {
  if (err) { console.log('Error fetching index entry') }
  else {
    console.log('Starting Index for new entries:', data.rid + 1);
    index = data.rid + 1;
  }
})

const resCtrl = {
  get: (req, res) => {
    let restaurant = {};
    model.Detail.findOne({ rid: req.query.rid }, (err, detailsData) => {
      if (err || !detailsData) { 
        console.log('Error fetching details via resCtrl:', err)
        sendResponse(false);
       } else { 
        console.log('Details fetched via resCtrl!');
        restaurant.details = detailsData;

        model.Hour.findOne({ rid: req.query.rid }, (err, hoursData) => {
          if (err || !hoursData) { 
            console.log('Error fetching hours via resCtrl:', err)
            sendResponse(false);
           } else {
            console.log('Hours fetched via resCtrl!')
            restaurant.hours = hoursData;

            model.Misc.findOne({ rid: req.query.rid }, (err, miscData) => {
              if (err || !miscData) {
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
    let details = req.body.details;
    let hours = req.body.hours;
    let misc = req.body.misc;
    details.rid = index;
    hours.rid = index;
    misc.rid = index;
    // console.log('Details to be posted:', details);
    // console.log('Hours to be posted:', hours);
    // console.log('Misc to be posted:', misc);

    model.Detail.create(details, (err, data) => {
      console.log('Details Posted');
      model.Hour.create(hours, (err, data) => {
        console.log('Hours Posted');
        model.Misc.create(misc, (err, data) => {
          console.log('Misc Posted');
          index += 1;
        })
      })
    })
    res.send('Post request!').status(200);
  },

  put: (req, res) => {
    console.log('Data to be updated:', req.body);
    res.send('Put request!').status(200);
  },

  delete: (req, res) => {
    console.log('Entry to be deleted:', req.query.rid);
    let id = req.query.rid;
    model.Detail.deleteOne({ rid: id }, (err) => {
      err && console.log('Error Deleting Details');
      model.Hour.deleteOne({ rid: id }, (err) => {
        err && console.log('Error Deleting Hours');
        model.Misc.deleteOne({ rid: id }, (err) => {
          err && console.log('Error Deleting Misc');
          res.send('Entry Deleted').status(200);
        })
      })
    })
  }
}

module.exports.resCtrl = resCtrl;
