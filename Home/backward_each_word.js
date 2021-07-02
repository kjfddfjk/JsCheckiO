#!/usr/bin/env checkio --domain=js run backward-each-word

// In a given string you should reverse every word, but the words should stay in their places.
// 
// Input:A string.
// 
// Output:A string.
// 
// Precondition:The line consists only from alphabetical symbols and spaces.
// 
// 
// END_DESC

import assert from "assert";

function backwardStringByWord(text: string): string {
    // your code here
    let splited = text.split(/\s/);
    let result = "";
    for (let each of splited) {
        if (result.length > 0) {
            result += " ";
        }
        if (each.length <= 1) {
            result += each;
            continue;
        }
        // console.log(`each, ${each}, ${typeof(each)}; ${each.reverse()}, ${typeof(each.reverse())}`)
        result += each.split('').reverse().join('');
    }
    console.log(`result = ${result}`);
    return result;
}

console.log('Example:');
console.log(backwardStringByWord(''));

// These "asserts" are used for self-checking
assert.equal(backwardStringByWord(''), '');
assert.equal(backwardStringByWord('world'), 'dlrow');
assert.equal(backwardStringByWord('hello world'), 'olleh dlrow');
assert.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
assert.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');

console.log("Coding complete? Click 'Check' to earn cool rewards!");