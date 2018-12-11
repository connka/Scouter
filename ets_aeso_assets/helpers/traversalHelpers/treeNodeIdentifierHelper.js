module.exports.primaryParentNodesToObject = function() {
  // Root element for COAL and GAS
  const rootEtsCombustionAssetNode = `body > table:nth-child(10) > tbody > tr > td:nth-child(1) > table > tbody > tr >`;
  // Root element for HYDRO, WIND, and BIOMASS AND OTHER
  const rootEtsRenewableAssetNode = `body > table:nth-child(10) > tbody > tr > td:nth-child(2) > table > tbody > `;
  // Parent element for COAL, GAS, HYDRO, WIND, and BIOMASS AND OTHER
  const primaryParentNodes = {
    'coalAssetNode': `${rootEtsCombustionAssetNode}td:nth-child(1)> table > tbody `,
    'gasAssetNode': `${rootEtsCombustionAssetNode}td:nth-child(2)> table > tbody`,
    'hydroAssetNode': `${rootEtsRenewableAssetNode}tr:nth-child(1) > td > table > tbody`,
    'windAssetNode': `${rootEtsRenewableAssetNode}tr:nth-child(2) > td > table > tbody`,
    'biomassOtherAssetNode': `${rootEtsRenewableAssetNode}tr:nth-child(3) > td > table > tbody`,
  };
  return primaryParentNodes;
};

/**
 * Returns the title of a targeted table
 * @param {string} assetNode The parent node for a given table
 * @return {string} Returns the title of the parent nodes table
 */
module.exports.parentNodesTitles = function(assetNode) {
  return $(`${assetNode}> tr:nth-child(1) > th`).text();
};

