const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet';
let arr = []
rp(url)
  .then(function(html){
    $ = cheerio.load(html);
    let summary_title = $("td tr:contains('Alberta Total Net Generation') td:nth-of-type(2)").text()
    console.log(summary_title)
  })
  .catch(function(err){
    console.log(err)
  });