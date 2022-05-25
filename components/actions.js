const Floripa = require("../components/compiler");

exports.changeRoute = (id, url, params) => {
  Floripa.insertScript(`function ${id}(){window.location.href = '${url}${params}''}`);
};

exports.Paradox = (...params) => {
  new Floripa().insertScript(`${params[0]}`)
}

exports.Commit = (param) => {
 return(`document.getElementById('${param}').innerHTML = ${param}`)
}

exports.getValue = (param) => {
  return(`document.getElementById('${param}').value`)
}