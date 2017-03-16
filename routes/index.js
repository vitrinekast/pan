var express = require('express');  
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
	res.render('index/home');
});
router.get('/splash', function (req, res) {
	res.render('splash');
})

module.exports = router;  