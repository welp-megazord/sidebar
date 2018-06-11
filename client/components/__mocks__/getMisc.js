const misc = {
  rid: 1, Takes_Reservations: 'Yes', TakeZout: 'No', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'No', Good_For: 'No', Parking: 'Street', Bike_Parking: 'None', Wheelchair_Accessible: 'Maybe', Good_For_Kids: 'Yup', Good_For_Groups: 'No', Dogs_Allowed: 'Ok', Attire: 'Strict', Ambience: 'Casual', Noise_Level: 'Loud', Alcohol: 'Mild', Outdoor_Seating: 'No', Wifi: 'Yes', Has_TV: 'Yes', Caters: 'No', Gender_Neutral_Restrooms: 'No', Smoking: 'No'
}

const getMisc = (e) => {
  return new Promise((resolve, reject) => {
    const rid = parseInt(e.substr('/api/misc'.length), 10);
    process.nextTick(
      () => misc[rid]
      ? resolve(misc[rid])
      : reject({
        error: 'rid ' + rid + ' not found',
        }) 
    )
  })
}




export default mock;