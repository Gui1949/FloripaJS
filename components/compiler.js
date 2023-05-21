const fs = require("fs");

let bodyInsert = "";
let state = "";

const style = require("./styles");

class Floripa {
  createPage = (title, ...body) => {
    console.log(title);
    return `
      <!DOCTYPE html>
      <html lang="pt-br">
  
          <style>
            ${style.css}
          </style>
  
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <script type="text/javascript" src="actions.js"></script>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>${title}</title>
          </head>
          <body>
              ${bodyInsert ? bodyInsert : body}
              <center>
                <p class="descript_footer">
                Site criado com
                <a href="https://github.com/Gui1949/FloripaJS">FloripaJS</a>
                </p>
              </center>
          </body>
      </html>
      `;
  };

  init = () => {
    bodyInsert = "";
  };

  setState = (stateValue) => {
    state += stateValue;
    console.log("Dado:", state);
  };

  insert = (body) => {
    bodyInsert += body;
  };

  initDiv = (id) => {
    this.insert(`<div id=${id}>`);
  };

  endDiv = () => {
    this.insert("</div>");
  };

  initMaster = () => {
    this.insert(`<div id='master'>`);
  };

  endMaster = () => {
    this.insert("</div>");
  };

  createElement = (element, ...value) => {
    let elementValue = value[0];
    let elementId = value[1];

    if (elementValue == undefined) {
      elementValue = "";
    }

    if (elementId == undefined) {
      elementId = "";
    }

    this.insert(`<${element} id="${elementId}">${elementValue}</${element}>`);
  };

  createTitle = (...value) => {
    let elementValue = value[0];
    let elementId = value[1];

    if (elementValue == undefined) {
      elementValue = "";
    }

    if (elementId == undefined) {
      elementId = "";
    }

    this.insert(`<h1 id="${elementId}">${elementValue}</h1>`);
  };

  createText = (value) => {
    this.insert(`<p class='descript_footer'>${value}</p>`);
  };

  createLine = () => {
    this.insert(`<hr></hr>`);
  };

  createUpperNavBar = (title, ...items) => {
    let elementTitle = title;

    if (items[0] == "title-left") {
      console.log(items);
      this.insert(
        `<div class="navbar title-left">
          <h2 class='navbar-title'>${elementTitle}</h2>
        </div>`
      );
    } else {
      this.insert(`<div class="navbar"><h2>${elementTitle}</h2></div>`);
    }
  };

  createCard = (...items) => {
    this.insert(
      `<div class="card card_principal" id=${items[0]}>
        <div class="card_header">
          <img class="avatar" src="${items[1]}"/>
          <div class='descript_header'>
            <p><b>${items[2]}</b></p>
            <p>${items[3]}</p>
          </div>
        </div>
        
        <img class="post_img" src="${items[4]}"/>
        <p class='descript'>${items[5]}</p>
      </div>`
    );
  };

  createIncorporatedCard = (...items) => {
    this.insert(
      `<div class="card" id=${items[0]}>
        <div class="card_header">
          <img class="avatar" src="${items[1]}"/>
          <div class='descript_header'>
            <p><b>${items[2]}</b></p>
            <p>${items[3]}</p>
          </div>
        </div>
        
        ${items[4]}
        <p class='descript'>${items[5]}</p>
      </div>`
    );
  };

  createSimpleCard = (title, ...items) => {
    this.insert(`<div class="card"><h2>${title}</h2>`);

    items.forEach((element) => {
      this.insert(`<p class='descript_card'>${element}</p>`);
    });

    this.insert(`</div>`);
  };

  createTextInput = (id, placeholder, onchange, value) => {
    this.insert(`<input type='text' id=${id} placeholder='${placeholder}' />`);
  };

  createButton = (id, value, action) => {
    this.insert(
      `<input type='button' class='btn' id=${id} value=${value} onclick='${action}' />`
    );
  };

  createLink = (path, name) => {
    this.insert(`<a href=${path}>${name}</a>`);
  };

  insertScript = (script) => {
    this.insert(`<script>${script}</script>`);
  };

  insertArrowFunction = (script) => {
    let alterado = script.replace("() => {", "");
    this.insert(`<script>${alterado}</script>`);
  };
}

module.exports = Floripa;
