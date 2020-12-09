const express= require("express");
const router = express.Router();
const productoController= require("../controller/productoController");
const autMiddlewares= require("../middlewares/authMiddleware");

router.get("/", productoController.vista );
router.get("/carrito", autMiddlewares ,productoController.carrito );
router.get("/create", productoController.crear );
router.get("/detail/:id?", productoController.detalle );

module.exports = router;