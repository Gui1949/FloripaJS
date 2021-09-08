# FloripaJS

O FloripaJS é um Framework para Web desenvolvido em Node.JS. Tendo em vista praticidade e simplicidade para o desenvolvedor. Todo o código é compilado no servidor, assim visando melhor desempenho.

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

```Floripa.createElement(tag do elemento em HTML, valor (caso necessário), id);```
  * Cria um elemento na tela, usando em base a TAG do mesmo em HTML;
  * Somente o campo de tag do elemento é obrigatório

```Floripa.createTitle(texto, id do elemento);```
  * Insere um elemento de título na página;
  * Nenhum dos campos é obrigatório.
  
```Floripa.createLine();```
  * Cria uma linha horizontal que corta toda a tela;
  * Esse comando não possui parâmetros. 
