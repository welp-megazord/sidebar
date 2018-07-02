const model = require('../../db/models');

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
    let id = req.query.rid;
    model.Detail.findOne({ rid: id }, (err, detailsData) => {
      if (err || !detailsData) {
        console.log('Error fetching details via resCtrl:', err)
        res.status(404).send();
       } else {
        // console.log('Details fetched via resCtrl!');
        restaurant.details = detailsData;

        model.Hour.findOne({ rid: id }, (err, hoursData) => {
          if (err || !hoursData) {
            console.log('Error fetching hours via resCtrl:', err)
            res.status(404).send();
           } else {
            // console.log('Hours fetched via resCtrl!')
            restaurant.hours = hoursData;

            model.Misc.findOne({ rid: id }, (err, miscData) => {
              if (err || !miscData) {
                console.log('Error fetching misc via resCtrl:', err)
                res.status(404).send();
               } else {
                // console.log('Misc fetched via resCtrl!');
                restaurant.misc = miscData;
                console.log('Entry', id, 'Fetched');
                res.status(200).send(restaurant);
              }
            });
          }
        });
      }
    });
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
      // console.log('Details Posted');
      model.Hour.create(hours, (err, data) => {
        // console.log('Hours Posted');
        model.Misc.create(misc, (err, data) => {
          // console.log('Misc Posted');
          console.log('Entry', index, 'Posted')
          index += 1;
          res.status(201).send(data);
        })
      })
    })
  },

  put: (req, res) => {
    // console.log('Data to be updated:', req.body);
    let id = req.query.rid;
    model.Detail.findOneAndUpdate({ rid: id }, req.body.details, () => {
      model.Hour.findOneAndUpdate({ rid: id }, req.body.hours, () => {
        model.Misc.findOneAndUpdate({ rid: id }, req.body.misc, () => {
          console.log('Entry', id, 'Updated');
          res.status(200).send('Put request!');
        })
      })
    })
  },

  delete: (req, res) => {
    // console.log('Entry to be deleted:', req.query.rid);
    let id = req.query.rid;
    model.Detail.deleteOne({ rid: id }, (err) => {
      err && console.log('Error Deleting Details');
      model.Hour.deleteOne({ rid: id }, (err) => {
        err && console.log('Error Deleting Hours');
        model.Misc.deleteOne({ rid: id }, (err) => {
          err && console.log('Error Deleting Misc');
          console.log('Entry', id, 'Deleted');
          res.status(204).send('Entry Deleted');
        })
      })
    })
  }
}

module.exports.resCtrl = resCtrl;
