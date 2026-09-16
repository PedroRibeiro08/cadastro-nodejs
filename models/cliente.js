const banco = require("./database");

function listar() {
  return banco.buscar("clientes.json");
}

function cadastrar(cliente) {
  const clientes = listar();
  cliente.id = banco.proximoId(clientes);
  clientes.push(cliente);
  banco.salvar("clientes.json", clientes);
}

module.exports = { listar, cadastrar };