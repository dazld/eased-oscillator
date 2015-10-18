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

        testOsc().should.eql(0);
        testOsc().should.eql(0.8);
        testOsc().should.eql(3.2);
        testOsc().should.eql(6.799999999999999);
        testOsc().should.eql(9.200000000000001);
        testOsc().should.eql(10);
        testOsc().should.eql(9.200000000000001);
        testOsc().should.eql(6.799999999999999);
        testOsc().should.eql(3.2);
        testOsc().should.eql(0.8);
        testOsc().should.eql(0);
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

        testOsc().should.eql(10);
        testOsc().should.eql(11);
        testOsc().should.eql(12);
        testOsc().should.eql(13);
        testOsc().should.eql(14);
        testOsc().should.eql(15);
        testOsc().should.eql(14);
        testOsc().should.eql(13);
        testOsc().should.eql(12);
        testOsc().should.eql(11);
        testOsc().should.eql(10);
        testOsc().should.eql(11);

    });
});
