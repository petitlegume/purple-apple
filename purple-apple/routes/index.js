var express = require('express');
var facebook = require('../api/facebook.js');
var Store = require('../models/store.js');
var router = express.Router();

var dataTemplate = require('../dataTemplates/aw.js');

var radius= 200;
var store = new Store(dataTemplate.data, radius);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Testing Facebook api */
router.get('/api/facebook', function(req, res, next){

    params = {
    loc: {
        lat: 45.525,
        lon: -73.57
    },
    radius: 1000,
    keyword: "banquise"
}

    facebook.search(params).done(function(data){
        res.send(data);
    });
});

module.exports = router;

