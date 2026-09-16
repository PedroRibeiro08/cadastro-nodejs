const banco = require("./database");

function listar() {
  return banco.buscar("fornecedores.json");
}

function cadastrar(fornecedor) {
  const fornecedores = listar();
  fornecedor.id = banco.proximoId(fornecedores);
  fornecedores.push(fornecedor);
  banco.salvar("fornecedores.json", fornecedores);
}

module.exports = { listar, cadastrar };