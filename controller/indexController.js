const db = require('../server/server');
const mathHelper = require('./formatHelpers/mathHelper')

exports.render_homepage = async (req, res) => {
  console.log(mathHelper)
  await db.passToServer().then(function(data) {
    let outData = data;
    outData.MATH = mathHelper.sumArray(data);
    console.log(outData);
    res.json(outData);
  });
};
