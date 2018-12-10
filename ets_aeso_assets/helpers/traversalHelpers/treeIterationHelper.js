module.exports.assetValueToObjectFormat = function(assetNode, int) {
  return assetObj = {
    'ASSET': $(`${assetNode}> tr:nth-child(${3 + int}) > td:nth-child(1)`).text(),
    'MC': $(`${assetNode}> tr:nth-child(${3 + int}) > td:nth-child(2)`).text(),
    'TNG': $(`${assetNode}> tr:nth-child(${3 + int}) > td:nth-child(3)`).text(),
    'DCR': $(`${assetNode}> tr:nth-child(${3 + int}) > td:nth-child(4)`).text(),
  };
};

function testFunc(assetNode, int) {
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
      const assetObj = testFunc(assetNode, i);
      outArr.push(assetObj);
    } else {
      return outArr;
    }
  }
  return outArr;
};

module.exports.iterateThroughGas = function(assetNode, assetNodeTitle) {
  outArr = [];
  for (let i = 0; i < 200; i++) {
    if ($(`${assetNode}> tr:nth-child(${2 + i}) > td:nth-child(1)`).text()) {
      const assetObj = testFunc(assetNode, i);
      outArr.push(assetObj);
    } else {
      return outArr;
    }
  }
  return outArr;
};
