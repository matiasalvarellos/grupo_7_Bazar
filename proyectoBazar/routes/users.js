var express = require('express');
var router = express.Router();
const usersController= require("../controller/usersController");
const validator = require("../middlewares/express-validator");
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware");

/* GET users listing. */
router.get('/login', guestMiddleware ,usersController.login);
router.post("/login", validator.login , usersController.processLogin);
router.get("/register", usersController.registro);
router.post("/register", validator.regis, usersController.processRegistro);
router.get("/chequear", usersController.chequear);
router.post("/logout", usersController.logout);

module.exports = router;
