const Floripa = require("../components/compiler");
const Actions = require("../components/actions");

const render = () => {
  Floripa.initMaster();
  Floripa.createTextInput("login", "Usuário");
  Floripa.createTextInput("passwd", "Senha");
  Actions.createLinkAction(
    "cu",
    "snk/login?",
    `username='${Actions.getValueFrom("login")}'&passwd='${Actions.getValueFrom("passwd")}`
  );
  Floripa.createButton("cu", "CUZIN", "cu()");
  Floripa.endMaster();
};

exports.page = () => {
  Floripa.init();
  return Floripa.createPage("Teste Sankhya", render());
};
