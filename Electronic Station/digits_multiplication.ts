#!/usr/bin/env checkio --domain=js run digits-multiplication

// You are given a positive number.    Your function should calculate the product of the digits excluding any zeroes.
// 
// For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
// 
// Input:A positive integer(number).
// 
// Output:The product of the digits as an integer(number).
// 
// Precondition:
// 0 < number < 106
// 
// 
// END_DESC

import assert from "assert";

function digitsMultip(data: number): number {
    return data.toString().split("").reduce((acc, cur) => {
        if (cur !== "0") {
            acc *= parseInt(cur);
        }
        return acc;
    }, 1);
}

console.log("Example:");
console.log(digitsMultip(123405));

// These "asserts" are used for self-checking
assert.strictEqual(digitsMultip(123405), 120);
assert.strictEqual(digitsMultip(999), 729);
assert.strictEqual(digitsMultip(1000), 1);
assert.strictEqual(digitsMultip(1111), 1);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");