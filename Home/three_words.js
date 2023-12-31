#!/usr/bin/env checkio --domain=js run three-words

// Let's teach the Robots to distinguish words and numbers.
// 
// You are given a string with words and numbers separated by whitespaces (one space).    The words contains only letters.    You should check if the string contains three words insuccession.    For example, the string "start 5one two three7 end" contains three words in succession.
// 
// Input:A string with words.
// 
// Output:The answer as a boolean.
// 
// Precondition:The input contains words and/or numbers. There are no mixed words (letters and digits combined).
// 0 < len(words) < 100
// 
// 
// END_DESC

import assert from "assert";

function threeWords(text: string): boolean {
    let splited = text.split(/\s+/);
    let isWord = /^[A-Za-z]+$/;
    for (let i = 0; i < splited.length - 2; i++) {
        if (splited[i].match(isWord) && splited[i + 1].match(isWord) && splited[i + 2].match(isWord)) {
            console.log(splited[i], splited[i + 1], splited[i + 2]);
            return true;
        }
    }
    return false;
}

console.log('Example:')
console.log(threeWords("Hello World hello"))

assert.equal(threeWords("Hello World hello"), true);
assert.equal(threeWords("He is 123 man"), false);
assert.equal(threeWords("1 2 3 4"), false);
assert.equal(threeWords("bla bla bla bla"), true);
assert.equal(threeWords("Hi"), false);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");