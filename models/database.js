const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data");

function getFile(nome) {
  const arquivo = path.join(dataPath, nome);

  if (!fs.existsSync(arquivo)) {
    fs.writeFileSync(arquivo, "[]");
  }

  return arquivo;
}

function buscar(nome) {
  return JSON.parse(fs.readFileSync(getFile(nome), "utf8"));
}

function salvar(nome, dados) {
  fs.writeFileSync(getFile(nome), JSON.stringify(dados, null, 2));
}

function proximoId(dados) {
  if (dados.length === 0) return 1;
  return Math.max(...dados.map(item => Number(item.id))) + 1;
}

module.exports = { buscar, salvar, proximoId };