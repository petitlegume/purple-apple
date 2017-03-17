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

            itemVenue = items[item]['venue'];
            itemTips = items[item]['tips'];

            console.log('Venue Name: ', itemVenue.name);
            console.log('Item tips count: ', itemTips.length);

            /* Here we can loop all tips of  this item */
            var itemTip = {}; /* tip is an object */
            for(var tip in itemTips){
                itemTip = itemTips[tip];
                console.log('Tip text: ', itemTip.text);
            }

        }
    });