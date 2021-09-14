const http = require("http");
const Floripa = require("../compiler");

let data = "";

http.get("http://bardojeiz-server.herokuapp.com/data/", (res) => {
  res.setEncoding("utf-8");
  let rawData = "";
  res.on("data", (chunck) => {
    rawData += chunck;
  });

  res.on("end", async () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData.data.length);
      data = parsedData.data;
      return data;
    } catch (e) {
      console.error(e.message);
    }
  });
});

const criarPosts = () => {
  let i = 0;
  while (i < data.length) {
    console.log(i);
    Floripa.createCard(data[i]);
    i++;
  }
};

exports.page = () => {
  Floripa.init();
  return Floripa.buildPage(
    "Bar do Jeiz",
    Floripa.createUpperNavBar("Bar do Jeiz"),
    Floripa.initMaster(),
    Floripa.initDiv("feedUpperMargin"),
    criarPosts(),
    Floripa.endDiv(),
    Floripa.endMaster()
  );
};
