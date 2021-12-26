const Floripa = require("../components/compiler");
const Actions = require("../components/actions");

const render = () => {
  Floripa.initMaster();
  Floripa.createTitle("Opa!");
  Floripa.createButton("cu", "CUZIN", ()=>Actions.login_snk());
  Floripa.endMaster();
};

exports.page = () => {
  Floripa.init();
  return Floripa.createPage("Teste Sankhya", render());
};
