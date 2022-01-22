const http = require("http");
const Floripa = require("../components/compiler");

let floripa = new Floripa();
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
    floripa.createCard(
      data[i].ID,
      data[i].USER_PIC,
      data[i].USERNAME,
      data[i].POST_DATA,
      data[i].PIC_LOCAL,
      data[i].POST_DESC
    );
    i++;
  }
};

exports.page = () => {
  floripa.init();
  return floripa.createPage(
    "Bar do Jeiz",
    floripa.createUpperNavBar("Bar do Jeiz"),
    floripa.initMaster(),
    floripa.initDiv("feedUpperMargin"),
    criarPosts(),
    floripa.endDiv(),
    floripa.endMaster()
  );
};
