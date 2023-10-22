#!/usr/bin/env checkio --domain=js run count-vowels

// This function should take a string as an input and return the count of vowels (a, e, i, o, u) in the string. The function should be case-insensitive.
// 
// 
// 
// Input:String(string).
// 
// Output:Integer(number).
// 
// Examples:
// 
// assert.strictEqual(countVowels("hello"), 2);
// assert.strictEqual(countVowels("openai"), 4);
// assert.strictEqual(countVowels("typescript"), 2);
// assert.strictEqual(countVowels("a"), 1);
// Preconditions:text ∈ string;length(text) >= 0.
// 
// 
// END_DESC

import assert from "assert";

const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(text: string): number {
    return /[aeiou]/gi.test(text) ? text.match(/[aeiou]/gi)!.length : 0;
}

console.log("Example:");
console.log(countVowels("Hello"));

// These "asserts" are used for self-checking
assert.strictEqual(countVowels("hello"), 2);
assert.strictEqual(countVowels("openai"), 4);
assert.strictEqual(countVowels("typescript"), 2);
assert.strictEqual(countVowels("a"), 1);
assert.strictEqual(countVowels("b"), 0);
assert.strictEqual(countVowels("aeiou"), 5);
assert.strictEqual(countVowels("AEIOU"), 5);
assert.strictEqual(countVowels("The quick brown fox"), 5);
assert.strictEqual(countVowels("Jumps over the lazy dog"), 6);
assert.strictEqual(countVowels(""), 0);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");