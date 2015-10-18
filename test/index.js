var easedOsc = require('../');
require('should');


describe('when iterating between values', function () {
    var testOsc;

    beforeEach(function() {
        testOsc = null;
    });

    it('should also provide a linear osc', function () {
        testOsc = easedOsc({
            min: 10,
            max: 15,
            steps: 5
        });

        var vals = [10,11,12,13,14,15,14,13,12,11,10];

        var result = vals.map(testOsc)

        result.should.eql(vals);

    });
    it('should use an reference to an easing function if passed', function () {
        testOsc = easedOsc({
            min: 0,
            max: 10,
            steps: 5,
            easing: 'easeInOutQuad'
        });

        var vals = [0,0.8,3.2,6.799999999999999,9.200000000000001,10,9.200000000000001,6.799999999999999,3.2,0.8,0];
        var result = vals.map(testOsc);
        result.should.eql(vals);
    });
    it('should use a custom easing function if one is given', function () {
        testOsc= easedOsc({
            min: 10,
            max: 15,
            steps: 5,
            easing: function(t,b,c,d){
                return c * t / d + b; // linear easing
            }
        });

        var vals = [10,11,12,13,14,15,14,13,12,11,10];
        var result = vals.map(testOsc)
        result.should.eql(vals);

    });
});
