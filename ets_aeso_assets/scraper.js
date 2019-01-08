const rp = require('request-promise');
const scrapeHelper = require('./helpers/scrapeHelper.js');
const mathHelper = require('./formatHelpers/mathHelper');
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
          const timeStamp = {'TIMESTAMP': Date.now()};
          const titleObj = scrapeHelper.getTitle(html);
          const assetObj = scrapeHelper.getAssetTables(html);
          const mergObj = {...timeStamp, ...titleObj, ...assetObj};
          return mergObj;
        }
        const data = testHtml(html);
        // Creates a JSON object containing data from etsAesoUrl
        return data;
      })
      .catch(function(err) {
        return err;
      });
}
/**
 * @param {string} etsAesoUrl ets.Aeso url(scraping target)
 * @param {*} saveBool if true saves a JSON file of the data to server/data
 * @return {object} JSON data
 */
module.exports.sendDataToServer = function(etsAesoUrl, saveBool) {
  if (saveBool === true) {
    liveDataSummaryToJSON(etsAesoUrl).then(function(data) {
      fs.writeFile(`./server/data/${data.TIME}.json`, JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('complete');
      }
      );
    });
  }
  return liveDataSummaryToJSON(etsAesoUrl).then(function(data) {
    // Sums all data from JSON and pushes and object of sums into the data object
    data.MATH = mathHelper.sumArray(data);
    return data;
  })
      .catch(function(err) {
        return err;
      });
};