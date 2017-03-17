var express = require('express');
var gplaces = require('../api/gPlaces.js');
var facebookRef = require('../api/facebook.js')
var request = require('request');
var router = express.Router();

//
//gplaces example
params = {
    loc: {
        lat: 49.233707,
        lon: -122.856296
    },
    radius: 200,
    keyword: "fast food"
}

gplaces.search(params).done(function(res){
    console.log(res);
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/facebook', function(req, res, next){
	var response = facebookRef.search();
	console.log(response);
	res.send(response);
});




module.exports = router;
