const rp = require('request-promise');
const etsAesoUrl = 'http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet';
const scrapeHelper = require('./helpers/scrapeHelper.js');

/**
 * Create JSON of summary table from ets AESO live data
 * @param {string} scrapeUrl
 * @param {object} jsonSkele
 * @return {object} Scraped data in JSON
 */
function liveDataSummaryToJSON(scrapeUrl) {
  return rp(scrapeUrl)
      .then(function(html) {
        // return the title
        // return scrapeHelper.getTitle(html);
        return scrapeHelper.getAssetTables(html)
      })
      .catch(function(err) {
        return err;
      });
}
liveDataSummaryToJSON(etsAesoUrl).then(function(data) {
  console.log(data)
});
