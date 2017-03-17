/**
 * Created by JohnWu on 2017-03-17.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

    var clientId = '641741966019779';
    var clientSecret = '14d89dc6658614ffd23cb6ca314581df';
    request.get("https://graph.facebook.com/oauth/access_token%20?client_id=" + clientId + "&client_secret=" + clientSecret + "&grant_type=client_credentials" ,function(error,response,body){
        if(error){
            res.send(error)
        }else{
            res.redirect('/api/facebook/home');
        }
    });

});

router.get('/home', function(req, res, next){
	console.log(req);
	console.log(req.token);
	res.send('Hello');
});

module.exports = router;