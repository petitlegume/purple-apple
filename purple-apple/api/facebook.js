/**
 * Created by JohnWu on 2017-03-17.
 */
var request = require('request');
var Promise = require('promise');

module.exports = {
    search: search
}
    
function search(params) {

    var parameters = {
        location: [params.loc.lat, params.loc.lon],
        radius: params.radius,
        category: params.category
    };

    var clientId = '641741966019779';
    var clientSecret = '14d89dc6658614ffd23cb6ca314581df';
    var url = "https://graph.facebook.com/search?fields=id,name,location,overall_rating&q=" +
        parameters.category + "&type=place&center=" + parameters.location[0] + ",%20" + parameters.location[1] +
        "&distance=" + parameters.radius + "&access_token=" + clientId + "|" + clientSecret;


    return new Promise(function (fulfill, reject){
        request.get(url,function(error,response){
            if (error) reject(error);
            else fulfill(JSON.parse(response.body));
        });
    });

}






