const etsAesoUrl = 'http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet';
const dataScraper = require('../ets_aeso_assets/scraper');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config();

// const getDataFromScraper = async () => {
//   const result = await (
//     dataScraper.sendDataToServer(etsAesoUrl).then(function(data) {
//       return data;
//     })
//   );
//   return result;
// };
console.log(process.env.MONGODB_URI)
console.log(process.env.MONGODB_DBNAME)

const url = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DBNAME;

(async function() {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    let r = await db.collection('test').insertOne({a:1});
    assert.equal(1, r.insertedCount);

    // Insert multiple documents
    r = await db.collection('test').insertMany([{a:2}, {a:3}]);
    assert.equal(2, r.insertedCount);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
