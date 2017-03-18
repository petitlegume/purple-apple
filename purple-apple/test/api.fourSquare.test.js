var fourSquare = require("../api/fourSquare");
var expect = require('chai').expect;

function ensureApiSearch(params, expectedResultsLength) {
    return function (done) {

        fourSquare.search(params).then(actualResults => {
            if(!expectedResultsLength) {
            should(actualResults).be.null;
        } else {
            expect(actualResults.length).to.be.at.least(expectedResultsLength);
        }
        done();
    });
    };
};

describe('fourSquare api', function () {

    describe('nearby', function () {
        it('succeeds when valid arguments', ensureApiSearch({
            loc: {
                lat: 45.525,
                lon: -73.57
            },
            radius: 1000,
            categories: [{name: 'hamburger restaurant', id: "4bf58dd8d48988d16c941735"}]
        },  9));
    });
});
