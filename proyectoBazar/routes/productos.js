const express= require("express");
const router = express.Router();
const productoController= require("../controller/productoController");
const upload = require('../middlewares/multer/multerProduct');
const authMiddlewares = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const validator = require("../middlewares/express-validator");

////*CRUDE PRODUCTOS*////
router.get("/", productoController.list);
router.get("/create", authMiddlewares, adminMiddleware, productoController.crear);
router.post("/create", upload.any(),  validator.prod, productoController.store);
router.get("/detail/:id", productoController.detalle );
router.get("/edit/:id", authMiddlewares, adminMiddleware, productoController.edit);
router.get("/edit-images/:id", authMiddlewares, adminMiddleware, productoController.editImages);
router.post("/imageDelete/:id", productoController.imageDelete);
router.post("/addImages/:id?", upload.any(), productoController.addImages);
router.post("/edit/:id", productoController.update);
router.post("/destroy/:id",  productoController.delete);
router.get("/buscar", productoController.buscar);


////* FIN CRUDE PRODUCTOS*////




module.exports=router;
