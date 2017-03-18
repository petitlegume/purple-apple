var request = require('request');
var Promise = require('Promise');
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: 'K0yqw5NPiQGmj4a8Y0k52g',
  consumer_secret: 'pbb05yoZhq6PTh33fSMXGCdsRiA',
  token: 'ufjBzKiN0cs8YuHedufGb2JfGAndXXGP',
  token_secret: 'QCgTL9ndBjWO7Ud2m5GYHHVQssk',
});

module.exports = {
    search: search
}

function search(params){

    var parameters = {
        ll: [params.loc.lat, params.loc.lon].toString(),
        category_filter: params.category
    }
    
    return new Promise(function (fulfill, reject){
        yelp.search(parameters,function(error,response){
            if (error) {
                console.log(error)
                reject(error);
            }
            else {
                console.log(response.businesses.length);
                fulfill(response.businesses);
            }
        });
    });

}

