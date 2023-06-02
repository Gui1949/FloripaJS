const index = require("../public/index");
const Game = require("../public/game");
const Portfolio = require("../public/portfolio");
const Index = require("../public/index");
const LDM = require("../public/ldm");
const Login = require("../public/login");
const Welcome = require("../public/welcome")

exports.router = (url, res) => {
  if (url === "/game") {
    res.end(new Game().page());
  } else if (url === "/portfolio") {
    res.end(new Portfolio().page());
  } else if (url === "/welcome") {
    res.end(new Welcome().page());
  } else if (url === "/ldm") {
    res.end(new LDM().page());
  } else if (url === "/") {
    res.end(new Index().page());
  } else if (url === "/login") {
    res.end(new Login().page());
  } else {
    res.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
    res.end("Erro 404: Página não encontrada");
  }
};
