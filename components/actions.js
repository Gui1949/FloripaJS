const http = require("http");
const fetch = require("cross-fetch");
const Floripa = require("../components/compiler");

exports.createLinkAction = (id, url, params) => {
  Floripa.insertScript(`function ${id}(){window.location.href = '${url}${params}''}`);
};

exports.getValueFrom = (param) => {
  return (` + document.getElementById('${param}').value + `)
}
