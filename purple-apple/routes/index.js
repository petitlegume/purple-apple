var express = require('express');
var facebook = require('../api/facebook.js');
var fourSquare = require('../api/fourSquare.js');
var Store = require('../models/store.js');
var router = express.Router();

var dataTemplate = require('../dataTemplates/aw.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res) {
    var radius= 200;
    var store = new Store(dataTemplate.data, radius);
    var promise = store.gatherCompetitors();
        promise.then(function(response){
        store.competitors.gplacesResults = response.results;
        res.send(JSON.stringify(store.buildProxy()));
    });

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

/* Testing fourSquare api */
router.get('/api/fourSquare', function(req, res, next){

    params = {
        loc: {
            lat: 45.525,
            lon: -73.57
        },
        radius: 1000,
        intent: "browse",
        category: ["4bf58dd8d48988d16c941735"]
    }

    fourSquare.search(params).done(function(data){
        res.send(data.response.venues);
    });
});


module.exports = router;

