const index = require("./public/index");
const bar = require("./public/bar");
const fs = require("fs");

let pages = ['bar', 'index'];

pages.forEach((element) => {
  fs.writeFile(
    `./build/${element}.html`,
    eval(element).page(),
    (err) => {
      console.log(err);
    }
  );
});