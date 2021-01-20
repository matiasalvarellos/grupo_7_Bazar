var express = require('express');
var router = express.Router();
const adminController= require("../controller/adminController");

/*CATEGORIAS*/  
router.get('/categories', adminController.createcategory );
router.post('/categories', adminController.storecategory);


module.exports = router;
