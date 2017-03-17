var foursquare = (require('foursquarevenues'))('ILPEEW5HKDHF0PXBCLLNQPQ00Q3LBRA5CLY0PLMQS0XAB12W', 'CGEDZ0PM3YTUX5TFBD1BYLWAWUZZFGSJGDASQYQZWAYA2D1B');


function run(filename){
    var params = {
        "ll": null,
        "intent": "browse",
        "radius": "2000",
        "categoryId": []
    };

    function nearestCompetitor(){
        var jsonobject = require(filename);
        //console.log(jsonobject);

        // use all categories from input json
        // for (i in jsonobject.categories){
        //     params.categoryId.push(jsonobject.categories[i].id)
        // }
        params.categories = ["4bf58dd8d48988d16c941735"];
        params.ll = jsonobject.loc_latlong.split(",").reverse().toString();
    }
    nearestCompetitor();

    foursquare.getVenues(params, function(error, venues) {
        console.log("Number of venues: " + venues.response.venues.length);
        if (!error) {
            venues = venues.response.venues;
            printdata = {};
            for (i = 0; i < venues.length; i++) {
                venue = venues[i];
                printdata = {
                    name: venue.name,
                    distance: venue.location.distance,
                    address: venue.location.address,
                    rating: venue.rating,
                    stats: venue.stats,
                    category: {
                        id: venue.categories[0].id,
                        name: venue.categories[0].name
                    }
                };
                console.log(printdata);
                console.log('\n')
            }

        }
    });

    foursquare.exploreVenues(params, function(error, venues) {
        if (!error) {
            //console.log(venues);
        }
    });
}



module.exports.run = run;
