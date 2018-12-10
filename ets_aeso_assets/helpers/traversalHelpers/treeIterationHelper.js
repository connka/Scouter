/**
 * Takes asset number and row and returns structured object
 * @param {string} assetNode
 * @param {number} int
 * @return {object}
 */
function createPowerAssetObjectFromRows(assetNode, int) {
  return assetObj = {
    'ASSET': $(`${assetNode}> tr:nth-child(${3 + int}) > td:nth-child(1)`).text(),
    'MC': $(`${assetNode}> tr:nth-child(${3 + int}) > td:nth-child(2)`).text(),
    'TNG': $(`${assetNode}> tr:nth-child(${3 + int}) > td:nth-child(3)`).text(),
    'DCR': $(`${assetNode}> tr:nth-child(${3 + int}) > td:nth-child(4)`).text(),
  };
};

module.exports.iterateThroughFirstTwoHundred = function(assetNode, assetNodeTitle) {
  outArr = [];
  for (let i = 0; i < 200; i++) {
    if ($(`${assetNode}> tr:nth-child(${3 + i}) > td:nth-child(1)`).text()) {
      const assetObj = createPowerAssetObjectFromRows(assetNode, i);
      outArr.push(assetObj);
    } else {
      return outArr;
    }
  }
  return outArr;
};

module.exports.iterateThroughGas = function(assetNode, assetNodeTitle) {
  const outArr = [];
  let innerArr = [];
  let currentNode;
  for (let i = 0; i < 200; i++) {
    const targetnode = $(`${assetNode}> tr:nth-child(${2 + i}) > td:nth-child(1)`).text();
    if (targetnode === 'ASSET') {
      ;
    } else if (
      targetnode === 'Simple Cycle' ||
      targetnode === 'Cogeneration' ||
      targetnode === 'Combined Cycle'
    ) {
      if (innerArr[0]) {
        outArr.push({[currentNode]: innerArr});
      }
      currentNode = targetnode;
      innerArr = [];
    } else if (targetnode) {
      innerArr.push(createPowerAssetObjectFromRows(assetNode, i - 1));
    } else {
      outArr.push({[currentNode]: innerArr});
      break;
      ;
    }
  };
  return outArr;
};
