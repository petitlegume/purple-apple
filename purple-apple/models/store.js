/**
 * Created by franc on 3/17/2017.
 */

var gplaces = require('../api/gPlaces.js');
var facebook = require('../api/facebook.js');
var fourSquare = require('../api/fourSquare.js');
var Promis = require("Promise");
module.exports = Store;

function Store(params, radius) {

    var keywords = params.loc_keywords.split(", ");
    var allegibleKeywords = findAllegibleKeywords(keywords, params.categories);
    var mostAllegibleCategories = findMostAllegibleCategories(allegibleKeywords, params.categories);

    this.raw = params;
    this.name = params.loc_name;
    var latlon = params.loc_latlong.split(",");
    this.latlon = [latlon[1],latlon[0]];
    this.categories = mostAllegibleCategories;
    this.radius = radius;

    this.competitors = {
        gplacesResults:{},
        fbResults: {},
        fsResults: {}
    };

    this.uniqueComp = [];

    this.gatherCompetitors = gatherCompetitors;
    this.buildProxy = buildProxy;
    this.merge = merge;
}

function merge(){

  if(this.competitors.gplacesResults){
    for (var i = 0; i < this.competitors.gplacesResults.length; i ++){
      var tempKey = googleKey(this.competitors.gplacesResults[i]);
      var flag = false;

      for (var j = i + 1; j< this.competitors.gplacesResults.length; j++){
        if (googleKey(this.competitors.gplacesResults[j]) == tempKey){
          flag = true;
          break;
        }
      }
      if(flag){
        this.uniqueComp.push(this.competitors.gplacesResults[i]);
      }
    }
  }


  if(this.competitors.fbResults){
    for (var i = 0; i< this.competitors.fbResults.length; i++){
      tempKey = fbKey(this.competitors.fbResults[i]);
      flag = false;
      for (var j = i + 1; j< this.competitors.fbResults.length; j++){
        if (fbKey(this.competitors.fbResults[j]) == tempKey){
          flag = true;
          break;
        }
      }
      if(flag){
        this.uniqueComp.push(this.competitors.fbResults[i]);
      }
    }
  }

  if(this.competitors.fsResults){
    for (var i = 0; i< this.competitors.fsResults.length; i++){
      tempKey = fsKey(this.competitors.fsResults[i]);
      flag = false;
      for (var j = i + 1; j< this.competitors.fsResults.length; j++){
        if (fsKey(this.competitors.fsResults[j]) == tempKey){
          flag = true;
          break;
        }
      }
      if(flag){
        this.uniqueComp.push(this.competitors.fsResults[i]);
      }
    }
  }
  return this.uniqueComp;
}

function googleKey(location){
  var k = location.details.formatted_address.replace("/^\s*\d\w+/g") + "_" +
                      location.details.formatted_phone_number.replace("/\D/g",'') + "_";
  var postalCode = location.details.formatted_address.match("\b([A-Z]\d[A-Z]\s*\d[A-Z]\d|\d{5}(\-\d{4})?)\b");
  if(postalCode){
    k += "_"+ postalCode[0];
  }
  k += "_GooglePlaces";
  return k;
}

function fbKey(location){
  var k = location.location.street.replace("/^\s*\d\w+/g");
  var postalCode = location.location.zip.match("\b([A-Z]\d[A-Z]\s*\d[A-Z]\d|\d{5}(\-\d{4})?)\b");
  if(postalCode){
    k += "_"+ postalCode[0];
  }
  k += "_Facebook";
  return k;
}

function fsKey(location){
  var k = location.location.address.replace("/^\s*\d\w+/g")+
          location.contact.phone.replace(/\D/g,'') + "_";
  var postalCode = location.location.postalCode.match("\b([A-Z]\d[A-Z]\s*\d[A-Z]\d|\d{5}(\-\d{4})?)\b");
  if(postalCode){
    k += "_"+ postalCode[0];
  }
  k += "_Facebook";
  return k;
}

function findAllegibleKeywords(keywords, categories) {
    var correspondances = [];

    for (var j = 0; j < categories.length; j++) {

        var category = categories[j].name.toLowerCase();

        for (var i = 0; i < keywords.length; i++) {

            var keyword = keywords[i].toLowerCase();

            if ( category.match(keyword) || keyword.match(category)) {

                var correspondance = findInCorrespondances(keyword, correspondances);

                if (correspondance) {
                    correspondance.occurence += 1;
                }
                else correspondances.push({
                    keyword: keyword.toLowerCase(),
                    occurence: 1
                })
            }
        }
    }

    return correspondances;

}

function buildProxy(){
    return {
        name : this.name,
        latlon: this.latlon,
        competitors: this.competitors
    }
}

function findInCorrespondances(name, correspondances) {
    for (var i = 0; i < correspondances.length; i++) {
        if (correspondances[i].keyword == name) return correspondances[i];
    }
    return null;
}

function findMostAllegibleCategories(allegibleKeywords, categories) {

    var mostAllegible = [];

    for ( var i = 0; i < categories.length; i++ ) {
        var category = categories[i];
        categories[i].name = categories[i].name.toLowerCase();
        for (var j = 0; j < allegibleKeywords.length; j++) {
            if ( category.name.includes( allegibleKeywords[j].keyword ) && !(allegibleKeywords[j].occurence > 2) ) {
                mostAllegible.push( category );
                break;
            }
        }
    }

    return mostAllegible;
}


function gatherCompetitors() {
    parameters = {
        loc:{
            lat: this.latlon[0],
            lon: this.latlon[1]
        },
        radius: this.radius,
        categories: this.categories,
        category: this.categories[1].name,
        categoryId: this.categories[1].id
    };


    var promises = [];

    promises.push( new Promise(function (fulfill, reject){
        gplaces.search(parameters).done(function (res) {
            try {
                // competitors.gplacesResults = res;
                fulfill(res)
            }
            catch(ex){
                reject(ex);
            }
        }, reject);
    }));

    promises.push( new Promise(function (fulfill, reject){
        fourSquare.search(parameters).done(function(data){
            try {
                // competitors.fsResults = data.response.venues;
                fulfill(data);
            }
            catch(ex){
                reject(ex);
            }
        }, reject);
    }));

    promises.push( new Promise(function (fulfill, reject){
        facebook.search(parameters).done(function (res) {
            try {
                fulfill(res);
            }
            catch(ex){
                reject(ex);
            }
        }, reject);
    }));

    return Promise.all(promises);
}
