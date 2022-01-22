const fs = require("fs");

let bodyInsert = "";
let state = "";

const style = require('./styles')

exports.createPage = (title, ...body) => {
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

exports.initMaster = () => {
  insert(`<div id='master'>`);
};

exports.endMaster = () => {
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

exports.createText = (value) => {
  insert(`<p class='descript_footer'>${value}</p>`);
};

exports.createLine = () => {
  insert(`<hr></hr>`);
};

exports.createUpperNavBar = (title, ...items) => {
  let elementTitle = title;

  insert(`<div id="navbar"><h2>${elementTitle}</h2></div>`);
};

exports.createCard = (...items) => {
  insert(
    `<div class="card" id=${items[0]}>
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

exports.createSimpleCard = (title, ...items) => {
  insert(`<div class="card"><h2>${title}</h2>`);

  items.forEach((element) => {
    insert(`<p class='descript_card'>${element}</p>`);
  });

  insert(`</div>`);
};

exports.createTextInput = (id, placeholder, onchange, value) => {
  insert(`<input type='text' id=${id} placeholder='${placeholder}' />`);
};

exports.createButton = (id, value, action) => {
  insert(
    `<input type='button' class='btn' id=${id} value=${value} onclick='${action}' />`
  );
};

exports.createLink = (path, name) => {
  insert(`<a href=${path}>${name}</a>`);
}

// exports.generateTextInput = (id, placeholder) => {
//   insert(`<input type='text' id='generate' placeholder='${placeholder}' />`)
// }

// exports.generateButton = (id, value) => {
//   insert(`<input type='button' id=${id} value=${value} onclick=generate()>`)
// }

// exports.generatePost = (id, value) => {
//   insert(`<input type='button' id=${id} value=${value} onclick=newpost()>`)
// }

exports.insertScript = (script) => {
  insert(`<script>${script}</script>`)
}

// exports.blackBody = () => {
//   insert('<style>body{background-color: #282a36;}</style>')
// }

// exports.whiteSpace = () => {
//   insert('&nbsp')
// }
