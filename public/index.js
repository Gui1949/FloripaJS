const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

class Index extends Floripa {
  constructor() {
    super();
  }

  lifeCycle = `
    this.state = {
      xablau: "",
      titulo: "",
      contador: 0
    }

    let setState = () => {
      console.log(state.xablau)
      state.xablau = "xableu"
      state.title = "IIIIIIIIIIIIIIIIIIIHULLLLL"
      console.log(state.xablau)
      ${Actions.Commit("state.title")}
      ${Actions.Commit("state.xablau")}
      ${Actions.Commit("state.contador")}
      state.contador++
    }

    `;

  render = () => {
    init();
    Actions.Paradox(this.lifeCycle);
    createUpperNavBar("FloripaJS", "title-left");
    initDiv("main");
    createElement("p", "Seja bem-vindo ao FloripaJS!", "state.title");
    createElement("p", "Texto", "state.xablau");
    createElement("p", "Texto", "state.contador");
    createButton(1, 1, "setState()");
    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
