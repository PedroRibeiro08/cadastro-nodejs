const express = require("express");
const Cliente = require("../models/cliente");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("clientes/index", {
    titulo: "Clientes",
    clientes: Cliente.listar()
  });
});

router.get("/cadastro", (req, res) => {
  res.render("clientes/form-cadastro", {
    titulo: "Novo cliente"
  });
});

router.post("/", (req, res) => {
  const { nome, email, telefone, cidade } = req.body;

  if (!nome || !email || !telefone || !cidade) {
    return res.status(400).send("Preencha todos os campos.");
  }

  Cliente.cadastrar({ nome, email, telefone, cidade });
  res.redirect("/clientes");
});

module.exports = router;