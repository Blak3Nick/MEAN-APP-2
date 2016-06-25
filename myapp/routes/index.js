var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alpha STRONG' });
});
/* GET 'Get the APP' page */
router.get('/Get-App', function(req, res, next) {
  res.render('Get-App', { title: 'Alpha STRONG' });
});
/* GET 'Discover' page */
router.get('/discover', function(req, res, next) {
  res.render('discover', { title: 'Alpha STRONG' });
});
/* GET 'who' page */
router.get('/who', function(req, res, next) {
  res.render('who', { title: 'Alpha STRONG' });
});
/* GET 'signup' page */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Alpha STRONG' });
});
/* GET 'test' page */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Alpha STRONG' });
});
module.exports = router;
