#!/usr/bin/env checkio --domain=js run split-pairs

// Split the string into pairs of two characters. If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').
// 
// Input:A string.
// 
// Output:An array of strings.
// 
// Precondition:0<=len(str)<=100
// 
// 
// END_DESC

import assert from "assert";

function splitPairs(text: string): string[] {
    // your code here
    if(text.length == 0)
        return [];
    if(text.length == 1)
        return [text+"_"];
    let result = [];
    for(let i: number = 0; i < text.length; i += 2) {
        if(i + 1 === text.length) {
            result[i / 2] = `${text[i]}_`;
        } else {
            result[i / 2] = `${text[i]+text[i+1]}`;
        }
    }
    // More elegant solution:
    const result2 = [];
    for (let i = 0; i < text.length; i += 2) {
        result2.push(text.slice(i, i + 2).padEnd(2, '_'));
    }

    console.log(result);
    console.log(result2);
    return result2;
}

console.log('Example:');
console.log(splitPairs('abcd'));

// These "asserts" are used for self-checking
assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert.deepEqual(splitPairs('a'), ['a_']);
assert.deepEqual(splitPairs(''), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");