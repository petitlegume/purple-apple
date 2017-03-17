/**
 * Created by JohnWu on 2017-03-17.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

    var query = "macdonald";
    var clientId = '641741966019779';
    var clientSecret = '14d89dc6658614ffd23cb6ca314581df';
    request.get("https://graph.facebook.com/search?fields=id,name,location,overall_rating&q=" + query + "&type=place&center=45.525476,%20-73.574596&distance=10000&access_token=" + clientId + "|" + clientSecret ,function(error,response,body){
        if(error){
            res.send(error)
        }else{
            console.log(res);
            res.send('Test');
        }
    });

});

router.get('/home', function(req, res, next){
	console.log(req);
	console.log(req.token);
	res.send('Hello');
});

module.exports = router;