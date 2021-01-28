var express = require('express');
var router = express.Router();
const authMiddlewares = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const adminController= require("../controller/adminController");

/*CATEGORIAS*/  
router.get('/categories', authMiddlewares, adminMiddleware, adminController.createcategory );
router.post('/categories', authMiddlewares, adminMiddleware,adminController.storecategory);

/*subcategorias*/  
router.get('/subcategories', authMiddlewares, adminMiddleware, adminController.createsubcategory );
router.post('/subcategories', authMiddlewares, adminMiddleware,adminController.storesubcategory);


module.exports = router;
