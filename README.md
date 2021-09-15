# FloripaJS

O FloripaJS é um Framework para Web desenvolvido em Node.JS. Tendo em vista praticidade e simplicidade para o desenvolvedor. Todo o código é compilado no servidor, assim visando melhor desempenho.

## Execução
  1. Realize o download do projeto via ```git clone https://github.com/Gui1949/FloripaJS.git``` ou clicando no botão "Code".
  2. Após feito o download, entre na pasta em que o mesmo foi realizado, e nessa pasta abra a sua IDE favorita (No Visual Studio Code, isso pode ser realizado via ```code .``` ou no CMD (ou terminal, caso esteja usando Linux ou MacOS) no diretório da pasta, ou na barra do Windows Explorer).
  3. Feito o processo anterior, execute no terminal de sua IDE o comando ```node main.js```. E dessa forma, o servidor HTTP será iniciado na porta 25565. Para acessar a aplicação, digite http://localhost:25565/ e será exibida no seu navegador a página de boas-vindas do FloripaJS (Imagem 1).
  
## Como usar

O FloripaJS foi desenvolvido para ser um framework de uso simples e prático, para ser criada uma página, bastam poucas linhas:
```
const Floripa = require("../compiler");

exports.page = () => {
  Floripa.init();
  return Floripa.createPage(
    "FloripaJS",
    Floripa.createTitle("FloripaJS"),
    Floripa.initDiv("master"),
    Floripa.createLine("hr"),
    Floripa.createElement("p", "Seja bem-vindo ao FloripaJS!"),
    Floripa.endDiv(),
  );
};
```
Com o código acima, é criada a página a seguir:

![PrintScreen](https://github.com/Gui1949/FloripaJS/blob/master/blob/print.png)
<p align="center">Imagem 1</p>

Todas as páginas devem ser criadas no caminho ```./public```. As mesmas devem seguir o padrão estabelecido acima, e devem ser referenciadas no arquivo ```./main.js``` de duas maneiras:
  * A página deve ser requerida via ```const nome_pagina = require("./public/nome_pagina");```;
  * E deve ser criada uma rota:
 
      ```
      if (url === "/nome_pagina") {
       res.end(nome_pagina.page());
      }
      ```
  * Levando em consideração que "nome_pagina" deve ser substituído pelo nome da página a ser inserida.

Feitas as medidas acima, o arquivo ```./main.js``` ficará da seguinte maneira:

```
const http = require("http");

const index = require("./public/index");
const nome_pagina = require("./public/nome_pagina");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  let url = req.url;

  if (url === "/nome_pagina") {
    res.end(nome_pagina.page());
  }

  else{
    res.end(index.page());
  }
  
});

server.listen(25565, "127.0.0.1");
console.log("Server abrido!! Porta 25565");

```

## Comandos

Todos os comandos dessa sessão deverão ser incluídos no arquivo de script da página em si (nesse caso, use o ```./public/index.js``` como exemplo).

```Floripa.init();```
  * Determina o início da página e limpa a mesma.
  * Esse comando não possui parâmetros.

```Floripa.createPage(titulo da página, corpo);```
  * Título da página: texto a ser exibido na aba do navegador;
  * Corpo: Elementos a serem inseridos no corpo da página (Os elementos devem ser separados por vírgula, sendo os mesmos declarados via comandos de criação (comandos com o prefixo create e init), da seguinte forma:
  ```
    Floripa.createTitle("FloripaJS"),
    Floripa.initDiv("master"),
    Floripa.createLine("hr"),
    Floripa.createElement("p", "Seja bem-vindo ao FloripaJS!"),
    Floripa.endDiv(),
  ```
  
```Floripa.initDiv(id);```
  * Cria e inicia um container de elementos;
  * Para finalizar o escopo do container, deve ser usado o comando ```Floripa.endDiv();```.
  
```Floripa.endDiv();```
  * Encerra o escopo de um container de elementos;
  * Esse comando não possui parâmetros.

```Floripa.initMaster();```
  * Cria e inicia um container mestre;
  * Para finalizar o escopo do container, deve ser usado o comando ```Floripa.endMaster();```.
  * Esse comando não possui parâmetros.
  
```Floripa.endMaster();```
  * Encerra o escopo de um container mestre;
  * Esse comando não possui parâmetros.
  * Esse comando não possui parâmetros.

```Floripa.createElement(tag do elemento em HTML, valor (caso necessário), id);```
  * Cria um elemento na tela, usando em base a TAG do mesmo em HTML;
  * Somente o campo de tag do elemento é obrigatório

```Floripa.createTitle(texto, id do elemento);```
  * Insere um elemento de título na página;
  * Nenhum dos campos é obrigatório.
  
```Floripa.createLine();```
  * Cria uma linha horizontal que corta toda a tela;
  * Esse comando não possui parâmetros. 
 
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
    
