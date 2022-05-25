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
      "https://scontent.fgru4-1.fna.fbcdn.net/v/t39.30808-6/278604806_107448565276561_8962520869161897092_n.png?_nc_cat=106&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeFNLbg4cnyhzev7w0j6DmtXs0UTejx4vjqzRRN6PHi-OrvJ0hKAVLACWPq6PKW1xE3I5GWNK_PGhOjdNfsZ7CN0&_nc_ohc=wFIiY6NQzecAX80mhUT&_nc_ht=scontent.fgru4-1.fna&oh=00_AT8Is78dRfF9-M0y8YlCwE7HcXYBgSdWjQFMJ6DE7oUG3w&oe=627BD6B5",
      "Liquidificador da Morte",
      "Melhor que Los Hermanos, Autoramas e Pato FU",
      `<iframe style='border-radius:12px' src='https://open.spotify.com/embed/album/7dOwSHdEp9gikziApruMew?utm_source=generator'frameBorder='0' class='post_img' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>`,
      "Xablau"
    );
    this.insertScript(
      '<script src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"data-preference-id="194618052-b8583ca5-a045-454a-b53c-42ad3b746712" data-source="button"></script>'
    );
    endDiv();
    endDiv();
  };

  page = () => {
    return this.createPage("Liquidificador da Morte", this.render());
  };
}

module.exports = LDM;
