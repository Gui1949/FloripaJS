const Floripa = require("../components/compiler");
const Actions = require("../components/actions");

let floripa = new Floripa();

class Index extends Floripa {
  constructor() {
    super();
  }

  render = () => {
    floripa.createUpperNavBar("FloripaJS", "title-left", "Xavasca");
    floripa.initDiv("main");
    floripa.createLine();
    floripa.createElement("p", "Seja bem-vindo ao FloripaJS!");
    floripa.endDiv();
  };

  page = () => {
    return floripa.createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
