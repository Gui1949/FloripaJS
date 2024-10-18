const http = require("http");
const fs = require("fs");
const Actions = require("../components/actions");
const Routes = require('./routes')
let url = 'http://localhost:25565/welcome';
let start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);


const server = http.createServer(async(req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  await Routes.router(req.url, res)
  res.end();
});

server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");
