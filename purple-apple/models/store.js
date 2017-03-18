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
    var allegibles = findAllegibles(keywords, params.categories);
    var mostAllegible = findMostAllegible(allegibles);

    this.raw = params;
    this.name = params.loc_name;
    var latlon = params.loc_latlong.split(",");
    this.latlon = [latlon[1],latlon[0]];
    console.log('\n\n\n\n');
    console.log(mostAllegible);
    this.category = mostAllegible.name;
    this.categoryId = mostAllegible.id; // fix hardcoded, (mostAllegible needs to give us category name and id)
    this.radius = radius;

    this.competitors = {
        gplacesResults:{},
        fbResults: {},
        fsResults: {}
    };

    this.gatherCompetitors = gatherCompetitors;
    this.buildProxy = buildProxy;
}

function findAllegibles(keywords, categories) {
    var correspondances = [];

    for (var j = 0; j < categories.length; j++) {

        var category = categories[j];

        for (var i = 0; i < keywords.length; i++) {

            if (category.name.match(keywords[i]) || keywords[i].match(category.name)) {

                var correspondance = findInCorrespondances(category, correspondances);

                if (correspondance) {
                    correspondance.occurence += 1;
                }
                else correspondances.push({
                    category: category,
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

function findInCorrespondances(category, correspondances) {
    for (var i = 0; i < correspondances.length; i++) {
        if (correspondances[i].category.name == category.name) return correspondances[i];
    }
    return null;
}

function findMostAllegible(allegibles) {

    var mostAllegibleSofar = allegibles[0];

    for (var i = 1; i < allegibles.length; i++) {
        var allegible = allegibles[i];
        if (!mostAllegibleSofar) mostAllegibleSofar = allegible;
        else if (mostAllegibleSofar.occurence > allegible.occurence) mostAllegibleSofar = allegible;
    }

    return mostAllegibleSofar.category;
}

function gatherCompetitors() {

    parameters = {
        loc:{
            lat: this.latlon[0],
            lon: this.latlon[1]
        },
        radius: this.radius,
        category: this.category,
        categoryId: this.categoryId
    };
    console.log(parameters)


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




    // facebook.search(parameters).done(function(data){
    //     console.log(data);
    //     this.competitors.fbResults = data;
    // });

    promises.push( new Promise(function (fulfill, reject){
        fourSquare.search(parameters).done(function(data){
            try {
                // competitors.fsResults = data.response.venues;
                fulfill(data.response.venues);
            }
            catch(ex){
                reject(ex);
            }
        }, reject);
    }));


    return Promise.all(promises);

}