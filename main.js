const http = require("http");
const fs = require("fs");
const hello = require("./public/hello")

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  res.end(hello.helloPage());
});
server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");
