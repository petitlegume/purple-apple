var config = require("./config.js");
var assert = require("assert");
var Promise = require('promise');
var NearBySearch = require("googleplaces/lib/NearBySearch");
var nearBySearch = new NearBySearch(config.apiKey, config.outputFormat);

module.exports = {
    search: search
}

function search(params) {

    var parameters = {
        location: [params.loc.lat, params.loc.lon],
        radius: params.radius,
        keyword: params.category
    };

    return new Promise(function (fulfill, reject){
        nearBySearch(parameters, function (error, response) {
            if (error) reject(error);
            else fulfill(response);
            //var name = response.results[i].name;
            //var rating = response.results[i].rating;
        });
    });


}
