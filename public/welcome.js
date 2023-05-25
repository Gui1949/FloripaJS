const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

class WelcomePage extends Floripa {
  constructor() {
    super();
    this.state = {
      title: "Bem-vindo ao FloripaJS!",
      description:
        "O FloripaJS é um framework web desenvolvido em Node.js puro, sem a necessidade de programação front-end. Ele permite criar aplicativos de forma eficiente e sem a complexidade de lidar com a camada visual. Com o FloripaJS, você pode focar na lógica do servidor e na criação de APIs, simplificando o desenvolvimento de aplicações web.",
      features: [
        "Programação centrada no servidor",
        "Criação de APIs de forma simplificada",
        "Manipulação eficiente de solicitações e respostas",
        "Facilidade na integração com bancos de dados",
        "Escalabilidade e desempenho otimizados",
      ],
      description2:
        "Com o FloripaJS, você pode desenvolver aplicativos web poderosos e escaláveis, sem a necessidade de se preocupar com o desenvolvimento da interface do usuário. O framework lida com as tarefas de manipulação de solicitações, roteamento, controle de estado e muito mais. Isso permite que você se concentre na lógica do servidor e na criação de APIs robustas.",
    };
  }

  render = () => {
    init(); // Inicia a página
    createUpperNavBar("FloripaJS", "title-left");
    initDiv("main");
    createElement("h1", this.state.title); // Exibe o título vindo do estado
    this.createImage("")
    createElement("p", this.state.description); // Exibe a descrição vinda do estado
    createElement("h2", "Recursos do FloripaJS:");
    createElement("ul");
    this.state.features.forEach((feature) => {
      const liElement = createElement("li", feature);
    });
    createElement("p", this.state.description2);

    createElement("h2", "Exemplos dos principais elementos:");
    createElement("li", "Card - Feed de postagens (com imagens):");

    this.createCard(
      "id",
      "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/carlos.jpg",
      "Carlos Fonseca",
      "23/12/2023 - 23:05",
      "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/post_carlos.png",
      "Deus ajuda quem cedo madruga..."
    );

    createElement("li", "Card - Feed de postagens (com link incorporado):");

    this.createIncorporatedCard(
      "id2",
      "https://i.scdn.co/image/ab6761610000f178d1019aaaae3ddd08beeed690",
      "Liquidificador da Morte",
      "Melhor que Los Hermanos, Autoramas e Pato FU",
      `<iframe style='border-radius:12px;' src='https://open.spotify.com/embed/album/7dOwSHdEp9gikziApruMew?utm_source=generator'frameBorder='0' class='post_img' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>`,
      "AQUI O BAGULHO EH TRASH, TA LIGADO?? ironia, sátira, safadeza, escárnio, rosque de garagem e uma pitada de non sense. isso aqui n é uma banda n porra, sou eu e ja era po."
    );

    createElement("li", "Card simples - Somente Texto");

    this.createSimpleCard(
      "O que é o Liquidificador da Morte?",
      "Eu sou aquele doidão que tá na ativa, mandando um som pra zoar e desconstruir tudo. Não levo nada a sério, saca? Tô aqui pra fazer você rir, se divertir e, quem sabe, questionar essa merda toda que tá aí.",
      "Minhas músicas? Ah, meu mano, elas são um mix de loucura, humor sem noção e crítica social. É tipo um tsunami sonoro de piadas sem filtro, letras sacanas e riffs toscos. Tô aqui pra chocar e fazer você pensar no absurdo da vida, no escroto do sistema, mas de uma forma que te faça gargalhar enquanto isso.",
      "Se liga, meu mano, não tô pra agradar todo mundo. Se você não curte essa zoeira desbocada, passa reto, não é pra você. Mas se tiver afim de embarcar nessa viagem maluca, vamos juntos! Aqui é onde o rock se mistura com a palhaçada e o caos toma conta.",
      "Então, esquece essa parada de 'banda'. Não tem formação certinha, nem palco glamouroso. É só eu, minha guitarra e a vontade de tirar um sarro dessa porra toda. Se liga, brother, que o bagulho é pesado, mas no fim é só diversão e loucura desenfreada. Vem comigo nessa maluquice e vamos bagunçar tudo por aí!"
    );

    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = WelcomePage;
