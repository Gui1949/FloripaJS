const http = require("http");
const Floripa = require("../compiler");

const puxarPosts = async () => {
  await http.get("http://bardojeiz-server.herokuapp.com/data/", (res) => {
    res.setEncoding("utf-8");
    let rawData = "";
    res.on("data", (chunck) => {
      rawData += chunck;
    });

    res.on("end", async () => {
      try {
        const parsedData = await JSON.parse(rawData);
        console.log(parsedData.data.length);
        let data = parsedData.data;
        return data;
      } catch (e) {
        console.error(e.message);
      }
    });
  });
};

const criarPosts = async () => {
  let i = 0;
  let data = puxarPosts();

  while (i < 123) {
    console.log(i);
    Floripa.createCard();
    i++;
  }
};

exports.page = () => {
  Floripa.init();
  return Floripa.createPage(
    "Bar do Jeiz",
    Floripa.createUpperNavBar("Bar do Jeiz"),
    Floripa.initDiv("master"),
    Floripa.initDiv("feedUpperMargin"),
    criarPosts(),
    Floripa.endDiv(),
    Floripa.endDiv()
  );
};
