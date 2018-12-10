const cheerio = require('cheerio');

module.exports.hi = function() {
  return 'hi';
};


module.exports.getTitle = function(html) {
  const jsonTitleSkeleton = {
    'Alberta Total Net Generation': false,
    'Net Actual Interchange': false,
    'Alberta Internal Load (AIL)': false,
    'Net-To-Grid Generation': false,
    'Contingency Reserve Required': false,
    'Dispatched Contingency Reserve (DCR)': false,
    'Dispatched Contingency Reserve -Gen': false,
    'Dispatched Contingency Reserve -Other': false,
    'LSSi Armed Dispatch': false,
    'LSSi Offered Volume': false,
  };
  const keys = Object.keys(jsonTitleSkeleton);
  const outObj = {};
  $ = cheerio.load(html);
  const etsAesoTimeStamp = $(`tr:contains('Legend') tr:nth-of-type(2) td`).text();
  outObj.TIME = etsAesoTimeStamp;
  const etsAesoSummaryTableTitle = $(`td:nth-of-type(1) th center`).text();
  outObj[etsAesoSummaryTableTitle] = [];
  keys.forEach((element) => {
    const output = $(`td tr:contains(${element}) td:nth-of-type(2)`).text();
    outObj[etsAesoSummaryTableTitle].push({
      'KEY': element,
      'VALUE': output,
    });
  });
  return outObj;
};
