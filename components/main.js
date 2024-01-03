const http = require("http");
const fs = require("fs");
const Actions = require("../components/actions");
const Routes = require('./routes')
let url = 'http://localhost:25565/welcome';
let start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);


const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  let url = req.url;

  console.log(req.url);

  //Se eu passar o req.body aqui no Routes.router, eu consigo fazer um servidor REST!
  //E aí eu vou ter front e backend juntos, ao mesmo tempo!!
  Routes.router(req.url, res)

});

server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");
