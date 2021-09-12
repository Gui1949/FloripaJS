let bodyInsert = "";
let state = "";

const css = `
* {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
  h1,
  p, 
  input,
  hr {
    margin: 1vh 2vh 1vh 2vh;
  }

  h1{
      margin-top: 2vh;
  }

  h2{
    color: white;
  }

  div{
      display: flex;
      flex-direction: column;
  }

  #master{
    width: 100%;
    height: 100%;
    background-color: #282a36;
  }

  #navbar{
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    height: 8vh;
    box-shadow: 0 0 2vh rgba(0,0,0,.2);
    background-color: #282a36;
    display: flex;
    overflow-x: auto;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  
  .card {
    padding: 1vh 3vh 2vh;
    align-items: center;
    margin-top: 2vh;
    overflow-wrap: break-word;
    background-color: #44475a;
    align-self: flex-start;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1vh;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
  } 

  .avatar{
    width: 5vh;
    height: 5vh;
    border-radius: 10vh;
    object-fit: cover;
  }

  .post_img{
    height:60vh;
    width: 100%;
    object-fit: contain;
    background-color: #282a36;
    border-radius: 1vh;
    margin: 1.5vh 0 1vh 0;
  }

  #feedUpperMargin{
    width: 100%;
    margin-top: 10vh;
    align-items: center;
  }

  .descript, .descript_header{
    margin: 0;
    color: white;
    height: auto;
  }

  .card_header{
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0.8vh
  }

  .descript_header{
    margin: 0.25vh 0vh 0vh 1vh
  }

  .descript_header > p{
    margin: 0;
  }

`;

exports.createPage = (title, ...body) => {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">

        <style>
          ${css}
        </style>

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            ${bodyInsert}
        </body>
    </html>
    `;
};

exports.init = () => {
  bodyInsert = "";
};

exports.setState = (stateValue) => {
  state += stateValue;
  console.log("Dado:", state);
};

const insert = (body) => {
  bodyInsert += body;
};

exports.initDiv = (id) => {
  insert(`<div id=${id}>`);
};

exports.endDiv = () => {
  insert("</div>");
};

exports.createElement = (element, ...value) => {
  let elementValue = value[0];
  let elementId = value[1];

  if (elementValue == undefined) {
    elementValue = "";
  }

  if (elementId == undefined) {
    elementId = "";
  }

  insert(`<${element} id="${elementId}">${elementValue}</${element}>`);
};

exports.createTitle = (...value) => {
  let elementValue = value[0];
  let elementId = value[1];

  if (elementValue == undefined) {
    elementValue = "";
  }

  if (elementId == undefined) {
    elementId = "";
  }

  insert(`<h1 id="${elementId}">${elementValue}</h1>`);
};

exports.createLine = () => {
  insert(`<hr></hr>`);
};

exports.createUpperNavBar = (title, ...items) => {
  let elementTitle = title;

  insert(`<div id="navbar"><h2>${elementTitle}</h2></div>`);
};

exports.createCard = (...items) => {
  console.log(items[0]);
  insert(
    `<div class="card" id=${items[0].ID}><div class="card_header"><img class="avatar" src="${items[0].USER_PIC}"/><div class='descript_header'><p><b>${items[0].USERNAME}</b></p><p>${items[0].POST_DATA}</p></div></div><img class="post_img" src="${items[0].PIC_LOCAL}"/><p class='descript'>${items[0].POST_DESC}</p></div>`
  );
};
