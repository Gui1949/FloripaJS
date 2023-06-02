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
              <link rel="icon" sizes="32x32" type="image/png" href="https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/icon.ico"/>
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

  createImage = (src) => {
    this.insert(`<img src="${src}" class="post_img">`);
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
    } else if (items[0] == "title-left-image") {
      this.insert(
        `<div class="navbar title-left image" style="vertical-align: middle">
        <img src="${items[1]}" height="65%" style="margin-left: 2vh"/>
          <h2>
            ${elementTitle}
          </h2>
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
  
  createRPGCanvas = (id) => {
      this.insert(`
      <div id="main">
        <div id="canvas">
          <canvas id="${id}"></canvas>
        </div>
      </div>
      `);

      this.insert(`  
      
      <script>
      // Get the canvas element and its 2D drawing context
      var canvas = document.getElementById("${id}");
      var ctx = canvas.getContext("2d");
  
      // Set the initial position of the object
      var x = canvas.width / 2;
      var y = canvas.height / 2;
  
      // Define the object size and speed
      var objectSize = 50;
      var objectSpeed = 5;
  
      // Create an image object
      var image = new Image();
      image.src = "https://th.bing.com/th/id/R.834cdd5530faa0f0a9a4e87731241e18?rik=cKpopfrfdmgkxg&riu=http%3a%2f%2fpixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com%2fimage%2f9a0d2b4fd238cdb.png&ehk=pAmuFoxI%2bgsDkI3VzON%2bP%2f76uzT3BPeK1O7fRMXxSBo%3d&risl=&pid=ImgRaw&r=0"; // Replace with the path to your image
  
      // Wait for the image to load
      image.onload = function() {
        // Event listener to handle arrow key presses
        document.addEventListener("keydown", handleKeyPress, false);
  
        // Function to handle arrow key presses
        function handleKeyPress(e) {
          // Arrow key codes: 37 (left), 38 (up), 39 (right), 40 (down)
          switch (e.keyCode) {
            case 37: // left arrow
              x -= objectSpeed;
              image.src = "https://th.bing.com/th/id/OIP.2i5sfWcqOWzA3T2keaNlgwHaHa?pid=ImgDet&rs=1"
              break;
            case 38: // up arrow
              y -= objectSpeed;
              break;
            case 39: // right arrow
              x += objectSpeed;
              break;
            case 40: // down arrow
              y += objectSpeed;
              break;
          }
  
          // Redraw the canvas
          drawCanvas();
        }
  
        // Function to clear the canvas and draw the object
        function drawCanvas() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, x, y, objectSize, objectSize);
        }
  
        // Initial drawing of the canvas
        drawCanvas();
      };
    </script>`);
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
