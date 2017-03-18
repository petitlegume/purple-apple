/**
 * Created by franc on 3/17/2017.
 */

var gplaces = require('../api/gPlaces.js');
var facebook = require('../api/facebook.js');
var fourSquare = require('../api/fourSquare.js');
module.exports = Store;

function Store(params, radius) {

    var keywords = params.loc_keywords.split(", ");
    var allegibles = findAllegibles(keywords, params.categories);
    var mostAllegible = findMostAllegible(allegibles);

    this.raw = params;
    this.name = params.loc_name;
    this.latlon = params.loc_latlong.split(",");
    this.category = mostAllegible;
    this.radius = radius;

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

    gplaces.search({
        loc:{
            lat: this.latlon[1],
            lon: this.latlon[0]
        },
        radius: this.radius,
        category: this.category
    }).done(function (res) {
        this.competitors.gplacesResults = res.results;
        console.log("salut");
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