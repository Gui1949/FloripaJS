const index = require("../public/index");
const bar = require("../public/bar");
const portfolio = require("../public/portfolio");
const Index = require("../public/index");
const LDM = require("../public/ldm")
const Login = require("../public/login")

exports.router = (url, res) => {
    if (url === "/bar") {
        res.end(bar.page());
      } else if (url === "/portfolio") {
        res.end(portfolio.page());
      }else if (url === "/ldm") {
        res.end(new LDM().page());
      } else if (url === "/") {
        res.end(new Index().page());
      }else if (url === "/login") {
        res.end(new Login().page());
      } else {
        res.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
        res.end("Erro 404: Página não encontrada");
      }
}