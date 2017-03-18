var express = require('express');
var facebook = require('../api/facebook.js');
var fourSquare = require('../api/fourSquare.js');
var Store = require('../models/store.js');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var dataTemplate = require('../dataTemplates/aw.js');
var store;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res) {
    var radius= 200;
    store = new Store(dataTemplate.data, radius);
    var promise = store.gatherCompetitors();
        promise.then(function(response){
        store.competitors.gplacesResults = response.results;
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

router.post('/changeDB', function(req, res, next){
	console.log("Received call from test button");
  mongo.connect("mongodb://superuser:password@ds135680.mlab.com:35680/findr",function(err,db){
    if(err){
      console.log("Error opening db: ",err);
      res.sendStatus(500);
    }
    else{
      console.log("DB opened");
      var collection = db.collection("locations");

      // insert  with unique key for google, fb and 4square and drop duplicates
      for (var i = 0; i < store.competitors.gplacesResults.length; i++){
        var location = store.competitors.gplacesResults[i];
        //key is civic number _ lat _ lng_ source
        var k = location.vicinity.split(" ")[0] + "_" + Math.floor(location.geometry.location.lat) + "_" + Math.floor(location.geometry.location.lng) + "_" + "GooglePlaces";
        location["key"] = k
        db.collection("location").insert(location,{upsert:true},function(err, result){
          if(err){
            console.log("Error inserting into database: ",err);
            res.sendStatus(500);
          }
          else{
            collection.ensureIndex({"key": k}, {unique : true, dropDups : true});
          }
        });
      }

      // for (var i = 0; i < store.competitors.facebook.length; i++){
      //   var location = store.competitors.facebook[i];
      //   var k = location.street.split(" ")[0] + "_" + Math.floor(location.latitude) + "_"+ Math.floor(location.longitude) + "_" + "Facebook";
      //   location["key"] = k;
      //   db.collection("location").insert(location,{upsert:true},function(err, result){
      //     if(err){
      //       console.log("Error inserting into database: ",err);
      //       res.sendStatus(500);
      //     }
      //     else{
      //       db.locations.ensureIndex({'key': k}, {unique : true, dropDups : true});
      //     }
      //   });
      // }

      // for (var i = 0; i < store.competitors.fourSquare.length; i++){
      //   var location = store.competitors.fourSquare[i];
      //   var k = location.location.address.split(" ")[0] + "_" + Math.floor(location.location.lat) + "_"+ Math.floor(location.location.lng) + "_" + "FourSquare";
      //   location["key"] = k;
      //   db.collection("location").insert(location,{upsert:true},function(err, result){
      //     if(err){
      //       console.log("Error inserting into database: ",err);
      //       res.sendStatus(500);
      //     }
      //     else{
      //       db.locations.ensureIndex({'key': k}, {unique : true, dropDups : true});
      //     }
      //   });
      // }
      db.close();
    }
  });
	res.json();
});


module.exports = router;
