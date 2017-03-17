var foursquare = (require('foursquarevenues'))('ILPEEW5HKDHF0PXBCLLNQPQ00Q3LBRA5CLY0PLMQS0XAB12W', 'CGEDZ0PM3YTUX5TFBD1BYLWAWUZZFGSJGDASQYQZWAYA2D1B');

function callFoursquare(jsonobject){

}

var params = {
    "ll": "45.5046903,-73.5726995",
    "query": "burger",
    "categoryId": [
        {
            "id": "4bf58dd8d48988d16e941735",
            "name": "Fast Food Restaurants"
        },
        {
            "id": "4bf58dd8d48988d16e941735",
            "name": "American Restaurant"
        },
        {
            "id": "4bf58dd8d48988d143941735",
            "name": "Breakfast Restaurant"
        },
        {
            "id": "4bf58dd8d48988d16c941735",
            "name": "Burger Joints"
        },
        {
            "id": "4bf58dd8d48988d16e941735",
            "name": "Fast Food Restaurants"
        }
    ]

};
 
foursquare.getVenues(params, function(error, venues) {
    console.log("Number of venues: " + venues.response.venues.length);
    if (!error) {
        for(venue in venues.response.venues)
            console.log(venues.response.venues[venue].name + "; Address: " + venues.response.venues[venue].location.distance);
    }
});
 
foursquare.exploreVenues(params, function(error, venues) {
    if (!error) {
        //console.log(venues);
    }
});
