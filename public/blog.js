const http = require("http");
const fs = require("fs");
const Floripa = require("../compiler");

exports.page = (titulo) => {
  Floripa.init();
  console.log(titulo)
  return Floripa.createPage(
    titulo,
    Floripa.blackBody(),
    Floripa.createUpperNavBar(titulo),
    Floripa.initMaster(),
    Floripa.initDiv("feedUpperMargin"),
    Floripa.whiteSpace(),
    Floripa.createSimpleCard('Olá mundo!'),
    Floripa.endDiv(),
    Floripa.endMaster()
  );
};

exports.export = (titulo) => {
  fs.writeFile(
    `./build/blog.html`,
    exports.page(titulo),
    (err) => {
      console.log(err);
    }
  );
}
