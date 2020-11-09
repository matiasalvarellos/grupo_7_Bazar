var express = require('express');
var router = express.Router();
const usersController= require("../controller/usersController");

/* GET users listing. */
router.get('/login', usersController.login);
router.get("/register",usersController.registro);

module.exports = router;
