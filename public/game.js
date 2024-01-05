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
      this.state.sprites //Sprites do Player
      //Propriedades:
        //Insere também o sprite do Background do canvas
        //Insere o background do mapa
      //Função para criar inimigos:
        //this.createEnemy(
        //  id,
        //  sprites do inimigo, 
        //  informar se a posição é aleatória ou fixa,
        //  definir tipo de inimigo (rpg, plataforma, etc), - Isso determina o tipo de colisão
        //  definir ação (criar texto, morrer...)
        //)
    );
  };

  page = () => {
    return this.createGame("FloripaJS", this.render());
  };
}

module.exports = Game;
