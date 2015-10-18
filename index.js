var easing = require('easing-js');
var osk = require('osk');

module.exports = function(options) {

    options = options || {
        min: 10,
        max: 20,
        steps: 10
    };

    var delta = Math.abs(options.max) - Math.abs(options.min);

    var osci = osk({
        min: 0,
        max: options.steps
    });

    var easeFn = typeof options.easing === 'function' && options.easing.length === 4 ? options.easing :
                            typeof options.easing === 'string' && easing.hasOwnProperty(options.easing) ? easing[options.easing] : easing.linear;

    return function() {
        var current = osci();
        return easeFn(current, options.min, delta, options.steps);
    }
}
