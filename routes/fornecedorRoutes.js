const express = require("express");
const Fornecedor = require("../models/fornecedor");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("fornecedores/index", {
    titulo: "Fornecedores",
    fornecedores: Fornecedor.listar()
  });
});

router.get("/cadastro", (req, res) => {
  res.render("fornecedores/form-cadastro", {
    titulo: "Novo fornecedor"
  });
});

router.post("/", (req, res) => {
  const { razaoSocial, cnpj, email, telefone, cidade } = req.body;

  if (!razaoSocial || !cnpj || !email || !telefone || !cidade) {
    return res.status(400).send("Preencha todos os campos.");
  }

  Fornecedor.cadastrar({ razaoSocial, cnpj, email, telefone, cidade });
  res.redirect("/fornecedores");
});

module.exports = router;