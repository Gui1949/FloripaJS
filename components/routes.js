const fs = require("fs");
let path = require("path");

exports.router = (url, res) => {
  const files = fs.readdirSync(path.join(__dirname, "..", "public"));

  for (const file of files) {
    if (file.endsWith(".js")) {
      const page = require(`../public/${file}`);

      if ("/" + file.replace(".js", "") === url) {
        try {
          res.write(new page().page());
        } catch (err){
          console.log(err)
          res.write(page.page());
        }

        return;
      }
    }
  }

  //res.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
  res.write("Erro 404: Página não encontrada");
};
