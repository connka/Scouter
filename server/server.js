const etsAesoUrl = 'http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet';
const dataScraper = require('../ets_aeso_assets/scraper');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

/**
 * @return {object} pulls the data from ets.aeso and returns as JSON
 */
const getDataFromScraper = async () => {
  const result = await (
    dataScraper.sendDataToServer(etsAesoUrl, true).then(function(data) {
      return data;
    })
  );
  console.log(typeof(result.TIMESTAMP));
  return result;
};
/**
 * Inserts a single document into the database
 * @param {object} data Any JSON to be inserted into mongoDB
 * @param {db} db Connection to the database
 */
function insertToDb(data, db) {
  db.collection('test').insertOne({data});
}

const getLastInsert = async (db, N) => {
  let outArr = []
  await db.collection('test').find().sort({ $natural: -1 }).limit(N).forEach(queryResults => {
    outArr.push(queryResults)
  })
  return outArr
}
// URL for mongoDB server
const url = process.env.MONGODB_URI;
// Name of mongoDB server
const dbName = process.env.MONGODB_DBNAME;

// module.exports.passToServer = async () => {
//   let client;
//   let out = {};
//   try {
//     client = await MongoClient.connect(url);
//     console.log('Connected correctly to server');
//     const db = client.db(dbName);
//     out = await getDataFromScraper().then(function(dataToInput) {
//       insertToDb(dataToInput, db);
//       return dataToInput;
//     });
//   } catch (err) {
//     console.log(err.stack);
//   }
//   // Close connection
//   client.close();
//   return out;
// };

module.exports.getMostRecentData = async () => {
  let client;
  let out = {};
  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    out = await getLastInsert(db, 1)
  } catch (err) {
    console.log(err.stack);
  }
  // Close connection
  client.close();
  return out;
};

