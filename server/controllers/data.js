const restaurantData = [{
  name: 'Restaurant A'
}, {
  name: 'Restaurant B'
}, {
  name: 'Restaurant C'
}, {
  name: 'Restaurant D'
}, {
  name: 'Restaurant E'
}];

const hours1Data = [{
  rid: 1,
  Mon: '11:00 am - 10:00 pm',
  Tue: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm',
  Wed: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm',
  Thu: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm',
  Fri: '11:00 am - 10:00 pm',
  Sat: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm',
  Sun: '11:00 am - 10:00 pm',
}, {
  rid: 2,
  Mon: '11:00 am - 4:00 pm\n5:00 pm - 11:00 pm',
  Tue: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm',
  Wed: '11:00 am - 3:00 pm\n6:00 pm - 9:00 pm',
  Thu: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm',
  Fri: '11:00 am - 6:00 pm\n9:00 pm - 12:00 am',
  Sat: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm',
  Sun: '11:00 am - 3:00 pm\n6:00 pm - 11:00 pm'
  }, {
  rid: 3,
  Mon: '11:00 am - 10:00 pm',
  Tue: '11:00 am - 2:00 pm',
  Wed: '11:00 am - 10:00 pm',
  Thu: '11:00 am - 2:00 pm',
  Fri: '11:00 am - 10:00 pm',
  Sat: '11:00 am - 2:00 pm',
  Sun: '11:00 am - 10:00 pm',
}];

const detailsData = [{
  rid: 1,
  Today: '11:00 am - 10:00 pm',
  Price_Range: '$30-40',
  Health_Score: 'C'
}, {
  rid: 2,
  Today: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm',
  Price_Range: '$50-100',
  Health_Score: 'B'
}]

const miscData = [{
  rid: 1,
  Takes_Reservations: 'Yes',
  TakeZout: 'No',
  Accepts_Credit_Cards: 'Yes', 
  Accepts_Apple_Pay: 'No',
  Good_For: 'No',
  Parking: 'Street',
  Bike_Parking: 'None',
  Wheelchair_Accessible: 'Maybe', 
  Good_For_Kids: 'Yup',
  Good_For_Groups: 'No',
  Dogs_Allowed: 'Ok',
  Attire: 'Strict',
  Ambience: 'Casual',
  Noise_Level: 'Loud',
  Alcohol: 'Mild',
  Outdoor_Seating: 'No',
  Wifi: 'Yes',
  Has_TV: 'Yes',
  Caters: 'No',
  Gender_Neutral_Restrooms: 'No', 
  Smoking: 'No'
}, {
  rid: 2,
  Takes_Reservations: 'Yes',
  Good_For: 'Breakfast',
  Bike_Parking: 'Yes',
  Good_For_Groups: 'Ok',
  Ambience: 'None',
  Noise_Level: 'Quiet',
  Alcohol: 'Full Bar',
  Has_TV: 'No',
}]


module.exports = {
  restaurantData,
  hours1Data,
  detailsData,
  miscData
};

