var facebook = require("../api/facebook.js");
var expect = require('chai').expect;

function ensureApiSearch(params, expectedResultsLength) {
  return function (done) {
  
    facebook.search(params).then(actualResults => {
      console.log(actualResults);
      if(!expectedResultsLength) {
        should(actualResults).be.null;
      } else {
        expect(actualResults.length).to.be.above(expectedResultsLength);
      }
      done();
    });
  };
};

describe('facebook api', function () {

  describe('nearby', function () {
    it('succeeds when valid arguments', ensureApiSearch({
        loc: {
            lat: 45.525,
            lon: -73.57
        },
        radius: 1000,
        category: "burger"}
        ,  1));
  });
});
