var express = require('express');
var router = express.Router();
const indexController= require("../controller/indexController");

/* GET home page. */
router.get('/', indexController.inicio);
router.get('/category/:category_id?', indexController.category);
router.get('/contacto', indexController.contacto);
router.get("/ofertas", indexController.offers);
module.exports = router;
