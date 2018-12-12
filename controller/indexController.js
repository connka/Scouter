const db = require('../server/server');
const mathHelper = require('./formatHelpers/mathHelper');
const to = require('../global/helpers').to;
/**
 * Pulls data from the server, adds a sum to the data object.
 * Then display the data as JSON
 * @param {object} req request header
 * @param {object} res response header
 */
exports.render_homepage = async (req, res) => {
  [err, dbData] = await to(db.passToServer().then(function(data) {
    const outData = data;
    // Sums all data from JSON and pushes and object of sums into the data object
    outData.MATH = mathHelper.sumArray(data);
    res.json(outData);
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
    const outData = data;
    // The required structrue for svg
    const outTable = {
      'name': 'TABLE', 'children':
      [
        {'name': 'COAL', 'children': []},
        {'name': 'HYDRO', 'children': []},
        {'name': 'WIND', 'children': []},
        {'name': 'BIOMASS AND OTHER', 'children': []},
        {'name': 'GAS', 'children': [
          {'name': 'Simple Cycle', 'children': []},
          {'name': 'Cogeneration', 'children': []},
          {'name': 'Combined Cycle', 'children': []},
        ]},
      ],
    };
    for (let i = 0; i < outTable.children.length; i++) {
      if (outTable.children[i].name === 'GAS') {
        for (let j=0; j < outTable.children[4].children.length; j++) {
          // Target the gas table
          const targetTable = outTable.children[4].children[j].name;
          const currentTable = outData['GAS'][j][targetTable];
          // Loop gas elements into outTable
          currentTable.forEach((tableEle) => {
            outTable.children[4].children[j].children.push({'name': tableEle.ASSET, 'size': parseInt(tableEle.TNG)});
          });
        };
      } else if (
        outTable.children[i].name === 'COAL' ||
        outTable.children[i].name === 'HYDRO' ||
        outTable.children[i].name === 'WIND' ||
        outTable.children[i].name === 'BIOMASS AND OTHER'
      ) {
        // Loop through the fuel table information
        const targetTable = outTable.children[i].name;
        const currentTable = outData[targetTable];
        // Loop fuel table information into appropriate element
        currentTable.forEach((tableEle) => {
          outTable.children[i].children.push({'name': tableEle.ASSET, 'size': parseInt(tableEle.TNG)});
        });
      }
    };
    res.json(outTable);
  }));
  if (err) throw new Error(err);
};
