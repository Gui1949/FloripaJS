const index = require("../public/index");
const file = require("../public/" + process.argv[2].replace('.js',''));
const fs = require("fs");
const Floripa = require("./compiler");

const build = async() => {
	
fs.writeFile(
  `build/${process.argv[2].replace('.js','')}.html`,
   //file.page(),
  await new file().page(),
  (err) => {
    console.log(err);
  }
);

}

build()
