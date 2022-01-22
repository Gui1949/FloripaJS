const Floripa = require("../components/compiler");
exports.page = () => {
  Floripa.init();

  return Floripa.createPage(
    "Meu Portfólio",
    Floripa.createUpperNavBar("Meu Portfólio"),
    Floripa.initMaster(),
    Floripa.initDiv("feedUpperMargin"),

    Floripa.createCard(
      "main",
      "https://avatars.githubusercontent.com/u/28566734?v=4",
      "Guilherme Floriano",
      "22 anos de idade | Guarulhos-SP | Desenvolvedor e Ex-Carinha do T.I (atualmente carinha do sistema)",
      "https://giffiles.alphacoders.com/209/209661.gif",
      "Você já chegou a abrir um chamado referente a esse assunto?"
    ),

    Floripa.createSimpleCard(
      "Experiência",
      "SETEMBRO DE 2018 - ABRIL DE 2019",
      "<b>APRENDIZ DE T.I,</b> FARMARIN IND. E COMÉRCIO LTDA.",
      "Suporte ao usuário, formatação e configuração de computadores, protocolos POP e IMAP, Office 365 e GSuite.",
      "<BR/>",
      "ABRIL DE 2019 - OUTUBRO DE 2020",
      "<b>ASSISTENTE DE T.I,</b> FARMARIN IND. E COMÉRCIO LTDA.",
      "Suporte ao usuário, Instalação e configuração de VMWare ESXi, configuração de máquinas virtuais em nuvem, desenvolvimento de bots em Python, desenvolvimento de aplicações em Python e Kivy, upload de projetos em Git, instalação e gerenciamento de antivírus Bitdefender. ",
      "<BR/>",
      "OUTUBRO DE 2020 - PRESENTE",
      "<b>ANALISTA JR. DE T.I,</b> FARMARIN IND. E COMÉRCIO LTDA.",
      `Suporte nível 2, Desenvolvimento de aplicações em React JS com backend em NodeJS com 
      Express, criação de telas e dashboards no ERP Sankhya, elaboração de triggers e procedures 
      em SQL, configuração de backup em nuvem, criação de relatórios na ferramenta Jaspersoft 
      Ireport, gerenciamento de banco de dados, deploy de aplicações em HeroKu e Netlify, 
      criação e gerenciamento de websites via Wordpress, acompanhamento e elaboração de 
      validação de sistemas computadorizados, para atender a norma RDC 301 (ANVISA).`
    ),

    Floripa.createSimpleCard(
      "Escolaridade",
      "<b>Informática</b>, ETEC HORÁCIO AUGUSTO DA SILVEIRA (JANEIRO DE 2015 – DEZEMBRO DE 2017)",
      "<b>Redes de Computadores</b>, FACULDADE ENIAC (JANEIRO DE 2018 - JULHO DE 2020)"
    ),

    Floripa.createSimpleCard(
      "Habilidades",
      "Boa comunicação;",
      "Proatividade;",
      "Vontade de aprender;",
      "Experiência como Freelancer;",
      "Resolução de problemas;",
      "Inovação;"
    ),
    Floripa.createText("Site criado com FloripaJS"),
    Floripa.endDiv(),
    Floripa.endMaster()
  );
};
