var foursquare = (require('foursquarevenues'))('ILPEEW5HKDHF0PXBCLLNQPQ00Q3LBRA5CLY0PLMQS0XAB12W', 'CGEDZ0PM3YTUX5TFBD1BYLWAWUZZFGSJGDASQYQZWAYA2D1B');
var Promise = require('Promise');

module.exports = {
    search: search
}

function search(params){

    var fqparams = {
        "ll": [params.loc.lat, params.loc.lon],
        "intent": "browse",
        "radius": params.radius,
        "categoryId": params.category
    };

    return new Promise(function (fulfill, reject){
        foursquare.getVenues(fqparams,function(error,response){
            if (error) reject(error);
            else fulfill(response);
        });
    });

}

