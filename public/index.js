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
      contador: 0,
      textbox: ""
    }

    let setState = () => {
      console.log(state.xablau)
      state.textbox = ${Actions.getValue('id')}
      state.xablau = "xableu"
      state.title = "IIIIIIIIIIIIIIIIIIIHULLLLL"
      console.log(state.xablau)
      ${Actions.Commit("state.title")}
      ${Actions.Commit("state.xablau")}
      ${Actions.Commit("state.contador")}
      ${Actions.Commit("state.textbox")}
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
    createElement("p", "Texto", "state.textbox");
    createElement("p", "Texto", "state.contador");
    createButton(1, 1, "setState()");
    this.createText('Digite algo aqui:')
    this.createTextInput('id')
    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
