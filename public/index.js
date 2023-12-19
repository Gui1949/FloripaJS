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

    createUpperNavBar("Exemplo de Elemento Clicável (BETA)", "title-left");
    initDiv("main");
    createElement("p", "Clique no botão abaixo para somar", "state.title");
    createElement("p", "0", "contador_label");
    createButton("id", "Adicionar", "setState()");
    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
