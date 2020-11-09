const express= require("express");
const router = express.Router();
const productoController= require("../controller/productoController");

router.get("/", productoController.vista );
router.get("/carrito", productoController.carrito );
router.get("/create", productoController.crear );
router.get("/detail/:id?", productoController.detalle );

module.exports=router;