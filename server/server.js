const etsAesoUrl = 'http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet';
const dataScraper = require('../ets_aeso_assets/scraper');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config();

const getDataFromScraper = async () => {
  const result = await (
    dataScraper.sendDataToServer(etsAesoUrl).then(function(data) {
      return data;
    })
  );
  return result;
};


console.log(process.env.MONGODB_URI);
console.log(process.env.MONGODB_DBNAME);

const url = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DBNAME;


(async function() {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to server');
    function insertToDb(data) {
      db.collection('test').insertOne({data});
    }
    const db = client.db(dbName);
    await getDataFromScraper().then(function(x) {
      console.log('fired');
      insertToDb(x);
    });
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
