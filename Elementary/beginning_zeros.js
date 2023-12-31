#!/usr/bin/env checkio --domain=js run beginning-zeros

// You have a string that consist only of digits. You need to find how many zero digits ("0") are at the beginning of the given string.
// 
// Input:A string, that consist of digits.
// 
// Output:An Int.
// 
// Precondition:0-9
// 
// 
// END_DESC

import assert from "assert";

function beginningZeros(text: string): number {
    // your code here
    const matcher = /^0*/;
    let found = text.match(matcher)[0];
    // console.log(`${found}.length : ${typeof(found)} = ${found.length}`);
    return found.length;
}

console.log('Example:');
console.log(beginningZeros('100'));

// These "asserts" are used for self-checking
assert.equal(beginningZeros('100'), 0);
assert.equal(beginningZeros('001'), 2);
assert.equal(beginningZeros('100100'), 0);
assert.equal(beginningZeros('001001'), 2);
assert.equal(beginningZeros('012345679'), 1);
assert.equal(beginningZeros('0000'), 4);

console.log("Coding complete? Click 'Check' to earn cool rewards!");