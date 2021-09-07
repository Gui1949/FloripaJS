const Floripa = require("../compiler");
console.log('oi')

exports.page = () => {
  return Floripa.createPage(
    "FloripaJS",
    Floripa.createTitle("FloripaJS"),
    Floripa.initDiv("master"),
    Floripa.createLine("hr"),
    Floripa.createElement("p", "Seja bem-vindo ao FloripaJS!"),
    Floripa.createTextInput("opa"),
    Floripa.endDiv()
  );
};
