const index = require("../public/index");
const file = require("../public/" + process.argv[2].replace('.js',''));
const fs = require("fs");
const Floripa = require("./compiler");

fs.writeFile(
  `build/${process.argv[2].replace('.js','')}.html`,
  // eval(element).page(),
  new file().page(),
  (err) => {
    console.log(err);
  }
);
