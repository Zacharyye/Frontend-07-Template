let http = require('http');
let fs = require("fs");
let archiver =require('archiver');
let child_process = require('child_process');
let querystring = require('querystring');

//[1]open GET https://github.com/login/oauth/authorize
child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.8b3c28a34240e9a9`);
//[3]创建server，接受token，后点击发布
http.createServer(function (request, response) {
  
  let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
  publish(query.token);

}).listen(8083);

function publish (token) {
  let request = http.request({
    hostname: "127.0.0.1",
    port: 8082,
    method: "POST",
    path: "/publish?token=" + token,
    headers: {
      'Content-Type': 'application/octet-stream',
      // 'Content-Length': stats.size
    }
  }, response => {
    console.log(response);
  })
  const archive = archiver('zip', {
    zlib: {level: 9} // sets the compression level
  })

  archive.directory('sample/', false);

  archive.finalize(); 

  archive.pipe(request);
}

//3.
// let request = http.request({
//   hostname: "127.0.0.1",
//   port: 8082,
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/octet-stream',
//     // 'Content-Length': stats.size
//   }
// }, response => {
//   console.log(response);
// })

// // let file = fs.createReadStream("./sample.html");

// const archive = archiver('zip', {
//   zlib: {level: 9} // sets the compression level
// })

// archive.directory('sample/', false);

// archive.finalize(); 

// // archive.pipe(fs.createWriteStream('tmp.zip'));
// archive.pipe(request);


//2.
// fs.stat("./sample.html", (err, stats) => {
//   let request = http.request({
//     hostname: "127.0.0.1",
//     port: 8082,
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/octet-stream',
//       'Content-Length': stats.size
//     }
//   }, response => {
//     console.log(response);
//   })
  
//   let file = fs.createReadStream("./sample.html");
  
//   file.pipe(request);
  
//   file.on('end', () => request.end());
// })


//1.
// let request = http.request({
//   hostname:  "1.116.154.131",
//   port: 8082,
//   method: "POST",
//   headers: {
//     "Content-Type": "application/octet-stream"
//   },
// }, response => {
//   console.log(response);
// });

// let file = fs.createReadStream("./sample.html");

// file.on("data", chunk => {
//   console.log(chunk.toString());
//   request.write(chunk);
// })

// file.on("end", chunk => {
//   console.log("read finished");
//   request.end(chunk);
// })