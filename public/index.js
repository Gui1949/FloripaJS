const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

class Index extends Floripa {
  constructor() {
    super();

    this.state = {
      xablau: "xablix",
    };
  }

  setState = () => {
    this.state.xablau = "xableu";
    init()
    this.render()
  };

  render = () => {
    init();
    createUpperNavBar("FloripaJS", "title-left");
    initDiv("main");
    createElement("p", "Seja bem-vindo ao FloripaJS!");
    createElement("p", this.state.xablau);
    createButton(1, 1, () => this.setState())
    endDiv();
  };

  page = () => {
    console.log(this.state);
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
