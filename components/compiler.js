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
                Criado com
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
  
  createRPGCanvas = (id, sprites, velocity) => {

      let spriteArray = []

      sprites.forEach(element => {
        spriteArray.push ("'" + element + "'");
      });

      //Tornar tudo possivel para funções floripaJS

      //Sprites, Velocidade, Funções, etc... Pique Construct só que com código

      this.insert(`
      <div id="main">
        <div id="canvas">
          <canvas id="${id}"></canvas>
        </div>
      </div>
      `);

      this.insert(`    <script>
      // Get the canvas element and its 2D drawing context
      var canvas = document.getElementById("${id}");

      canvas.style.backgroundImage = "url('https://i.pinimg.com/originals/3b/bd/9d/3bbd9d6ba1f20ab97f96e47729464a26.jpg')"
      canvas.style.backgroundSize = "contain"

      var ctx = canvas.getContext("2d");

      // Set the initial position of the object and camera
      var objectX = canvas.width / 2;
      var objectY = canvas.height / 2;

      var cameraX = 0;
      var cameraY = 0;

      // Define the object size and speed
      var objectSize = 50;
      var objectSpeed = 2;

      // Function to load an image asynchronously
      function loadImage(image) {
        return new Promise(function (resolve, reject) {
          image.onload = resolve;
          image.onerror = reject;
        });
      }

      // Create an image object for the background map
      var backgroundImage = new Image();
      backgroundImage.src =
        "https://i.redd.it/gumnr57oy6171.jpg"; // Replace with the path to your background image

      var imagePaths = [
        ${spriteArray}
      ];

      let imagePathsEnemy = [
        "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/game/enemies/sprite_0.png",
        "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/game/enemies/sprite_1.png",
        "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/game/enemies/sprite_2.png",
        "https://raw.githubusercontent.com/Gui1949/FloripaJS/master/blob/game/enemies/sprite_3.png"
      ];

      // Create an image object for the character
      // Create an array of image objects
      var images = [];
      let enemy_img = [];
      var currentImage = 0;
      var currentEnemy = 0;

      let enemyX = Math.floor(Math.random() * (1000 - 100) + 100);
      let enemyY = Math.floor(Math.random() * (100 - 10) + 10);

      // Load all the images
      for (var i = 0; i < imagePaths.length; i++) {
        let image = new Image();
        image.src = imagePaths[i];
        images.push(image);
      }

      for (var j = 0; j < imagePathsEnemy.length; j++) {
        let image = new Image();
        image.src = imagePathsEnemy[j];
        enemy_img.push(image);
      }

      // Wait for the images to load
      Promise.all([loadImage(backgroundImage), loadImage(images[currentImage], loadImage(enemy_img[currentEnemy]))])
        .then(function () {
          // Event listener to handle arrow key presses
          document.addEventListener("keydown", handleKeyPress, false);

          // Function to handle arrow key presses
          function handleKeyPress(e) {
            // Arrow key codes: 37 (left), 38 (up), 39 (right), 40 (down)
            // Arrow key codes: 37 (left), 38 (up), 39 (right), 40 (down)
            switch (e.keyCode) {
              case 37: // left arrow
                objectX -= objectSpeed;
                currentImage = 2;
                break;
              case 38: // up arrow
                objectY -= objectSpeed;
                currentImage = 0;
                break;
              case 39: // right arrow
                objectX += objectSpeed;
                currentImage = 3;
                break;
              case 40: // down arrow
                objectY += objectSpeed;
                currentImage = 1;
                break;
              case 32:
                let interval = setInterval(() => {
                  currentImage = (currentImage + 1) % images.length;
                }, 50);

                setTimeout(() => {
                  clearInterval(interval);
                }, 500);

                break;
            }

            // Update camera position based on object position
            cameraX = objectX - canvas.width / 2;
            cameraY = objectY - canvas.height / 2;

            // Redraw the canvas
            drawCanvas();
          }

          //Animation enemy
          setInterval(() => {
            currentEnemy = (currentEnemy + 1) % enemy_img.length;
          }, 1000);

          // Function to clear the canvas and draw the background and object
          function drawCanvas() {



            ctx.clearRect(0, 0, canvas.width, canvas.height);

            var offset = Math.sin(Date.now() / 500) * 2;

            // Draw the background map
            ctx.drawImage(
              backgroundImage,
              -cameraX,
              -cameraY,
            );

            // Draw the character
            ctx.drawImage(
              images[currentImage],
              objectX - cameraX,
              objectY - cameraY + offset,
              objectSize,
              objectSize
            );

            // Draw the enemy
            ctx.drawImage(
              enemy_img[currentEnemy],
              -cameraX + enemyX,
              -cameraY + enemyY + offset,
              30,
              30
            );          

            //Colisão RPG
            if(
              (objectX - cameraX >= (-cameraX + enemyX) - 80 && objectX - cameraX <= (-cameraX + enemyX) + 30)
              &&
              (objectY - cameraY + offset >= (-cameraY + enemyY + offset) - 80 && objectY - cameraY + offset <= (-cameraY + enemyY + offset) + 30)
              ){
                ctx.fillStyle = "white";
                ctx.font = "bold 18px Arial";
                ctx.fillText("Boa noite, filho", 5, canvas.height - 5);
            }

          }
    
          // Initial drawing of the canvas
          function animateCanvas() {

            console.log(-cameraX + enemyX,-cameraY + enemyX)

            let playerX = objectX - cameraX;
            let enemyX0 = -cameraX + enemyX

            drawCanvas();
            requestAnimationFrame(animateCanvas);
          }
    
          // Start the animation
          animateCanvas();
        })
        .catch(function (error) {
          console.error("Failed to load images:", error);
        });
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
