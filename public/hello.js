const css = `
* {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
  h1,
  p, 
  hr {
    margin: 1vh 2vh 1vh 2vh;
  }

  h1{
      margin-top: 2vh
  }
  
`;

exports.helloPage = () => {
    return(`
    <!DOCTYPE html>
    <html lang="pt-br">

        <style>
          ${css}
        </style>

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Floripa JS</title>
        </head>
        <body>
            <h1>Floripa JS</h1>    
            <hr>
            <p>Seja bem vindo ao Floripa JS!</p>
        </body>
    </html>
    `);
};
