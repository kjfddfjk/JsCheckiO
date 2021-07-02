#!/usr/bin/env checkio --domain=js run backward-string

// You should return a given string in reverse order.
// 
// Input:A string.
// 
// Output:A string.
// 
// 
// END_DESC

import assert from "assert";

function backwardString(value: string): string {
    // your code here
    let result : string = "";
    for(let each of value){
        result = each + result;
    }
    console.log(result);
    return result;
}

console.log('Example:');
console.log(backwardString('val'));

// These "asserts" are used for self-checking
assert.equal(backwardString('val'), 'lav');
assert.equal(backwardString(''), '');
assert.equal(backwardString('ohho'), 'ohho');
assert.equal(backwardString('123456789'), '987654321');

console.log("Coding complete? Click 'Check' to earn cool rewards!");