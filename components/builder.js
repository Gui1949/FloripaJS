const index = require("../public/index");
const bar = require("../public/bar");
const portfolio = require("../public/portfolio");
const snk = require("../public/snk");
const fs = require("fs");

let pages = ['bar', 'index', 'portfolio', 'snk'];

pages.forEach((element) => {
  fs.writeFile(
    `./build/${element}.html`,
    eval(element).page(),
    (err) => {
      console.log(err);
    }
  );
});