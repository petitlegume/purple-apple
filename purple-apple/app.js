var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var users = require('./routes/users');
var facebook = require('./api/facebook');

const app = express();
const index = require('./routes/index');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', index);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/facebook', facebook);


app.get(['/', '/index.html', '/home', '/index'], function(req,res){
	res.render('index', {});
});

app.get(['/connect'], function(req,res){
	mongo.connect("http://localhost:27017/purpleDB",function(err,db){
    if(err){
      console.log("Error opening db: ",err);
      res.sendStatus(500);
    }
    else{
      console.log("DB opened");
      var collection = db.collection("locations");
      // var storesObj = getStore();
      // insert  with unique key for google, fb and 4square and drop duplicates

      for (var i = 0; i < store.competitors.gplacesResults.length; i++){
        var location = store.competitors.gplacesResults[i];
        //key is civic number _ lat _ lng_ source
        var k = location.vicinity.split(" ")[0] + "_" + Math.floor(location.geometry.location.lat) + "_" + Math.floor(location.geometry.location.lng) + "_" + "GooglePlaces";
        location[key] = k
        db.collection("location").insert(location,{upsert:true},function(err, result){
          if(err){
            console.log("Error inserting into database: ",err);
            res.sendStatus(500);
          }
          else{
            db.locations.ensureIndex({'key': k}, {unique : true, dropDups : true});
          }
        });
      }

      for (var i = 0; i < store.competitors.facebook.length; i++){
        var location = store.competitors.facebook[i];
        var k = location.street.split(" ")[0] + "_" + Math.floor(location.latitude) + "_"+ Math.floor(location.longitude) + "_" + "Facebook";
        location[key] = k;
        db.collection("location").insert(location,{upsert:true},function(err, result){
          if(err){
            console.log("Error inserting into database: ",err);
            res.sendStatus(500);
          }
          else{
            db.locations.ensureIndex({'key': k}, {unique : true, dropDups : true});
          }
        });
      }

      for (var i = 0; i < store.competitors.fourSquare.length; i++){
        var location = store.competitors.fourSquare[i];
        var k = location.location.address.split(" ")[0] + "_" + Math.floor(location.location.lat) + "_"+ Math.floor(location.location.lng) + "_" + "FourSquare";
        location[key] = k;
        db.collection("location").insert(location,{upsert:true},function(err, result){
          if(err){
            console.log("Error inserting into database: ",err);
            res.sendStatus(500);
          }
          else{
            db.locations.ensureIndex({'key': k}, {unique : true, dropDups : true});
          }
        });
      }
      db.close();
    }
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development')
{
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
}
else{
    app.listen(8080, function () {
        console.log('Example app listening on port 8080!');
    });
}



module.exports = app;
