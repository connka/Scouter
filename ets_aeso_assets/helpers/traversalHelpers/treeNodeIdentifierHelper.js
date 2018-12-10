module.exports.primaryParentNodesToObject = function() {
  const rootEtsAssetNode = `body > table:nth-child(10) > tbody > tr > td:nth-child(1) > table > tbody > tr > `;
  const primaryParentNodes = {
    'coalAssetNode': `${rootEtsAssetNode}td:nth-child(1) > table > tbody `,
    'gasAssetNode': `${rootEtsAssetNode}td:nth-child(2) > table > tbody`,
  };
  return primaryParentNodes;
};

module.exports.primaryParentNodesTitles = function(AssetNode) {
  return $(`${AssetNode}> tr:nth-child(1) > th`).text();
};

