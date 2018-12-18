const db = require('../server/server');
const to = require('../global/helpers').to;
const svgFormatter = require('./helpers/indexHelper').svgFormatter;
const sendRecentDataToServer = require('../server/lib/reactSchema').sendRecentDataToServer;
/**
 * Pulls data from the server, adds a sum to the data object.
 * Then display the data as JSON
 * @param {object} req request header
 * @param {object} res response header
 */
exports.render_homepage = async (req, res) => {
  [err, dbData] = await to(sendRecentDataToServer().then(function(data) {
    const outData = data;
    res.json({express: JSON.stringify(outData)});
  }));
  if (err) throw new Error(err.stack);
};
/**
 * Pulls data from the server, formats for svg (d3) output.
 * Then display the data as JSON
 * @param {object} req request header
 * @param {object} res response header
 */
exports.render_graph = async (req, res) => {
  // Send the data to server then format for svg
  [err, dbData] = await to(db.passToServer().then(function(data) {
    const outTable = svgFormatter(data);
    res.json(outTable);
  }));
  if (err) throw new Error(err);
};
