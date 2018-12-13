/**
 * Takes in the data object and sum all data before sending to the server
 * @param {object} dataObject All data from tables
 * @return {object} return the sum off all data in a 'sum' object
 */
module.exports.sumArray = (dataObject) => {
  const rowKeys = Object.keys(dataObject);
  const currentKeys = rowKeys.slice(3, 9);
  const sumObj = {};
  const total = {
    'MC': 0,
    'TNG': 0,
    'DCR': 0,
  };
  currentKeys.forEach((Keyelement) => {
    const sumArr = {
      'MC': 0,
      'TNG': 0,
      'DCR': 0,
    };
    if (Keyelement !== 'GAS') {
      dataObject[Keyelement].forEach((InnerKeyelement) => {
        sumArr.MC += parseInt(InnerKeyelement.MC);
        sumArr.TNG += parseInt(InnerKeyelement.TNG);
        sumArr.DCR += parseInt(InnerKeyelement.DCR);
        total.MC += parseInt(InnerKeyelement.MC);
        total.TNG += parseInt(InnerKeyelement.TNG);
        total.DCR += parseInt(InnerKeyelement.DCR);
      });
      sumObj[Keyelement] = sumArr;
    } else if (Keyelement === 'GAS') {
      const gasOutArr = [];
      dataObject[Keyelement].forEach((gasArrayelement) => {
        const gasSumArr = {
          'MC': 0,
          'TNG': 0,
          'DCR': 0,
        };
        if (gasArrayelement['Simple Cycle']) {
          gasArrayelement['Simple Cycle'].forEach((gasRowelement) => {
            gasSumArr.MC += parseInt(gasRowelement.MC);
            gasSumArr.TNG += parseInt(gasRowelement.TNG);
            gasSumArr.DCR += parseInt(gasRowelement.DCR);
            total.MC += parseInt(gasRowelement.MC);
            total.TNG += parseInt(gasRowelement.TNG);
            total.DCR += parseInt(gasRowelement.DCR);
          });
          gasOutArr.push({'Simple Cycle': gasSumArr});
        } else if (gasArrayelement['Cogeneration']) {
          gasArrayelement['Cogeneration'].forEach((gasRowelement) => {
            gasSumArr.MC += parseInt(gasRowelement.MC);
            gasSumArr.TNG += parseInt(gasRowelement.TNG);
            gasSumArr.DCR += parseInt(gasRowelement.DCR);
            total.MC += parseInt(gasRowelement.MC);
            total.TNG += parseInt(gasRowelement.TNG);
            total.DCR += parseInt(gasRowelement.DCR);
          });
          gasOutArr.push({'Cogeneration': gasSumArr});
        } else if (gasArrayelement['Combined Cycle']) {
          gasArrayelement['Combined Cycle'].forEach((gasRowelement) => {
            gasSumArr.MC += parseInt(gasRowelement.MC);
            gasSumArr.TNG += parseInt(gasRowelement.TNG);
            gasSumArr.DCR += parseInt(gasRowelement.DCR);
            total.MC += parseInt(gasRowelement.MC);
            total.TNG += parseInt(gasRowelement.TNG);
            total.DCR += parseInt(gasRowelement.DCR);
          });
          gasOutArr.push({'Combined Cycle': gasSumArr});
        }
      });
      sumObj.GAS = gasOutArr;
    }
  });
  percentObj = percentArray(sumObj, total);
  const retObj = {sumObj, percentObj};
  return {SUMS: retObj};
};
/**
 * @param {object} sumArr takes in data returned from Sum function
 * @param {object} totalObj The totals for each category
 * @return {object} JSON data including the percentage of sums
 */
function percentArray(sumArr, totalObj) {
  const outObj = {};
  const obj = {'GAS': []};
  Object.keys(sumArr).forEach((ele) => {
    if (sumArr[ele].MC) {
      outObj[ele] = parseFloat((sumArr[ele].MC/totalObj.MC).toPrecision(4));
    } else {
      sumArr[ele].forEach((ele) => {
        const key = Object.keys(ele)[0];
        const outele = parseFloat((ele[key].MC/totalObj.MC).toPrecision(4));
        obj['GAS'].push({[key]: outele});
      });
    }
  });
  const retObj = {...outObj, ...obj};
  return retObj;
};
