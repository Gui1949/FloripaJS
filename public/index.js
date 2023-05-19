const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

class Index extends Floripa {
  constructor() {
    super();
  }

  lifeCycle = `
    this.state = {
      contador: 0
    }

    let setState = () => {
      ${Actions.Commit("state.contador")}
      state.contador++
    }
    `;

  render = () => {
    init(); // -> Inicia a página
    Actions.Paradox(this.lifeCycle); // -> Funções executadas por dentro do DOM 
    createUpperNavBar("FloripaJS", "title-left");
    initDiv("main");
    createElement("p", "Seja bem-vindo ao FloripaJS!", "state.title");
    createElement("p", "0", "state.contador");
    createButton('id', 'Adicionar', "setState()");
    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
