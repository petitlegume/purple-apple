var express = require('express');
var gplaces = require('../api/gPlaces.js');
var Store = require('../models/store.js');
var router = express.Router();

var dataTemplate = require('../dataTemplates/aw.js');
var store = new Store(dataTemplate.data);

// //gplaces example
// params = {
//     loc: {
//         lat: 49.233707,
//         lon: -122.856296
//     },
//     radius: 200,
//     keyword: "fast food"
// }
//
// gplaces.search(params).done(function(res){
//     console.log(res);
// });
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

module.exports = router;
