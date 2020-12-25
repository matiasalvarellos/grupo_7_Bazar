var express = require('express');
var router = express.Router();
const indexController= require("../controller/indexController");
const peliculasController = require("../controller/peliculasController");

/* GET home page. */
router.get('/', indexController.inicio);
router.get("/pelis", peliculasController.list);
router.get('/seguimiento', indexController.seguimiento);
router.get('/pago', indexController.pago);
router.get('/giftCard', indexController.giftCard);
router.get('/categorias', indexController.categorias);
router.get('/nosotros', indexController.nosotros);
router.get('/contacto', indexController.contacto);
/*
router.get("/detalle/:id", peliculasController.detalle);
router.get("/edit/:id", peliculasController.edit);
router.post("/edit/:id", peliculasController.update); */

module.exports = router;
