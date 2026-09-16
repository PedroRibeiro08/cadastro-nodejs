const express = require("express");
const Produto = require("../models/produto");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("produtos/index", {
    titulo: "Produtos",
    produtos: Produto.listar()
  });
});

router.get("/cadastro", (req, res) => {
  res.render("produtos/form-cadastro", {
    titulo: "Novo produto"
  });
});

router.post("/", (req, res) => {
  const { nome, descricao, preco, estoque, categoria } = req.body;

  if (!nome || !descricao || preco === "" || estoque === "" || !categoria) {
    return res.status(400).send("Preencha todos os campos.");
  }

  Produto.cadastrar({
    nome,
    descricao,
    preco: Number(preco),
    estoque: Number(estoque),
    categoria
  });

  res.redirect("/produtos");
});

module.exports = router;