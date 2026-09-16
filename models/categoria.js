const banco = require("./database");

function listar() {
  return banco.buscar("categorias.json");
}

function cadastrar(categoria) {
  const categorias = listar();
  categoria.id = banco.proximoId(categorias);
  categorias.push(categoria);
  banco.salvar("categorias.json", categorias);
}

module.exports = { listar, cadastrar };