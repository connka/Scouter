const etsAesoUrl = 'http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet';
const dataScraper = require('../ets_aeso_assets/scraper');

dataScraper.sendDataToServer(etsAesoUrl)