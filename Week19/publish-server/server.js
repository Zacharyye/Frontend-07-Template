let http = require('http');
let https = require('https');
// let fs = require('fs');
let unzipper = require('unzipper');
let querystring = require('querystring');
const { info } = require('console');

//[2]auth 路由 接收code. 用code+client_id+secret换token
function auth (request, response) {
  let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
  getToken(query.code, function(info) {
    console.log(info);  
    // response.write(JSON.stringify(info));
    response.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`);
    response.end();
  });
}

function getToken(code, callback) {
  let request = https.request({
    hostname: "github.com",
    path: `/login/oauth/access_token?code=${code}&client_id=Iv1.8b3c28a34240e9a9&client_secret=fd9ffbeb39231dd6506398f56e4ee3a9a1fe217e`,
    port: 443,
    method: "POST"
  }, function (response) {
    let body = "";
    response.on('data', chunk => {
      body += chunk.toString();
    });
    response.on('end', chunk => {
      callback(querystring.parse(body));
    })
  });
  request.end();
}
//[4]用token获取用户信息，检查权限
//publish路由接受发布
function publish (request, response) {
  let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);
  getUser(query.token, info => {
    console.log(info.login, typeof info.login)
    if(info.login === "Zacharyye") {
      request.pipe(unzipper.Extract({path: '../server/public/'}));
      request.on('end', function () {
        response.end("Success!");
      });
    } else {
      response.end("Failure!");
    }
  });
}

function getUser(token, callback) {
  let request = https.request({
    hostname: "api.github.com",
    path: '/user',
    port: 443,
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
      "User-Agent": "top=publis"
    }
  }, function (response) {
    let body = "";
    response.on('data', chunk => {
      body += chunk.toString();
    });
    response.on('end', chunk => {
      callback(JSON.parse(body));
    })
  });
  request.end();
}

//2.
http.createServer(function (request, response) {
  console.log("request");
  if(request.url.match(/^\/auth\?/)) {
    return auth(request, response);
  }
  if(request.url.match(/^\/publish\?/)) {
    return publish(request, response);
  }
  // let outfile = fs.createWriteStream("../server/public/index.html");
  // request.pipe(outfile);
  // request.pipe(unzipper.Extract({path: '../server/public/'}));
}).listen(8082);

//1.
// http.createServer(function (request, response) {
//   console.log(request.headers);

//   let outfile = fs.createWriteStream("../server/public/index.html");

//   request.on("data", chunk => {
//     outfile.write(chunk);
//   })
//   request.on("end", () => {
//     outfile.end();
//     response.end("Success");
//   })
// }).listen(8082);