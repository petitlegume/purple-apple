var request = require('request');

var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: 'K0yqw5NPiQGmj4a8Y0k52g',
  consumer_secret: 'pbb05yoZhq6PTh33fSMXGCdsRiA',
  token: 'ufjBzKiN0cs8YuHedufGb2JfGAndXXGP',
  token_secret: 'QCgTL9ndBjWO7Ud2m5GYHHVQssk',
});



// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ category_filter: 'burgers', ll:'45.5046903,-73.5726995' })
.then(function (data) {
	for(i in data.businesses){
		console.log(data.businesses[i].name);
	}
	// console.log(data);
	// for(i in data)
	// 	console.log(data.businesses[i]);
})
.catch(function (err) {
  console.error(err);
});