var express = require('express');
var router = express.Router();
const indexController= require("../controller/indexController");

/* GET home page. */
router.get('/', indexController.inicio);
router.get('/category', indexController.category);
router.get('/contacto', indexController.contacto);
module.exports = router;
