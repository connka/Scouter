const serv = require('./server')
const returnServerValue = async () => {
  let out = await serv.passToServer().then(function(data) {
    console.log(data)
  })
}
returnServerValue()