var config = require("./config.js");
var assert = require("assert");
var Promise = require('bluebird');
var NearBySearch = require("googleplaces/lib/NearBySearch");
var nearBySearch = new NearBySearch(config.apiKey, config.outputFormat);
var nearBySearchAsync = Promise.promisify(nearBySearch);

var PlaceSearch = require("googlePlaces/lib/PlaceSearch.js");
var PlaceDetailsRequest = require("googlePlaces/lib/PlaceDetailsRequest.js");
var placeDetailsRequest = new PlaceDetailsRequest(config.apiKey, config.outputFormat);
var placeDetailsRequestAsync = Promise.promisify(placeDetailsRequest);

module.exports = {
    search: search
}

function search(params) {

    var parameters = {
        location: [params.loc.lat, params.loc.lon],
        radius: params.radius,
        keyword: params.category
    };
    var listings;
    return nearBySearchAsync(parameters).then(_listings => {
     //   console.log(response, "response");
        listings = _listings.results;
        return Promise.map(listings, (loc, index) => {
            return placeDetailsRequestAsync({reference: loc.reference}).then ((detail) => {
       //         console.log(response);
                listings[index].details = detail.result;                        
            });
        })   
    }).then(() => listings);
};

