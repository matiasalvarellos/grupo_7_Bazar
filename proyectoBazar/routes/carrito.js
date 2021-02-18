const express = require("express");
const router = express.Router();
const cartController = require("../controller/carritoController")
const authMiddlewares = require("../middlewares/authMiddleware");

router.get("/", authMiddlewares, cartController.listCart);
router.post("/add/:id", cartController.addProduct);
router.post("/order/add", cartController.addOrder);
router.post("/item/delete/:id" , cartController.destroyItem);

module.exports = router;