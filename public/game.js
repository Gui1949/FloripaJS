const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

class Game extends Floripa {
  constructor() {
    super();
    this.state = {
      sprites: [
        "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/game/up.png",
        "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/game/down.png",
        "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/game/left.png",
        "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/game/right.png",
      ],
    };
  }

  render = () => {
    init(); // -> Inicia a página

    //Vamos brincar igual o Construct 2 faz, vai dar trabalho, mas é melhor.

    this.createRPGCanvas(
      "game_rpg", //ID
      this.state.sprites //Sprites
    );
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Game;
