app.use(express.static('/public/css'));
var path = require("path");

const http = require('http');
const PORT = 3000;

// a function which handles requests and sends response
function requestHandler(request, response) {
  response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
}

var server = http.createServer(requestHandler);


server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
