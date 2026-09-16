const banco = require("./database");

function listar() {
  return banco.buscar("produtos.json");
}

function cadastrar(produto) {
  const produtos = listar();
  produto.id = banco.proximoId(produtos);
  produtos.push(produto);
  banco.salvar("produtos.json", produtos);
}

module.exports = { listar, cadastrar };