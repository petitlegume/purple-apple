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
    facebook.search().done(function(data){
        res.send(data);
    });
});

module.exports = router;

