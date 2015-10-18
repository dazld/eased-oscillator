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

Users can also specify a custom easing function if they wish:

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
