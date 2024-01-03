# FloripaJS

O FloripaJS não é apenas um framework que facilita o front-end, mas um verdadeiro acelerador da produtividade de desenvolvedores web. Sua vasta biblioteca de componentes pré-construídos, cuidadosamente testados e responsivos, elimina a necessidade de escrever código repetitivo e permite a prototipagem rápida e robusta de micro-soluções elegantes e interativas. Imagine criar interfaces dinâmicas com o mínimo de esforço, focando sua energia na lógica e a experiência do usuário. Com o FloripaJS, você não apenas codifica, você constrói e inova com velocidade e precisão.

## Execução

1. Realize o download do projeto via `git clone https://github.com/Gui1949/FloripaJS.git` ou clicando no botão "Code".
2. Após feito o download, entre na pasta em que o mesmo foi realizado, e nessa pasta abra a sua IDE favorita (No Visual Studio Code, isso pode ser realizado via `code .` ou no CMD (ou terminal, caso esteja usando Linux ou MacOS) no diretório da pasta, ou na barra do Windows Explorer).
3. Feito o processo anterior, execute no terminal de sua IDE o comando `npm start`. E dessa forma, o servidor HTTP será iniciado na porta 25565. Para acessar a aplicação, digite http://localhost:25565/ e será exibida no seu navegador a página de boas-vindas do FloripaJS (Imagem 1).

## Como usar

O FloripaJS é um framework que visa facilitar ao máximo a vida do desenvolvedor, na questão do front-end.
Utilizando de elementos pré prontos para o desenvolvimento expresso de micro-soluções web. Como por exemplo um feed que seja alimentado por uma REST API. Que pode ser desenvolvido da seguinte forma em FloripaJS:

```
const https = require("https");
const Floripa = require("../components/compiler");

let floripa = new Floripa();
let data = "";

https.get("https://bar-do-jeiz.onrender.com/data", (res) => {
  res.setEncoding("utf-8");
  let rawData = "";
  res.on("data", (chunck) => {
    rawData += chunck;
  });

  res.on("end", async () => {
    try {
      const parsedData = JSON.parse(rawData);
      data = parsedData.data;
      return data;
    } catch (e) {
      console.error(e.message);
    }
  });
});

const criarPosts = () => {
  let i = 0;
  while (i < data.length) {
    console.log(i);
    floripa.createCard(
      data[i].ID,
      data[i].USER_PIC,
      data[i].USERNAME,
      data[i].POST_DATA,
      data[i].PIC_LOCAL,
      data[i].POST_DESC
    );
    i++;
  }
};

exports.page = () => {
  floripa.init();
  return floripa.createPage(
    "Bar do Jeiz",
    floripa.createUpperNavBar("Bar do Jeiz"),
    floripa.initMaster(),
    floripa.initDiv("feedUpperMargin"),
    criarPosts(),
    floripa.endDiv(),
    floripa.endMaster()
  );
};
```

Com o código acima, é criada a página a seguir:

![PrintScreen](https://github.com/Gui1949/FloripaJS/blob/master/blob/print.png)

<p align="center">Imagem 1</p>

Todas as páginas devem ser criadas no caminho `./public`. As mesmas devem seguir o padrão estabelecido acima. Quando criada uma página, a mesma já poderá ser acessada via ```http://localhost:25565/<nome do arquivo>```

- Não devem ser inseridos os caracteres '<' e '>' na url, somente o nome do arquivo .js alocado no diretório `/public` sem a extensão.

## Funções

Todos as funções dessa sessão deverão ser incluídas no arquivo de script da página em si (nesse caso, use o `./public/index.js` como exemplo).

`init();`

- Determina o início da página e limpa a mesma.
- Esse comando não possui parâmetros.

`createPage(titulo da página, corpo);`

- Título da página: texto a ser exibido na aba do navegador;
- Corpo: Elementos a serem inseridos no corpo da página (Os elementos devem ser separados por vírgula, sendo os mesmos declarados via comandos de criação (comandos com o prefixo create e init), da seguinte forma:

```
  createTitle("FloripaJS"),
  initDiv("master"),
  createLine("hr"),
  createElement("p", "Seja bem-vindo ao FloripaJS!"),
  endDiv(),
```

`initDiv(id);`

- Cria e inicia um container de elementos;
- Para finalizar o escopo do container, deve ser usado o comando `endDiv();`.

`endDiv();`

- Encerra o escopo de um container de elementos;
- Esse comando não possui parâmetros.

`initMaster();`

- Cria e inicia um container mestre;
- Para finalizar o escopo do container, deve ser usado o comando `endMaster();`.
- Esse comando não possui parâmetros.

`endMaster();`

- Encerra o escopo de um container mestre;
- Esse comando não possui parâmetros.

`createElement(tag do elemento em HTML, valor (caso necessário), id);`

- Cria um elemento na tela, usando em base a TAG do mesmo em HTML;
- Somente o campo de tag do elemento é obrigatório

`createImage(src da imagem);`

- Insere uma imagem;
- O SRC é obrigatório

`createTitle(texto, id do elemento);`

- Insere um elemento de título na página;
- Nenhum dos campos é obrigatório.

`createLine();`

- Cria uma linha horizontal que corta toda a tela;
- Esse comando não possui parâmetros.

`createText(texto);`

- Cria um parágrafo;
- O campo é obrigatório;

`createUpperNavBar(titulo, itens);`

- Cria uma navigation bar no topo da tela;
- O único campo obrigatório é o título;

`createCard(id, url da foto do avatar, titulo, subtitulo, url da postagem, descrição);`

- Cria um card, totalmente baseado em redes sociais;
- Nenhum dos campos é obrigatório;

`createSimpleCard(titulo, textos);`

- Cria um card com um título e vários parágrafos;
- O único campo obrigatório é o título;

`createLink(caminho, texto);`

- Cria um link (elemento <a></a>);
- Os dois campos são obrigatórios;

## Build

Para executar o build do seu código, deve ser utilizado o comando `npm run build <nome do arquivo>`. Lembrando que não devem ser inseridos os caracteres '<' e '>' no comando, somente o nome do arquivo .js alocado no diretório `/public`.
