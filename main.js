const http = require("http");

const index = require("./public/index");
const bar = require("./public/bar");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  let url = req.url;

  if (url === "/bar") {
    res.end(bar.page());
  }

  else{
    res.end(index.page());
  }
});

server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");
