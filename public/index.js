const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require('../components/precompile');

class Index extends Floripa {
  constructor() {
    super();
  }

  render = () => {
    init()
    createUpperNavBar("FloripaJS", "title-left");
    initDiv("main");
    createElement("p", "Seja bem-vindo ao FloripaJS!");
    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
