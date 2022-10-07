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

  lifeCycle = `
    this.state = {
      textbox: "",
      senha: ""
    }

    let setState = () => {
      state.textbox = ${Actions.getValue("id")}
      state.senha = ${Actions.getValue("senha")}
      
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({username: state.textbox, senha: state.senha})
      };
      
      fetch('http://localhost:3000/login', options)
        .then(response => response.json())
        .then(response => window.alert(response))
        .catch(err => console.error(err));
    } 
    `;

  // render = () => {
  //   init();
  //   Actions.Paradox(this.lifeCycle);
  //   createUpperNavBar("Teste Sankhya", "title-left");
  //   initDiv("main");
  //   this.createText("Digite algo aqui:");
  //   this.createTextInput("id");
  //   this.createTextInput("senha");
  //   createButton(1, 1, "setState()");
  //   endDiv();
  // };

  page = () => {
    // return createPage("Teste Sankhya", this.render());
    return createPage("Teste Sankhya", data);
  };
}

module.exports = Login;
