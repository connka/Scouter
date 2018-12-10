const db = require('../server/server');

// const returnServerValue = async () => {
//   let out = await serv.passToServer().then(function(data) {
//     console.log(data)
//   })
// }
// returnServerValue()
exports.render_homepage = async (req, res) => {
  await db.passToServer().then(function(data) {
    res.json(data);
  });
};
