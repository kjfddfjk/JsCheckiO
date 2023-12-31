#!/usr/bin/env checkio --domain=js run max-digit

// You have a number and you need to determine which digit in this number is the biggest.
// 
// Input:A positive int.
// 
// Output:An Int (0-9).
// 
// 
// END_DESC

import assert from "assert";

function maxDigit(value: number): number {
    let max = "0";
    for (let current of value.toString()) {
        if (current > max) {
            max = current;
            // console.log(`max = ${max}; current=${current}`)
        }
    }
    return parseInt(max);
}

console.log('Example:');
console.log(maxDigit(0));

// These "asserts" are used for self-checking
assert.equal(maxDigit(0), 0);
assert.equal(maxDigit(52), 5);
assert.equal(maxDigit(634), 6);
assert.equal(maxDigit(1), 1);
assert.equal(maxDigit(10000), 1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");