const index = require("../public/index");
const portfolio = require("../public/portfolio");
const fs = require("fs");
const Floripa = require("./compiler");

let pages = ['portfolio'];

pages.forEach((element) => {
  fs.writeFile(
    `build/${element}.html`,
    // eval(element).page(),
    new portfolio().page(),
    (err) => {
      console.log(err);
    }
  );
});