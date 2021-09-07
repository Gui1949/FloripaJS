const Floripa = require("../compiler");

exports.page = () => {
  Floripa.init();
  return Floripa.createPage(
    "Bar do Jeiz",
    Floripa.initDiv("master"),
    Floripa.createTitle("Bar do Jeiz"),
    Floripa.endDiv()
  );
};
