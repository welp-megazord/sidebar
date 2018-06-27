const mongoose = require('mongoose');
const { db } = require('../config');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
  rid: Number,
  Today: String,
  Price_Range: String,
  Health_Score: String
});

const hourSchema = new Schema({
  rid: Number,
  Mon: String,
  Tue: String,
  Wed: String,
  Thu: String,
  Fri: String,
  Sat: String,
  Sun: String
});

const miscSchema = new Schema({
  rid : Number,
  Takes_Reservations: String,
  TakeZout: String,
  Accepts_Credit_Cards: String,
  Accepts_Apple_Pay: String,
  Good_For: String,
  Parking: String,
  Bike_Parking: String,
  Wheelchair_Accessible: String,
  Good_For_Kids: String,
  Good_For_Groups: String,
  Dogs_Allowed: String,
  Attire: String,
  Ambience: String,
  Noise_Level: String,
  Alcohol: String,
  Outdoor_Seating: String,
  Wifi: String,
  Has_TV: String,
  Caters: String,
  Gender_Neutral_Restrooms: String,
  Smoking: String,
});

let Detail = mongoose.model('Detail', detailSchema);
let Hour = mongoose.model('Hour', hourSchema);
let Misc = mongoose.model('Misc', miscSchema);

module.exports = {
  Detail,
  Hour,
  Misc
}



