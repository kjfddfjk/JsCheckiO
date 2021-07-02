#!/usr/bin/env checkio --domain=js run end-zeros

// Try to find out how many zeros a given number has at the end.
// 
// Input:A positive Int
// 
// Output:An Int.
// 
// 
// END_DESC

import assert from "assert";

function endZeros(value: number): number {
    // your code here
    const matcher = /0*$/;
    let found = value.toString().match(matcher)[0];
    return found.length;
}

console.log('Example:');
console.log(endZeros(0));

// These "asserts" are used for self-checking
assert.equal(endZeros(0), 1);
assert.equal(endZeros(1), 0);
assert.equal(endZeros(10), 1);
assert.equal(endZeros(101), 0);
assert.equal(endZeros(245), 0);
assert.equal(endZeros(100100), 2);

console.log("Coding complete? Click 'Check' to earn cool rewards!");