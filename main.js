const http = require("http");
const fs = require("fs");
const index = require("./public/index");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  let url = req.url;

  if (url === "/sobre") {
    res.write("uepa");
    res.end();
  }

  else{
    res.end(index.page());
  }
});
server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");
