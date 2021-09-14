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

```Floripa.buildPage(titulo da página, corpo);```
  * Mesma semântica do comando ```Floripa.createPage();```;
  * Esse comando gera um arquivo HTML no seguinte caminho: ```./build/index.html```

  
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
 
