const index = require("../public/index");
const Portfolio = require("../public/portfolio");
const Index = require("../public/index");
const LDM = require("../public/ldm");
const Login = require("../public/login");
const Welcome = require("../public/welcome");
const CI_CD = require("../public/cicd");
const Bar = require("../public/bar");

// FIXME: Acabar com esse if else

exports.router = (url, res) => {
  if (url === "/ci_cd") {
    res.end(new CI_CD().page());
  } else if (url === "/portfolio") {
    res.end(new Portfolio().page());
  } else if (url === "/") {
    res.end(new Welcome().page());
  } else if (url === "/ldm") {
    res.end(new LDM().page());
  } else if (url === "/bar") {
    res.end(Bar.page());
  } else if (url === "/login") {
    res.end(new Login().page());
  } else if (url === "/index") {
    res.end(new Index().page());
  } else {
    res.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
    res.end("Erro 404: Página não encontrada");
  }
};
