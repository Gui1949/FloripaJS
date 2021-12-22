const http = require("http");
const fs = require("fs");
const Floripa = require("../components/compiler");

let data = {
  'title': 'Hello World'
}


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
    Floripa.insertScript(`
    json = JSON.parse(data);
    console.log(json.length);
    let i = 0;

    while(i < json.length){
      let obj = document.getElementById('feedUpperMargin')
      obj.insertAdjacentHTML('afterbegin', '<div class="card"><h2>' + json[i].title + '</h2>')
      i++
    }
    `),
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

