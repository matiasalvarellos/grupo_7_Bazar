var express = require('express');
var router = express.Router();
const adminMiddlewares = require("../middlewares/adminMiddleware");
const adminController= require("../controller/adminController");
const authMiddlewares = require("../middlewares/authMiddleware");
/*CATEGORIAS*/  
router.get('/categories', adminMiddlewares, adminController.createCategory );
router.post('/categories', adminController.storeCategory);
/*COLORES*/
router.get('/colors', adminMiddlewares, adminController.createColor);
router.post('/colors', adminController.storeColor);
/*subcategorias*/  
router.get('/subcategories', authMiddlewares, adminMiddlewares, adminController.createsubcategory );
router.post('/subcategories', adminController.storesubcategory);


module.exports = router;
