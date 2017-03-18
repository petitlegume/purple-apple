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

    this.gatherCompetitors = gatherCompetitors;
    this.buildProxy = buildProxy;
}

function findAllegibleKeywords(keywords, categories) {
    var correspondances = [];

    for (var j = 0; j < categories.length; j++) {

        var category = categories[j].name.toLowerCase();

        for (var i = 0; i < keywords.length; i++) {

            var keyword = keywords[i].toLowerCase()

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
        var category = categories[i].name.toLowerCase();
        for (var j = 0; j < allegibleKeywords.length; j++) {
            if ( category.includes( allegibleKeywords[j].keyword ) & !(allegibleKeywords[j].occurence > 2) ) {
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
        category: this.categories[0]
    }

    // parameters = {
    //     loc:{
    //         lat: 45.525476,
    //         lon: -73.574596
    //     },
    //     radius: 1000,
    //     category: 'burger'
    // }

    var competitors = {};

    return new Promise(function (fulfill, reject){
        gplaces.search(parameters).done(function (res) {
            try {            //competitors.gplacesResults = res.results;
                fulfill(res);
            }
            catch(ex){
                reject(ex);
            }
        }, reject);
    });

    // return new Promise(function (fulfill, reject){
    //     facebook.search(parameters).done(function (res) {
    //         try {
    //             fulfill(res);
    //         }
    //         catch(ex){
    //             reject(ex);
    //         }
    //     }, reject);
    // });



/*

    fourSquare.search(parameters).done(function(data){
        var venues = data.response.venues;
        this.competitors.fsResults = venues;
    });
*/

}

