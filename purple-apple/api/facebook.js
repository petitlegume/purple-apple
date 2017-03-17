/**
 * Created by JohnWu on 2017-03-17.
 */
var request = require('request');
var Promise = require('promise');

module.exports = {
    search: search
}
    
function search() {

    var query = "macdonald";
    var clientId = '641741966019779';
    var clientSecret = '14d89dc6658614ffd23cb6ca314581df';
    var url = "https://graph.facebook.com/search?fields=id,name,location,overall_rating&q=" + query + "&type=place&center=45.525476,%20-73.574596&distance=10000&access_token=" + clientId + "|" + clientSecret;

    return new Promise(function (fulfill, reject){
        request.get(url,function(error,response,body){
            if (error) reject(error);
            else fulfill(response);
        });
    });

}






