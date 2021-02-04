var express = require('express');
var router = express.Router();
const adminMiddlewares = require("../middlewares/adminMiddleware");
const adminController= require("../controller/adminController");

/*CATEGORIAS*/  
router.get('/categories', adminMiddlewares, adminController.createCategory );
router.post('/categories', adminController.storeCategory);
/*COLORES*/
router.get('/colors', adminMiddlewares, adminController.createColor);
router.post('/colors', adminController.storeColor);


module.exports = router;
