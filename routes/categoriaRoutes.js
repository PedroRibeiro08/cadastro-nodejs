const express = require("express");
const Categoria = require("../models/categoria");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("categorias/index", {
    titulo: "Categorias",
    categorias: Categoria.listar()
  });
});

router.get("/cadastro", (req, res) => {
  res.render("categorias/form-cadastro", {
    titulo: "Nova categoria"
  });
});

router.post("/", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).send("Informe o nome da categoria.");
  }

  Categoria.cadastrar({ nome });
  res.redirect("/categorias");
});

module.exports = router;