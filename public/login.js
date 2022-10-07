const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

// ISSO AQUI TUDO DEVO COLOCAR NO COMPILER
let fs = require("fs");
let path = require("path");

let data = fs.readFileSync(path.join(__dirname) + "/pagina.flo", "utf8");
data = data.toString();
// ISSO AQUI TUDO DEVO COLOCAR NO COMPILER

class Login extends Floripa {
  constructor() {
    super();
  }

  page = () => {
    // ISSO AQUI TUDO DEVO COLOCAR NO COMPILER
    data = data.replace('$id', Actions.getValue("$id"));
    data = data.replace(
      '$senha',
      Actions.getValue("$senha")
    );
    data = data.replace("Begin Function", "<script>");
    data = data.replace(`End Function`, "</script>");
    data = data.replace(`Begin JSX`, "<div>");
    data = data.replace(`End JSX`, "</div>");
    // ISSO AQUI TUDO DEVO COLOCAR NO COMPILER

    return createPage("Teste Sankhya", data);
  };
}

module.exports = Login;
