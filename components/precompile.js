const Floripa = require("./compiler");

global.createUpperNavBar = (title, type, ...args) =>
  new Floripa().createUpperNavBar(title, type, ...args);

global.init = () => new Floripa().init();

global.initDiv = (id) => new Floripa().initDiv(id);

global.endDiv = () => new Floripa().endDiv();

global.createLine = () => new Floripa().createLine();

global.createElement = (element, ...value) =>
  new Floripa().createElement(element, ...value);

global.createPage = (title, ...body) =>
  new Floripa().createPage(title, ...body);

global.createButton = (id, value, action) =>
  new Floripa().createButton(id, value, action);