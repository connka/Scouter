const cheerio = require('cheerio');
const treeNodeIdentifierHelper = require('./traversalHelpers/treeNodeIdentifierHelper');

module.exports.getAssetTables = function(html) {
  const outObj = {};
  $ = cheerio.load(html);
  // Tree traversal nodes for html
  const primaryParentNodes = treeNodeIdentifierHelper.primaryParentNodesToObject();
  const coalAssetNode = primaryParentNodes.coalAssetNode;
  const gasAssetNode = primaryParentNodes.gasAssetNode;
  // Title Nodes
  const coalAssetNodeTitle = treeNodeIdentifierHelper.primaryParentNodesTitles(coalAssetNode);
  const gasAssetNodeTitle = treeNodeIdentifierHelper.primaryParentNodesTitles(gasAssetNode);
  console.log(gasAssetNodeTitle)
  outObj[coalAssetNodeTitle] = [];
  for (let i = 0; i < 200; i++) {
    if ($(`${coalAssetNode}> tr:nth-child(${3 + i}) > td:nth-child(1)`).text()) {
      const assetObj = {
        'ASSET': $(`${coalAssetNode}> tr:nth-child(${3 + i}) > td:nth-child(1)`).text(),
        'MC': $(`${coalAssetNode}> tr:nth-child(${3 + i}) > td:nth-child(2)`).text(),
        'TNG': $(`${coalAssetNode}> tr:nth-child(${3 + i}) > td:nth-child(3)`).text(),
        'DCR': $(`${coalAssetNode}> tr:nth-child(${3 + i}) > td:nth-child(4)`).text(),
      };
      outObj[coalAssetNodeTitle].push(assetObj);
    } else {
      break;
    }
  }
  return outObj;
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
