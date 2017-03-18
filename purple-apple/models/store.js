/**
 * Created by franc on 3/17/2017.
 */

var gplaces = require('../api/gPlaces.js');
var facebook = require('../api/facebook.js');
var fourSquare = require('../api/fourSquare.js');
module.exports = Store;

function Store(params) {


    var keywords = params.loc_keywords.split(", ");
    var allegibles = findAllegibles(keywords, params.categories);
    var mostAllegible = findMostAllegible(allegibles);

    this.raw = params;
    this.name = params.loc_name;
    this.loc = {
        lat: params.loc_latlong[1],
        lon: params.loc_latlong[0]
    };
    this.category = mostAllegible;

    this.gatherCompetitors = gatherCompetitors;

    this.competitors = {};

}

function findAllegibles(keywords, categories) {
    var correspondances = [];

    for (var j = 0; j < categories.length; j++) {

        var category = categories[j].name;

        for (var i = 0; i < keywords.length; i++) {

            if (category.match(keywords[i]) || keywords[i].match(category)) {

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

function findInCorrespondances(name, correspondances) {
    for (var i = 0; i < correspondances.length; i++) {
        if (correspondances[i].name == name) return correspondances[i];
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
    var competitors = {}

    gplaces.search(this.raw).done(function (res) {
        competitors.gplacesResults = res.results;
    });

    facebook.search(this.raw).done(function(data){
        competitors.facebook = data;
    });

    fourSquare.search(this.raw).done(function(data){
        var venues = data.response.venues;
        competitors.fourSquare = venues;
    });

    return competitors;
}