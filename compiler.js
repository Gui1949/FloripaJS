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

  div{
      display: flex;
      flex-direction: column;
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
  bodyInsert = ""
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

// exports.createTextInput = (...value) => {
//     let elementId = value[0];
//     let elementAction = value[1];

//     if (elementId == undefined) {
//       elementId = "";
//     }

//     if (elementAction == undefined) {
//         elementAction = "";
//       }

//     insert(`<input type="text" id="${elementId}"/>`);
// }
