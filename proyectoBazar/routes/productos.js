const express= require("express");
const router = express.Router();
const productoController= require("../controller/productoController");
const upload = require('../middlewares/multer');
const autMiddlewares= require("../middlewares/authMiddleware");

////*CRUDE PRODUCTOS*////

/*Lista de productos-Karla*/
router.get("/", productoController.list);

/*Formulario de creación de productos-Flor*/
router.get("/create", productoController.crear);
/*Acción de creación (a donde se envía el formulario)*/
router.post("/create", upload.any(), productoController.store);

router.get("/detail/:id?", productoController.detalle );

/*Formulario de edición de productos-Karla*/
router.get("/edit/:id?", productoController.edit);
/*Acción de edición (a donde se envía el formulario)*/
router.post("/edit/:id?", upload.any(), productoController.update);

/*Formulario de borrar de productos-Flor*/
router.get("/destroy/:id", productoController.delete);

////* FIN CRUDE PRODUCTOS*////

router.get("/carrito", autMiddlewares, productoController.carrito );

module.exports=router;
