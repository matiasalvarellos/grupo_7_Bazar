const express= require("express");
const router = express.Router();
const productoController= require("../controller/productoController");
const upload = require('../middlewares/multer');

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

router.get("/carrito", productoController.carrito );

module.exports=router;

/*
/products (GET)
Listado de productos
2. /products/create (GET)
F
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado
*/
