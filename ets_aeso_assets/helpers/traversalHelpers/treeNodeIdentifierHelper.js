module.exports.primaryParentNodesToObject = function() {
  const rootEtsCombustionAssetNode = `body > table:nth-child(10) > tbody > tr > td:nth-child(1) > table > tbody > tr >`;
  const rootEtsRenewableAssetNode = `body > table:nth-child(10) > tbody > tr > td:nth-child(2) > table > tbody > `;
  // tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > th
  // tr:nth-child(3) > td > table > tbody > tr:nth-child(1) > th
  const primaryParentNodes = {
    'coalAssetNode': `${rootEtsCombustionAssetNode}td:nth-child(1)> table > tbody `,
    'gasAssetNode': `${rootEtsCombustionAssetNode}td:nth-child(2)> table > tbody`,
    'hydroAssetNode': `${rootEtsRenewableAssetNode}tr:nth-child(1) > td > table > tbody`,
    'windAssetNode': `${rootEtsRenewableAssetNode}tr:nth-child(2) > td > table > tbody`,
    'biomassOtherAssetNode': `${rootEtsRenewableAssetNode}tr:nth-child(3) > td > table > tbody`,
  };
  return primaryParentNodes;
};

module.exports.parentNodesTitles = function(assetNode) {
  return $(`${assetNode}> tr:nth-child(1) > th`).text();
};

