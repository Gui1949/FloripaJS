const http = require("http");
const fetch = require("cross-fetch");
const Floripa = require("../components/compiler");

exports.createLinkAction = (id, url, params) => {
  Floripa.insertScript(`function ${id}(){window.location.href = '${url}${params}''}`);
};

exports.getValueFrom = (param) => {
  return (` + document.getElementById('${param}').value + `)
}

exports.login_snk = (username, passwd) => {
  let dados = {
    username: username,
    senha: passwd,
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

      return jsonid

    });
};
