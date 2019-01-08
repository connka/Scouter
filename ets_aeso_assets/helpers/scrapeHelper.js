const cheerio = require('cheerio');
const treeNodeIdentifierHelper = require('./traversalHelpers/treeNodeIdentifierHelper');
const treeIterationHelper = require('./traversalHelpers/treeIterationHelper');
/**
 * @param {string} html from ets.aeso
 * @return {object} Data tables for COAL, HYDRO, WIND, BIOMASS AND OTHER, and GAS
 */
module.exports.getAssetTables = function(html) {
  const outObj = {};
  $ = cheerio.load(html);
  // Tree traversal nodes for html
  const primaryParentNodes = treeNodeIdentifierHelper.primaryParentNodesToObject();
  const gasAssetNode = primaryParentNodes.gasAssetNode;
  const coalAssetNode = primaryParentNodes.coalAssetNode;
  const hydroAssetNode = primaryParentNodes.hydroAssetNode;
  const windAssetNode = primaryParentNodes.windAssetNode;
  const biomassOtherAssetNode = primaryParentNodes.biomassOtherAssetNode;

  // Title Nodes
  const gasAssetNodeTitle = treeNodeIdentifierHelper.parentNodesTitles(gasAssetNode);
  const coalAssetNodeTitle = treeNodeIdentifierHelper.parentNodesTitles(coalAssetNode);
  const hydroAssetNodeTitle = treeNodeIdentifierHelper.parentNodesTitles(hydroAssetNode);
  const windAssetNodeTitle = treeNodeIdentifierHelper.parentNodesTitles(windAssetNode);
  const biomassOtherAssetNodeTitle = treeNodeIdentifierHelper.parentNodesTitles(biomassOtherAssetNode);

  // Assign table values to output
  outObj[coalAssetNodeTitle] = treeIterationHelper.iterateThroughFirstTwoHundred(coalAssetNode, coalAssetNodeTitle);
  outObj[hydroAssetNodeTitle] = treeIterationHelper.iterateThroughFirstTwoHundred(hydroAssetNode, hydroAssetNodeTitle);
  outObj[windAssetNodeTitle] = treeIterationHelper.iterateThroughFirstTwoHundred(windAssetNode, windAssetNodeTitle);
  outObj[biomassOtherAssetNodeTitle] = treeIterationHelper.iterateThroughFirstTwoHundred(biomassOtherAssetNode, biomassOtherAssetNodeTitle);

  // Gas is split into simple cycle, cogeneration, combined cycle
  outObj[gasAssetNodeTitle] = treeIterationHelper.iterateThroughGas(gasAssetNode, gasAssetNodeTitle);

  return outObj;
};

/**
 * @param {string} html from ets.aeso site
 * @return {object} Summary table from ets.aeso site as json
 */
module.exports.getTitle = function(html) {
  // Static names used to target the Summary table values
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
  // The current time ats.aeso is updated for
  const etsAesoTimeStamp = $(`tr:contains('Legend') tr:nth-of-type(2) td`).text();
  outObj.TIME = etsAesoTimeStamp;
  // Title of the summary sable
  const etsAesoSummaryTableTitle = $(`td:nth-of-type(1) th center`).text();
  outObj[etsAesoSummaryTableTitle] = [];
  keys.forEach((element) => {
    // returns each value from the summary table
    const output = $(`td tr:contains(${element}) td:nth-of-type(2)`).text();
    outObj[etsAesoSummaryTableTitle].push({
      'KEY': element,
      'VALUE': parseInt(output),
    });
  });
  return outObj;
};