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
        "Com o FloripaJS, você pode desenvolver aplicativos web poderosos e escaláveis, sem a necessidade de se preocupar com o desenvolvimento da interface do usuário. O framework lida com as tarefas de manipulação de solicitações, roteamento, controle de estado e muito mais. Isso permite que você se concentre na lógica do servidor e na criação de APIs robustas."
    };
  }

  render = () => {
    init(); // Inicia a página
    createUpperNavBar("FloripaJS", "title-left");
    initDiv("main");
    createElement("h1", this.state.title); // Exibe o título vindo do estado
    createElement("p", this.state.description); // Exibe a descrição vinda do estado
    createElement("h2", "Recursos do FloripaJS:");
    createElement("ul");
    this.state.features.forEach((feature) => {
      const liElement = createElement("li", feature);
    });
    createElement("p", this.state.description2);
    this.createCard(
      "id",
      "Teste Card",
      "Carlos Fonseca",
      "23/12/2023 - 23:05",
      "carlos",
      "carlos"
    );
    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = WelcomePage;
