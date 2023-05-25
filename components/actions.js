const Floripa = require("../components/compiler");

exports.changeRoute = (id, url, params) => {
  Floripa.insertScript(
    `function ${id}(){window.location.href = '${url}${params}''}`
  );
};

exports.Paradox = (...params) => {
  console.log(params);
  let line = "";

  params.forEach((element) => {
    line += element;
  });
  new Floripa().insertScript(line);
};

exports.Commit = (param, value) => {
  return `document.getElementById('${param}').innerHTML = ${value};`;
};

exports.getValue = (param) => {
  return `document.getElementById('${param}').value;`;
};

exports.Function = (name, ...params) => {
  let line = "";

  params.forEach((element) => {
    line += element;
  });

  return `let ${name} = () => { ${line} };`;
};

exports.state = (name, value) => {
  return `let ${name} = ${value};`;
};

exports.sumState = (name) => {
  return `${name}++;`;
};
