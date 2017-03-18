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

router.post('/search', function(req, res) {
    var radius= 1000;
    var store = new Store(req.body, radius);
    var promise = store.gatherCompetitors();
        promise.then(function(response){
        store.competitors.gplacesResults = response[0].results;
        store.competitors.fsResults = response[1];
        store.competitors.fbResults = response[2];
        store.uniqueComp = store.merge();
        console.log(store.competitors);
        res.send(JSON.stringify(store.buildProxy()));
    });

});

/* Testing Facebook api */
router.get('/facebook', function(req, res, next){

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
router.get('/fourSquare', function(req, res, next){

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
