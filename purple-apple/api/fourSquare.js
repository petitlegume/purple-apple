var foursquare = (require('foursquarevenues'))('ILPEEW5HKDHF0PXBCLLNQPQ00Q3LBRA5CLY0PLMQS0XAB12W', 'CGEDZ0PM3YTUX5TFBD1BYLWAWUZZFGSJGDASQYQZWAYA2D1B');
var Promise = require('Promise');

module.exports = {
    search: search
}

function search(params){

    var categoryIds = [];
    for (i in params.categories) {
        categoryIds.push(params.categories[i].id)
    }
    var parameters = {
        "ll": [params.loc.lat, params.loc.lon].toString(),
        "intent": "browse",
        "radius": params.radius,
        "categoryId": categoryIds
    };

    return new Promise(function (fulfill, reject){
        foursquare.getVenues(parameters,function(error,res){
            if (error) reject(error);
            else {
                fulfill(res.response.venues);
            }
        });
    });

}

