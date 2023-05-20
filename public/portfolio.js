const Floripa = require("../components/compiler");

class Portfolio extends Floripa {
  constructor() {
    super();
  }

  render = () => {
    init();
    createUpperNavBar("Meu Portfólio"),
      initDiv("master");
      initDiv("feedUpperMargin"),
      createCard(
        "card1",
        "https://avatars.githubusercontent.com/u/28566734?v=4",
        "Guilherme Floriano",
        "23 anos de idade | Caraguatatuba-SP | Analista de Sistemas | Desenvolvedor Web Full Stack | Rest API | React | NextJS | Java | ERP Sankhya | Typescript ",
        "https://giffiles.alphacoders.com/209/209661.gif",
        "Tenho cinco anos de experiência com o ERP SANKHYA. atuo no desenvolvimento de módulos e eventos Java, relatórios em iReport e criação de triggers e procedures em MSSQL. Também sou capaz de desenvolver portais internos usando React, Next, NodeJS e TypeScript (esse dois ultimos como back-end), além de criar telas, componentes e dashboards no sistema Sankhya."
      ),
      createSimpleCard(
        "Experiência",
        "SETEMBRO DE 2018 - ABRIL DE 2019",
        "<b>APRENDIZ DE T.I,</b> FARMARIN IND. E COMÉRCIO LTDA.",
        "Suporte ao usuário, formatação e configuração de computadores, protocolos POP e IMAP, Office 365 e GSuite.",
        "<BR/>",
        "ABRIL DE 2019 - OUTUBRO DE 2020",
        "<b>ASSISTENTE DE T.I,</b> FARMARIN IND. E COMÉRCIO LTDA.",
        "Suporte ao usuário, Instalação e configuração de VMWare ESXi, configuração de máquinas virtuais em nuvem, desenvolvimento de bots em Python, desenvolvimento de aplicações em Python e Kivy, upload de projetos em Git, instalação e gerenciamento de antivírus Bitdefender. ",
        "<BR/>",
        "OUTUBRO DE 2020 - DEZEMBRO DE 2021",
        "<b>ANALISTA JR. DE T.I,</b> FARMARIN IND. E COMÉRCIO LTDA.",
        `Suporte nível 2, Desenvolvimento de aplicações em React JS com backend NodeJS/Express, criação de telas e dashboards no ERP Sankhya, elaboração de triggers e procedures em SQL, configuração de backup em nuvem, criação de relatórios na ferramenta Jaspersoft Ireport, gerenciamento de banco de dados, deploy de aplicações em HeroKu e Netlify, criação e gerenciamento de websites via Wordpress, acompanhamento e elaboração de validação de sistemas computadorizados, para atender a norma RDC 301 (ANVISA). Suporte geral ao sistema Sankhya.`,
        "<BR/>",
        "JANEIRO DE 2022 - PRESENTE",
        "<b>ANALISTA JR. DE T.I,</b> FARMARIN IND. E COMÉRCIO LTDA.",
        "Desenvolvimento de módulos e eventos Java, customizações no sistema SANKHYA, relatórios em iReport, triggers e procedures em MSSQL, desenvolvimento de portais internos utilizando React, Next, NodeJS e TypeScript, criação de telas, componentes e dashboards no sistema Sankhya, integração entre sistemas (Bitrix e RD Station), desenvolvimento de API, desenvolvimento de aplicativos mobile com React Native, elaboração de documentação dos softwares desenvolvidos, suporte aos usuários do sistema Sankhya, desenvolvimento de aplicações web em PHP, configuração de banco de dados MariaDB e configuração de ambiente Linux para aplicações web, configuração e gerenciamento de PaaS, Instalação e gerenciamento de Docker, utilização de Jenkins para CI/CD e criação de Swagger para API REST."
      ),
      createSimpleCard(
        "Escolaridade",
        "<b>Informática</b>, ETEC HORÁCIO AUGUSTO DA SILVEIRA (JANEIRO DE 2015 – DEZEMBRO DE 2017)",
        "<b>Tecnologia em Redes de Computadores</b>, FACULDADE ENIAC (JANEIRO DE 2018 - JULHO DE 2020)",
        "<b>Pós Graduação em Engenharia de Software</b>, PUC MINAS (JANEIRO DE 2022 - JULHO DE 2023)"
      ),
      createSimpleCard(
        "Habilidades",
        "Boa comunicação;",
        "Proatividade;",
        "Vontade de aprender;",
        "Experiência como Freelancer;",
        "Resolução de problemas;",
        "Inovação;"
      ),
      endDiv(),
      endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}


module.exports = Portfolio;