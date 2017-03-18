var yelp = require("../api/yelp.js");
var expect = require('chai').expect;

function ensureApiSearch(params, expectedResultsLength) {
    return function (done) {

        yelp.search(params).then(actualResults => {
            if(!expectedResultsLength) {
            should(actualResults).be.null;
        } else {
            expect(actualResults.length).to.be.at.least(expectedResultsLength);
        }
        done();
    });
    };
};

describe('yelp api', function () {

    describe('nearby', function () {
        it('succeeds when valid arguments', ensureApiSearch({
            loc: {
                lat: 45.525,
                lon: -73.57
            },
            radius: 1000,
            category: "burgers"
        },  20));
    });
});
