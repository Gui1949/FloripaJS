const http = require("http");
const fs = require("fs");
const Actions = require("../components/actions");
const Routes = require('./routes')

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  let url = req.url;

  console.log(req.url);

  Routes.router(req.url, res)

});

server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");
