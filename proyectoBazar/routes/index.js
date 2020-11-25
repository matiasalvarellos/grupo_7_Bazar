var express = require('express');
var router = express.Router();
const indexController= require("../controller/indexController");


/* GET home page. */
router.get('/', indexController.inicio);
router.get('/seguimiento', indexController.seguimiento);
router.get('/pago', indexController.pago);
router.get('/giftCard', indexController.giftCard);
router.get('/categorias', indexController.categorias);
router.get('/nosotros', indexController.nosotros);
router.get('/contacto', indexController.contacto);

module.exports = router;
