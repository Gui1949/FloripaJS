const Floripa = require("../components/compiler");
require("../components/precompile");

class CI_CD extends Floripa {
  constructor() {
    super();
  }

  render = () => {
    init();
    createUpperNavBar("Gerenciador de Aplicações", "center");
    initDiv("feedUpperMargin");
    initDiv("master");
    this.createSimpleCard(
      "MedAPI",
      "Portal do Cliente, Integração B24-SNK, Sistema de Avaliações de Desempenho, Bot Teams e Geração de Link de Pagamento PINBANK."
    );
    this.createButton(
      "canvas",
      "Atualizar MedAPI",
      "fetch(`http://msp-thanos.medsystems.local:3001/update/medapi`).then((res) => res.json()).then((reqres) => window.alert(`Solicitação enviada. Retorno: ${reqres.data}`))"
    );
    this.createButton(
      "canvas",
      "Reiniciar MedAPI",
      "fetch(`http://msp-thanos.medsystems.local:3001/restart/medapi`).then((res) => res.json()).then((reqres) => window.alert(`Solicitação enviada. Retorno: ${reqres.data}`))"
    );
    endDiv();
    endDiv();
  };

  page = () => {
    return this.createPage("Gerenciador de Aplicações", this.render());
  };
}

module.exports = CI_CD;
