const express= require("express");
const router = express.Router();
const productoController= require("../controller/productoController");
const upload = require('../middlewares/multer/multerProduct');
const authMiddlewares = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

////*CRUDE PRODUCTOS*////

/*Lista de productos-Karla*/
router.get("/", productoController.list);

/*Formulario de creación de productos-Flor*/
router.get("/create", authMiddlewares, adminMiddleware, productoController.crear);
/*Acción de creación (a donde se envía el formulario)*/
router.post("/create", upload.any(), productoController.store);

router.get("/detail/:id", productoController.detalle );

/*Formulario de edición de productos-Karla*/
router.get("/edit/:id", authMiddlewares, adminMiddleware, productoController.edit);
/*Acción de edición (a donde se envía el formulario)*/
router.post("/edit/:id", upload.any(), productoController.update);

/*Formulario de borrar de productos-Flor*/
router.post("/destroy/:id",  productoController.delete);

////* FIN CRUDE PRODUCTOS*////

router.get("/carrito", authMiddlewares, productoController.carrito );

module.exports=router;
