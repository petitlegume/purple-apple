/**
 * Created by JohnWu on 2017-03-17.
 */
var request = require('request');

module.exports = {
    search: search
}

function search() {
    var token = '641741966019779|tRYxL3sSUqUDa94vj6k8NwyDFJA';

    request.get("https://graph.facebook.com/search?q=ritual&type=place&center=37.76,-122.427&distance=1000&access_token=" + token ,function(error,response,body){
        if(error){
            return error;
        }else{
            return response;
        }
    });
}






