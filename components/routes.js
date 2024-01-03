const fs = require("fs");
let path = require("path");

exports.router = (url, res) => {
  const files = fs.readdirSync(path.join(__dirname, "..", "public"));

  for (const file of files) {
    if (file.endsWith(".js")) {
      const page = require(`../public/${file}`);

      if ("/" + file.replace(".js", "") === url) {
        try {
          res.end(new page().page());
        } catch {
          res.end(page.page());
        }

        return;
      }
    }
  }

  res.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
  res.end("Erro 404: Página não encontrada");
};
