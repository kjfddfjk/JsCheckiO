#!/usr/bin/env checkio --domain=js run sum-of-digits

// The task in this mission is as follows:
// 
// You are given an integer. If it consists of one digit, simply return its value.     If it consists of two or more digits - add them until the number contains only one digit and return it.
// 
// 
// 
// Input:Integer(number).
// 
// Output:Integer(number).
// 
// 
// END_DESC

import assert from "assert";

function sumDigits(num: number): number {
    let result = num;
    while (result > 9) {
        result = result.toString().split('').reduce(
            (accumerate, current) => accumerate + parseInt(current), 0);
    }
    return result;
}

console.log("Example:");
console.log(sumDigits(38));

// These "asserts" are used for self-checking
assert.strictEqual(sumDigits(38), 2);
assert.strictEqual(sumDigits(0), 0);
assert.strictEqual(sumDigits(10), 1);
assert.strictEqual(sumDigits(132), 6);
assert.strictEqual(sumDigits(232), 7);
assert.strictEqual(sumDigits(811), 1);
assert.strictEqual(sumDigits(702), 9);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");