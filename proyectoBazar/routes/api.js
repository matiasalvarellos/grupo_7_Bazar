var express = require('express');
var router = express.Router();
const apisController= require("../controller/api/apisController");

/* GET home page. */
router.get('/users', apisController.listUsers);
router.get('/products', apisController.listProducts);



module.exports = router;
