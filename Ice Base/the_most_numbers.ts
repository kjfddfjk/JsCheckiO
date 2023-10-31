#!/usr/bin/env checkio --domain=js run the-most-numbers

// Let's work with numbers!
// 
// You are given an array of numbers (floats). You should find the difference between the maximum and minimum element.    Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function    should    return 0.
// 
// Floating-point numbers are represented in computer hardware as base 2 (binary) fractions.    So we should check the result with ±0.001 precision.
// Think about how to work with    an arbitrary number of arguments.
// 
// Input:An arbitrary number of arguments as numbers (int, float).
// 
// Output:The difference between maximum and minimum as a number (int, float).
// 
// Precondition:0 ≤ len(args) ≤ 20
// all(-100 < x < 100 for x in args)
// all(isinstance(x, (int, float)) for x in args)
// 
// 
// END_DESC

import assert from "assert";

function mostNumbers(...args: number[]): number {
    return args.length ? parseFloat((Math.max(...args) - Math.min(...args)).toFixed(3)) : 0;
}

console.log("Example:");
// console.log(mostNumbers(1, 2, 3));

// These "asserts" are used for self-checking
// assert.equal(mostNumbers(1, 2, 3), 2);
// assert.equal(mostNumbers(5, -5), 10);
assert.equal(mostNumbers(10.2, -2.2, 0, 1.1, 0.5), 12.4);
assert.equal(mostNumbers(), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");