
[![Build Status](https://travis-ci.org/dazld/eased-oscillator.svg?branch=master)](https://travis-ci.org/dazld/eased-oscillator)

# Eased Oscillator

Produces a function that oscillates between two values with an easing function

## Usage

```js

var osciQuad = easedOsc({
    min: 10,
    max: 20,
    steps: 2,
    easing: 'linear'
});

console.log(osciQuad()); // 10
// each time the function is called, the step value oscillates between the min and max
console.log(osciQuad()); // 15
console.log(osciQuad()); // 20
console.log(osciQuad()); // 15
console.log(osciQuad()); // 10
console.log(osciQuad()); // 15
// etc..

```

You can also specify a custom function, that takes the standard four parameters (time/step, initial value, delta, number of steps) - also written as `t,b,c,d`:

```js

var linearOsc = easedOsc({
    min: 0,
    max: 5,
    steps: 5,
    easing: function(t,b,c,d){
        return c * t / d + b;
    }
});

console.log(linearOsc()); // 0
console.log(linearOsc()); // 1
console.log(linearOsc()); // 2
// etc..


```

## Available easings

All of the easing functions come from rdy's `easing-js`package, and can be seen here: https://github.com/rdy/easing-js/blob/master/src/easing.js
