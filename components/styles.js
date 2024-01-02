let fs = require("fs");
let path = require("path");

let elements = fs.readFileSync(
  path.join(__dirname) + "/css/default.css",
  "utf8"
);
elements = elements.toString();

exports.css = elements;
