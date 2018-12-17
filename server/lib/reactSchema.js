const db = require('../server')

db.getMostRecentData().then((out) => {
  console.log(breakDownContainerSchema(out));
})

const breakDownContainerSchema = (inputData) => {
  const target = inputData[0].data['MATH']['SUMS']['percentObj'];
  let gasSum = 0
  target['GAS'].forEach(element => {
    gasSum += Object.values(element)[0]
  });
  target['GAS'] = gasSum
  return target
}
