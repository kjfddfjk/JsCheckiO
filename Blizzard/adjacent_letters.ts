#!/usr/bin/env checkio --domain=js run adjacent-letters

// You are given a string, where all letters are of same case. This string could    include adjacent letters - two the same letters together ("aa", "bb" etc).    Your task in this mission is to remove both these letters. If after removing    one pair a new appears - remove it as well! Each such pair should be removed    from string until no one remains. Good luck!
// 
// Input:String(string).
// 
// Output:String(string).
// 
// Examples:
// 
// assert.strictEqual(adjacentLetters("adjacent_letters"), "adjacent_lrs");
// assert.strictEqual(adjacentLetters(""), "");
// assert.strictEqual(adjacentLetters("aaa"), "a");
// assert.strictEqual(adjacentLetters("ABBA"), "");
// 
// END_DESC

import assert from "assert";

function adjacentLetters(line: string): string {
    const regex = /(\w)\1/g;
    while (regex.test(line)) {
      line = line.replace(regex, '');
    }
    return line;
}

console.log("Example:");
console.log(adjacentLetters("abbaca"));

// These "asserts" are used for self-checking
assert.strictEqual(adjacentLetters("adjacent_letters"), "adjacent_lrs");
assert.strictEqual(adjacentLetters(""), "");
assert.strictEqual(adjacentLetters("aaa"), "a");
assert.strictEqual(adjacentLetters("ABBA"), "");

console.log("Coding complete? Click 'Check Solution' to earn rewards!");