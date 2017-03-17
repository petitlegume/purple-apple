var foursquare = (require('foursquarevenues'))('ILPEEW5HKDHF0PXBCLLNQPQ00Q3LBRA5CLY0PLMQS0XAB12W', 'CGEDZ0PM3YTUX5TFBD1BYLWAWUZZFGSJGDASQYQZWAYA2D1B');


var params = {
    "ll": null,
    "categoryId": null
};

function nearestCompetitor(filename){
    var jsonobject = require(filename);
    //console.log(jsonobject);
    params.categoryId = jsonobject.categories;
    params.ll = jsonobject.loc_latlong.split(",").reverse().toString();
}

nearestCompetitor("./aandw.json");

foursquare.getVenues(params, function(error, venues) {
    console.log("Number of venues: " + venues.response.venues.length);
    if (!error) {
        for(venue in venues.response.venues)
            console.log(venues.response.venues[venue].name + "; Address: " + venues.response.venues[venue].location.address);
    }
});

foursquare.exploreVenues(params, function(error, venues) {
    if (!error) {
        //console.log(venues);
    }
});

module.exports = nearestCompetitor;
