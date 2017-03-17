/**
 * Created by JohnWu on 2017-03-17.
 */
var request = require('request');

module.exports = {
    search: search
}
    
function search() {

    var query = "macdonald";
    var clientId = '641741966019779';
    var clientSecret = '14d89dc6658614ffd23cb6ca314581df';
    var url = "https://graph.facebook.com/search?fields=id,name,location,overall_rating&q=" + query + "&type=place&center=45.525476,%20-73.574596&distance=10000&access_token=" + clientId + "|" + clientSecret

    var token = '641741966019779|tRYxL3sSUqUDa94vj6k8NwyDFJA';

    request.get("https://graph.facebook.com/search?q=ritual&type=place&center=37.76,-122.427&distance=1000&access_token=" + token ,function(error,response,body){
        if(error){
            return error;
        }else{
            return response;
        }
    });
}






