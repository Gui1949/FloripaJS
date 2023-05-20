const Floripa = require("../components/compiler");
require("../components/precompile");

class LDM extends Floripa {
  constructor() {
    super();
  }

  render = () => {
    this.insertScript(
      '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4228098010894354"crossorigin="anonymous"></script>'
    );
    init();
    createUpperNavBar("Liquidificador da Morte", "center");
    initDiv("feedUpperMargin");
    initDiv("master");
    this.createIncorporatedCard(
      "xavasca",
      "https://i.scdn.co/image/ab6761610000f178d1019aaaae3ddd08beeed690",
      "Liquidificador da Morte",
      "Melhor que Los Hermanos, Autoramas e Pato FU",
      `<iframe style='border-radius:12px;' src='https://open.spotify.com/embed/album/7dOwSHdEp9gikziApruMew?utm_source=generator'frameBorder='0' class='post_img' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>`,
      "AQUI O BAGULHO EH TRASH, TA LIGADO?? ironia, sátira, safadeza, escárnio, rosque de garagem e uma pitada de non sense. isso aqui n é uma banda n porra, sou eu e ja era po."
    );
    this.insertScript(
      '<script src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"data-preference-id="194618052-b8583ca5-a045-454a-b53c-42ad3b746712" data-source="button"></script>'
    );
    this.createSimpleCard(
      "O que é o Liquidificador da Morte?",
      "Eu sou aquele doidão que tá na ativa, mandando um som pra zoar e desconstruir tudo. Não levo nada a sério, saca? Tô aqui pra fazer você rir, se divertir e, quem sabe, questionar essa merda toda que tá aí.",
      "Minhas músicas? Ah, meu mano, elas são um mix de loucura, humor sem noção e crítica social. É tipo um tsunami sonoro de piadas sem filtro, letras sacanas e riffs toscos. Tô aqui pra chocar e fazer você pensar no absurdo da vida, no escroto do sistema, mas de uma forma que te faça gargalhar enquanto isso.",
      "Se liga, meu mano, não tô pra agradar todo mundo. Se você não curte essa zoeira desbocada, passa reto, não é pra você. Mas se tiver afim de embarcar nessa viagem maluca, vamos juntos! Aqui é onde o rock se mistura com a palhaçada e o caos toma conta.",
      "Então, esquece essa parada de 'banda'. Não tem formação certinha, nem palco glamouroso. É só eu, minha guitarra e a vontade de tirar um sarro dessa porra toda. Se liga, brother, que o bagulho é pesado, mas no fim é só diversão e loucura desenfreada. Vem comigo nessa maluquice e vamos bagunçar tudo por aí!"
    );
    endDiv();
    endDiv();
  };

  page = () => {
    return this.createPage("Liquidificador da Morte", this.render());
  };
}

module.exports = LDM;
