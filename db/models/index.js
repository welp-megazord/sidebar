const Sequelize = require('sequelize');
const { db } = require('../config');

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false });

const Detail = db.define('detail', {
  rid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Today: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // today2: {
  //   type: Sequelize.STRING,
  //   allowNull: true
  // },
  Price_Range: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Health_Score: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false });

const Hour = db.define('hour', {
  rid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Mon: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Tue: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Wed: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Thu: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Fri: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Sat: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Sun: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, { timestamps: false });

const Misc = db.define('misc', {
  rid : {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Takes_Reservations: {
    type: Sequelize.STRING,
    allowNull: true
  },
  TakeZout: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Accepts_Credit_Cards: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Accepts_Apple_Pay: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Good_For: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Parking: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Bike_Parking: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Wheelchair_Accessible: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Good_For_Kids: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Good_For_Groups: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Dogs_Allowed: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Attire: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Ambience: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Noise_Level: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Alcohol: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Outdoor_Seating: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Wifi: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Has_TV: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Caters: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Gender_Neutral_Restrooms: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Smoking: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, { timestamps: false });

// Restaurant.belongsTo(Hour);
// Hour.belongsTo(Restaurant);

//  Restaurant.belongsTo(Detail);
//  Detail.belongsTo(Restaurant);

//  Misc.belongsTo(Restaurant);
//  Misc.belongsTo(Restaurant);


db.sync({ force: true })
  .then(() => {
    console.log('tables created');
  })
  .catch(err => console.log('err in table create', err));


module.exports = {
  Detail,
  Hour,
  Misc,
  Restaurant
}



