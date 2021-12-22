const http = require("http");
const fetch = require("cross-fetch");
const Floripa = require("../components/compiler");

let dados = {
  username: "G.FLORIANO",
  senha: "MickJa67@",
};

console.log(dados.username + dados.senha);
let senha = dados.senha.toString();
console.log(senha);

const url =
  "http://177.85.35.229:8180/mge/service.sbr?serviceName=MobileLoginSP.login";
let content =
  '<serviceRequest serviceName="MobileLoginSP.login"><requestBody><NOMUSU>' +
  dados.username +
  `</NOMUSU><INTERNO><![CDATA[${senha}]]></INTERNO></requestBody></serviceRequest>`;

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "text/xml; charset=utf-8",
    Accept: "*/*",
    "Accept-Language": "en-GB",
    "Accept-Encoding": "gzip, deflate",
    Connection: "Keep-alive",
    "Content-Length": content.length,
  },
  body: content,
})
  .then((resp) => resp.text())
  .then(function (data) {
    console.log("aaaaaaaaaaaaaaaaaa", data);
    let find_jsonid_ini = data.search("<jsessionid>");
    let find_jsonid_fi = data.search("</jsessionid>");

    let jsonid = data.slice(find_jsonid_ini, find_jsonid_fi);
    jsonid = jsonid.replace("<jsessionid>", "");
    res.json({
      data: jsonid,
    });
  });

const render = () => {
  Floripa.initMaster();
  Floripa.createTitle("Opa!");
  Floripa.endMaster();
};

exports.page = () => {
  Floripa.init();
  return Floripa.createPage("Teste Sankhya", render());
};
