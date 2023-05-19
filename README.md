# FloripaJS

O FloripaJS é um Framework para Web desenvolvido em Node.JS. Tendo em vista praticidade e simplicidade para o desenvolvedor. Todo o código é compilado no servidor, assim visando melhor desempenho.

## Execução
  1. Realize o download do projeto via ```git clone https://github.com/Gui1949/FloripaJS.git``` ou clicando no botão "Code".
  2. Após feito o download, entre na pasta em que o mesmo foi realizado, e nessa pasta abra a sua IDE favorita (No Visual Studio Code, isso pode ser realizado via ```code .``` ou no CMD (ou terminal, caso esteja usando Linux ou MacOS) no diretório da pasta, ou na barra do Windows Explorer).
  3. Feito o processo anterior, execute no terminal de sua IDE o comando ```node main.js```. E dessa forma, o servidor HTTP será iniciado na porta 25565. Para acessar a aplicação, digite http://localhost:25565/ e será exibida no seu navegador a página de boas-vindas do FloripaJS (Imagem 1).
  
## Como usar

O FloripaJS foi desenvolvido para ser um framework de uso simples e prático, para ser criada uma página, bastam poucas linhas:
```
const Floripa = require("../components/compiler");
const Actions = require("../components/actions");
require("../components/precompile");

class Index extends Floripa {
  constructor() {
    super();
  }

  lifeCycle = `
    this.state = {
      contador: 0
    }

    let setState = () => {
      ${Actions.Commit("state.contador")}
      state.contador++
    }
    `;

  render = () => {
    init(); // -> Inicia a página
    Actions.Paradox(this.lifeCycle); // -> Funções executadas por dentro do DOM 
    createUpperNavBar("FloripaJS", "title-left");
    initDiv("main");
    createElement("p", "Seja bem-vindo ao FloripaJS!", "state.title");
    createElement("p", "0", "state.contador");
    createButton('id', 'Adicionar', "setState()");
    endDiv();
  };

  page = () => {
    return createPage("FloripaJS", this.render());
  };
}

module.exports = Index;
```
Com o código acima, é criada a página a seguir:

![PrintScreen](https://github.com/Gui1949/FloripaJS/blob/master/blob/print.png)
<p align="center">Imagem 1</p>

Todas as páginas devem ser criadas no caminho ```./public```. As mesmas devem seguir o padrão estabelecido acima, e devem ser referenciadas no arquivo ```./routes.js``` da seguinte maneira:
  * A página deve ser requerida via ```const nome_pagina = require("./public/nome_pagina");```;
  * E deve ser criada uma rota:
 
      ```
      if (url === "/nome_pagina") {
       res.end(nome_pagina.page());
      }
      ```
  * Levando em consideração que "nome_pagina" deve ser substituído pelo nome da página a ser inserida.

## Comandos

Todos os comandos dessa sessão deverão ser incluídos no arquivo de script da página em si (nesse caso, use o ```./public/index.js``` como exemplo).

```init();```
  * Determina o início da página e limpa a mesma.
  * Esse comando não possui parâmetros.

```createPage(titulo da página, corpo);```
  * Título da página: texto a ser exibido na aba do navegador;
  * Corpo: Elementos a serem inseridos no corpo da página (Os elementos devem ser separados por vírgula, sendo os mesmos declarados via comandos de criação (comandos com o prefixo create e init), da seguinte forma:
  ```
    createTitle("FloripaJS"),
    initDiv("master"),
    createLine("hr"),
    createElement("p", "Seja bem-vindo ao FloripaJS!"),
    endDiv(),
  ```
  
```initDiv(id);```
  * Cria e inicia um container de elementos;
  * Para finalizar o escopo do container, deve ser usado o comando ```endDiv();```.
  
```endDiv();```
  * Encerra o escopo de um container de elementos;
  * Esse comando não possui parâmetros.

```initMaster();```
  * Cria e inicia um container mestre;
  * Para finalizar o escopo do container, deve ser usado o comando ```endMaster();```.
  * Esse comando não possui parâmetros.
  
```endMaster();```
  * Encerra o escopo de um container mestre;
  * Esse comando não possui parâmetros.

```createElement(tag do elemento em HTML, valor (caso necessário), id);```
  * Cria um elemento na tela, usando em base a TAG do mesmo em HTML;
  * Somente o campo de tag do elemento é obrigatório

```createTitle(texto, id do elemento);```
  * Insere um elemento de título na página;
  * Nenhum dos campos é obrigatório.
  
```createLine();```
  * Cria uma linha horizontal que corta toda a tela;
  * Esse comando não possui parâmetros. 
 
```createText(texto);```
  * Cria um parágrafo;
  * O campo é obrigatório;

```createUpperNavBar(titulo, itens);```
  * Cria uma navigation bar no topo da tela;
  * O único campo obrigatório é o título;

```createCard(id, url da foto do avatar, titulo, subtitulo, url da postagem, descrição);```
  * Cria um card, totalmente baseado em redes sociais;
  * Nenhum dos campos é obrigatório;

```createSimpleCard(titulo, textos);```
  * Cria um card com um título e vários parágrafos;
  * O único campo obrigatório é o título;

## Build

Para executar o build de seu código, o FloripaJS conta com o arquivo ```./builder```:

  ```
  const index = require("./public/index");
  const fs = require("fs");

  let pages = ['index'];

  pages.forEach((element) => {
    fs.writeFile(
      `./build/${element}.html`,
      eval(element).page(),
      (err) => {
        console.log(err);
      }
    );
  });
  ```

As páginas devem ser importadas conforme a primeira linha do código: ```const index = require("./public/index");```. Após a importação, o nome da página deve ser inserido na array pages, segue exemplo de inserção de uma página chamada "Cerginho":
  
    const index = require("./public/index");
    const cerginho = require("./public/cerginho")
    const fs = require("fs");

    let pages = ['index','cerginho'];

    pages.forEach((element) => {
      fs.writeFile(
        `./build/${element}.html`,
        eval(element).page(),
        (err) => {
          console.log(err);
        }
      );
    });
    
