#!/usr/bin/env checkio --domain=js run verify-anagrams

// An anagram is a type of word play,    the result of rearranging the letters of a word or phrase to produce a new word or phrase,    using all the original letters exactly once.    Two words are anagrams to each other if we can get one from another by rearranging the letters.    Anagrams are case-insensitive and don't take account whitespaces.    For example: "Gram...
// 
// The mission is locked for your account. You can become an Awesome User and unlock all the missions on CheckiO or you can use quest points (10 QT) to unlock the mission
// END_DESC

import assert from "assert";

function verifyAnagrams(line1: string, line2: string): boolean {
    // your code here
    let sort1 = line1.toLowerCase().split("").filter(function (e){return /[A-Za-z]/.test(e)}).sort().join("");
    let sort2 = line2.toLowerCase().split("").filter(function (e){return /[A-Za-z]/.test(e)}).sort().join("");
    // console.log(`sort1: ${sort1}, sort2: ${sort2}`);
    return sort1 === sort2;;
}

console.log('Example:');
console.log(verifyAnagrams('Programming', 'Gram Ring Mop'));

// These "asserts" are used for self-checking
assert.equal(verifyAnagrams('Programming', 'Gram Ring Mop'), true);
assert.equal(verifyAnagrams('Hello', 'Ole Oh'), false);
assert.equal(verifyAnagrams('Kyoto', 'Tokyo'), true);

console.log("Coding complete? Click 'Check' to earn cool rewards!");