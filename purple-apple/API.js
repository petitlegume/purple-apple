var foursquare = (require('foursquarevenues'))('ILPEEW5HKDHF0PXBCLLNQPQ00Q3LBRA5CLY0PLMQS0XAB12W', 'CGEDZ0PM3YTUX5TFBD1BYLWAWUZZFGSJGDASQYQZWAYA2D1B');
 
    var params = {
        "ll": "45.5046903,-73.5726995"
    };
 
    foursquare.getVenues(params, function(error, venues) {
        if (!error) {
            console.log(venues);
        }
    });
 
    foursquare.exploreVenues(params, function(error, venues) {
        if (!error) {
  			console.log(venues);
        }
    });