const index = require("../public/index");
const ldm = require("../public/ldm");
const fs = require("fs");
const Floripa = require("./compiler");

let pages = ['ldm'];

pages.forEach((element) => {
  fs.writeFile(
    `../build/${element}.html`,
    // eval(element).page(),
    new ldm().page(),
    (err) => {
      console.log(err);
    }
  );
});