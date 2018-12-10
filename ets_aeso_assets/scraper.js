const rp = require('request-promise');
const etsAesoUrl = 'http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet';
const scrapeHelper = require('./helpers/scrapeHelper.js');
const fs = require('fs');
/**
 * Create JSON of summary table from ets AESO live data
 * @param {string} scrapeUrl
 * @param {object} jsonSkele
 * @return {object} Scraped data in JSON
 */
function liveDataSummaryToJSON(scrapeUrl) {
  return rp(scrapeUrl)
      .then(function(html) {
        /**
         * @param {string} html
         * @return {string} a string
         */
        function testHtml(html) {
          let titleObj = scrapeHelper.getTitle(html);
          let assetObj = scrapeHelper.getAssetTables(html);
          let mergObj = {...titleObj, ...assetObj};
          return mergObj;
        }
        let data = testHtml(html);
        // Creates a JSON object containing data from etsAesoUrl
        return data;
      })
      .catch(function(err) {
        return err;
      });
}
liveDataSummaryToJSON(etsAesoUrl).then(function(data) {
  fs.writeFile(`./ets_aeso_assets/history/${data.TIME}.json`, JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
  }
  );
});
