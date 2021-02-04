var express = require('express');
var router = express.Router();


function getName(){
  return "Nick"
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', firstName: getName() });
});

/* GET anout page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

module.exports = router;
