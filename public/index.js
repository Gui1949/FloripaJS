const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

class Index extends Floripa {
  constructor() {
    super();
  }

  render = () => {
    init(); // -> Inicia a página

    Actions.Paradox(
      Actions.state("contador", 0),
      Actions.Function(
        "setState",
        Actions.Commit("contador_label", "contador"),
        Actions.sumState("contador")
      )
    ); // -> Funções executadas por dentro do DOM

    createUpperNavBar("FloripaJS", "title-left");
    initDiv("main");
    createElement("p", "Seja bem-vindo ao FloripaJS!", "state.title");
    createElement("p", "0", "contador_label");
    createButton("id", "Adicionar", "setState()");
    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
