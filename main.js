const http = require("http");

const index = require("./public/index");
const bar = require("./public/bar");
const portfolio = require("./public/portfolio");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  let url = req.url;

  if (url === "/bar") {
    res.end(bar.page());
  }

  else if (url === "/portfolio") {
    res.end(portfolio.page());
  }

  else if (url === "/") {
    res.end(index.page());
  }

  else{
    res.end('Erro 404: Página não encontrada');
  }
  
});

server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");
