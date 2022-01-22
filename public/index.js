const Floripa = require("../components/compiler");
const Actions = require("../components/actions");

const render = () => {
  Floripa.createUpperNavBar(
    "FloripaJS",
    "title-left",
    'Xavasca'
  );
  Floripa.initDiv("main");
  Floripa.createLine();
  Floripa.createElement("p", "Seja bem-vindo ao FloripaJS!");
  Floripa.endDiv();
};

exports.page = () => {
  Floripa.init();
  return Floripa.createPage("FloripaJS", render());
};
