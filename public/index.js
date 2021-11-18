const Floripa = require("../compiler");

exports.page = () => {
  Floripa.init();
  return Floripa.createPage(
    "FloripaJS",
    Floripa.createTitle("FloripaJS"),
    Floripa.initDiv("main"),
    Floripa.createLine(),
    Floripa.createElement("p", "Seja bem-vindo ao FloripaJS!"),
    Floripa.createLine(),
    Floripa.createTitle("FloripaPress"),
    Floripa.createElement("p","Crie o seu site (somente blog)"),
    Floripa.createTextInput("titulo", "Título"),
    Floripa.generateButton("gerar","Gerar"),
    Floripa.insertScript(
      `
      let generate = () => {
        let titulo = document.getElementById("titulo").value
        console.log(titulo)

        fetch('http://localhost:25565/blog/?titulo=' + titulo)
          .then(response => response.json())
          .then(response => {
            console.log('OK')
          })

      }
      
      let newpost = () => {
        let newpost = document.getElementById("postagem").value
        console.log(newpost)

        fetch('http://localhost:25565/blog/?newpost=' + newpost)
          .then(response => response.json())
          .then(response => {
            console.log('OK')
          })

      }`
    ),
    Floripa.createTextInput("postagem", "Nova postagem"),
    Floripa.generatePost('post','Postar'),
    Floripa.endDiv(),
  );
};
