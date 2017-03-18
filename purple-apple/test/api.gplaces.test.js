var gPlaces = require("../api/gPlaces.js");
var expect = require('chai').expect;

function ensureApiSearch(params, expectedResultsLength) {
  return function (done) {
  
    gPlaces.search(params).then(actualResults => {
      if(!expectedResultsLength) {
        should(actualResults).be.null;
      } else {
          expect(actualResults.length).to.be.at.least(expectedResultsLength);
      }
      done();
    });
  };
};

describe('gplaces api', function () {

  describe('nearby', function () {
    it('succeeds when valid arguments', ensureApiSearch({
        loc: {
            lat: 45.525,
            lon: -73.57
        },
        radius: 1000,
        category: "burger"
        },  14));
  });
});
