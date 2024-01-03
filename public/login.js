const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");
const HTMLParser = require("node-html-parser");

const root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');

// console.log(root.querySelector("#list").childNodes);

// TODO: Parsear o html para editar, adicionar e até remover elementos de lá

class Login extends Floripa {
  constructor() {
    super();
  }

  page = () => {
    let elements = this.insertExtHTML('pagina');

    function functions() {
      window.alert("Olá Mundo");

      this.state = {
        textbox: "",
        senha: "",
      };

      state.textbox = document.getElementById("id").value;
      state.senha = document.getElementById("senha").value;

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          username: state.textbox,
          senha: state.senha,
        }),
      };

      return window.alert(`Botão Clicado! Dados: ${JSON.stringify(state)}`);

      fetch("http://localhost:3000/login", options)
        .then((response) => response.json())
        .then((response) => window.alert(response))
        .catch((err) => console.error(err));
    }

    return createOpenPage("Teste Sankhya", elements, functions);
  };
}

module.exports = Login;
