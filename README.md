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
