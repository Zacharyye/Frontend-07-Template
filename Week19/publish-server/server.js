let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {
  console.log(request.headers);

  let outfile = fs.createWriteStream("../server/public/index.html");

  request.on("data", chunk => {
    outfile.write(chunk);
  })
  request.on("end", () => {
    outfile.end();
    response.end("Success");
  })
}).listen(8082);