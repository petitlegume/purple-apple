/**
 * Created by JohnWu on 2017-03-17.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

    var token = '14d89dc6658614ffd23cb6ca314581df';

    request.get("https://graph.facebook.com/search?q=ritual&type=place&center=37.76,-122.427&distance=1000&access_token=" + token ,function(error,response,body){
        if(error){
            res.send(error)
        }else{
            res.send(body);
        }
    });

});

module.exports = router;