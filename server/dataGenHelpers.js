const faker = require('faker');
const fs = require('fs');

const generateBusinessNames = (entries) => {
  let nameArr = [];
  console.time('Business Names');
  for(let i = 0; i < entries; i++) {
    nameArr.push({ name: faker.company.companyName() });
  }
  console.timeEnd('Business Names');
  return nameArr;
}

const generateTimes = (entries, index) => {
  let week = `${index}\t`;
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const randomTime = (time1 = 1, time2 = 12) => {
    let hour = Math.floor(Math.random() * (time2 - time1) + time1);
    let minute = Math.floor(Math.random() * 2) === 1 ? '30' : '00';
    return hour + ':' + minute;
  }

  for(let j = 0; j < weekdays.length; j++) {
    weekdays[j] = randomTime(5, 11) + 'am - ' + randomTime(3, 11) + 'pm';
  }
  week += weekdays.join('\t');

  return week + '\n';
}

const generateDetails = (entries, index) => {
  let details = `${index}\t`
  const healthScores = ['A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'D', 'F'];
  
  const randomPrice = (min, max) => {
    return '$' + Math.floor(Math.random() * (max - min) + min);
  }

  details += ' \t',
  details += `${randomPrice(5, 10)} - ${randomPrice(12, 30)}\t`,
  details += `${healthScores[Math.floor(Math.random() * healthScores.length)]}`

  return details + '\n';
}

const generateMisc = (entries, index) => {
  const include = () => {
    return Math.floor(Math.random() * 5)
  }

  const random = (choices) => {
    return Math.floor(Math.random() * choices.length)
  }

  const genAns = ['Yes', 'No', 'Yup', 'Nope', 'Yes', 'No', 'Maybe', 'Yes', 'Maybe', 'No', 'Possibly', 'No', 'Possibly', 'Maybe', 'Yes', 'You Wish', 'Yup', 'Nope', 'Yes', 'No', '?', 'Yes', 'None', 'Yes', 'Yes', 'None', 'None' ];
  const data = ['Takes_Reservations', 'TakeZout', 'Accepts_Credit_Cards', 'Accepts_Apple_Pay', 'Good_For', 'Parking', 'Bike_Parking', 'Wheelchair_Accessible', 'Good_For_Kids', 'Good_For_Groups', 'Dogs_Allowed', 'Attire', 'Ambience', 'Noise_Level', 'Alcohol', 'Outdoor_Seating', 'Wifi', 'Has_TV', 'Caters', 'Gender_Neutral_Restrooms','Smoking']

  let misc = [];
  misc.push(`${index}`)

  for(let j = 0; j < data.length; j++) {
    if(include() < 3) {
      misc.push(`${genAns[random(genAns)]}`)
    } else {
      misc.push('\\N');
    }
  }

  misc = misc.join('\t');

  return misc + '\n';
}

const writeToFile = (filePath, genFunc, entries, encoding, callback) => {
  let writer = fs.createWriteStream(filePath);
  let numTimes = entries;
  let index = 0;

  const write = () => {
    let ok = true;
    while(numTimes >= 0 && ok) {
      if (numTimes === 0) {
        let data = genFunc(1, index);
        writer.write(data, encoding, callback);
      } else {
        let data = genFunc(1, index);
        ok = writer.write(data, encoding);
      }
      numTimes--;
      index++;
    }
    
    if (numTimes > 0) {
      writer.once('drain', write);
    }
  }

  write();
}

console.time('Generate Times');
writeToFile('./static/hours.tsv', generateTimes, 10000000, 'utf-8', () => {
  console.log('Finished writing hours to file');
  console.timeEnd('Generate Times');
})

console.time('Generate Details');
writeToFile('./static/details.tsv', generateDetails, 10000000, 'utf-8', () => {
  console.log('Finished writing details to file');
  console.timeEnd('Generate Details');
})

console.time('Generate Misc');
writeToFile('./static/misc.tsv', generateMisc, 10000000, 'utf-8', () => {
  console.log('Finished writing misc to file');
  console.timeEnd('Generate Misc');
})

// console.log(generateTimes(100));
// console.log(generateDetails(100));
// console.log(generateMisc(100));

// generateTimes(10000000)
// generateDetails(10000000)
// generateMisc(10000000)

module.exports = {
  generateBusinessNames,
  generateTimes,
  generateDetails,
  generateMisc,
  writeToFile
}
