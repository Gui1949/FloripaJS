const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

class Game extends Floripa {
  constructor() {
    super();
  }

  render = () => {
    init(); // -> Inicia a página

    //Vamos brincar igual o Construct 2 faz, vai dar trabalho, mas é melhor.

    this.createRPGCanvas("game_rpg")
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Game;
