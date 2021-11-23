const http = require("http");

const index = require("./public/index");
const bar = require("./public/bar");
const portfolio = require("./public/portfolio");
const blog = require("./public/blog");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  let url = req.url;

  console.log(req.url);

  if (url === "/bar") {
    res.end(bar.page());
  } else if (url === "/portfolio") {
    res.end(portfolio.page());
  } else if (url.includes("/blog")) {
    let newURL = url.replace("/blog/?", "");
    let params = new URLSearchParams(newURL);
    titulo = params.get("titulo");
    post = params.get("newpost");

    if (titulo != null) {
      blog.export(titulo);
    }

    if (post != null) {
      path = "./build/data.js";
      fs.readFile(path, "utf8", function (err, data) {
        if (err) throw err;
        data = data.toString();
        data = data.replace(/data = '/gim, "");
        data = data.replace("'", "")
        data = data.replace(";", "")
        data = JSON.parse(data)
        console.log(data)
        // fs.writeFile("./build/blog.html", data, function (err) {
        //   err || console.log("Show", data);
        // });
      });
    }
  } else if (url === "/") {
    res.end(index.page());
  } else {
    res.end("Erro 404: Página não encontrada");
  }
});

server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");
