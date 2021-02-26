var express = require('express');
var router = express.Router();
const adminMiddlewares = require("../middlewares/adminMiddleware");
const adminController= require("../controller/adminController");
const authMiddlewares = require("../middlewares/authMiddleware");
const validator = require("../middlewares/express-validator");

/*CATEGORIAS*/  
router.get('/categories', adminMiddlewares, adminController.createCategory );
router.post('/categories', validator.cat, adminController.storeCategory);
/*COLORES*/
router.get('/colors', adminMiddlewares, adminController.createColor);
router.post('/colors', validator.colors, adminController.storeColor);
/*subcategorias*/  
router.get('/subcategories', authMiddlewares, adminMiddlewares, adminController.createsubcategory );
router.post('/subcategories', validator.subcat, adminController.storesubcategory);


module.exports = router;
