const db = require('../server/server');
const mathHelper = require('./formatHelpers/mathHelper')

exports.render_homepage = async (req, res) => {
  await db.passToServer().then(function(data) {
    let outData = data;
    outData.MATH = mathHelper.sumArray(data);
    console.log(outData);
    res.json(outData);
  });
};

exports.render_graph = async (req, res) => {
  await db.passToServer().then(function(data) {
    let outData = data;
    let outTable = {
      'name': 'TABLE', 'children':
      [
        {'name': 'COAL', 'children': []},
        {'name': 'HYDRO', 'children': []},
        {'name': 'WIND', 'children': []},
        {'name': 'BIOMASS AND OTHER', 'children': []},
      ],
    };
    for (let i = 0; i < outTable.children.length; i++) {
      const targetTable = outTable.children[i].name;
      const currentTable = outData[targetTable];
      currentTable.forEach((tableEle) => {
        outTable.children[i].children.push({'name': tableEle.ASSET, 'size': parseInt(tableEle.TNG)});
      });
    };
    res.json(outTable);
  });
};
