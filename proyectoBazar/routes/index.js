var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/productDetail', function(req, res, next) {
  res.render('productDetail');
});
router.get('/productCart', function(req, res, next) {
  res.render('productCart');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/productAdd', function(req, res, next) {
  res.render('productAdd');
});

module.exports = router;
