#!/usr/bin/env checkio --domain=js run convert-to-title-case

// Your function should take a string as an input and convert all the first letters of the words in the string to uppercase, making the string a title case (other letters must be in lowercase).
// 
// 
// 
// Input:Original string(string).
// 
// Output:Converted string(string).
// 
// Examples:
// 
// assert.strictEqual(toTitleCase("hello world"), "Hello World");
// assert.strictEqual(toTitleCase("openai gpt-4"), "Openai Gpt-4");
// assert.strictEqual(toTitleCase("this is a title"), "This Is A Title");
// assert.strictEqual(toTitleCase("THE QUICK BROWN FOX"), "The Quick Brown Fox");
// Preconditions:sentence ∈ string;length(sentence) >= 0.
// 
// 
// END_DESC

import assert from "assert";

function toTitleCase(sentence: string): string {
    // your code here
    return "";
}

console.log("Example:");
console.log(toTitleCase("hello world"));

// These "asserts" are used for self-checking
assert.strictEqual(toTitleCase("hello world"), "Hello World");
assert.strictEqual(toTitleCase("openai gpt-4"), "Openai Gpt-4");
assert.strictEqual(toTitleCase("this is a title"), "This Is A Title");
assert.strictEqual(toTitleCase("THE QUICK BROWN FOX"), "The Quick Brown Fox");
assert.strictEqual(
    toTitleCase("JUMPs ovER a LAZy dog"),
    "Jumps Over A Lazy Dog"
);
assert.strictEqual(toTitleCase("typescript is great"), "Typescript Is Great");
assert.strictEqual(toTitleCase("the answer is 42"), "The Answer Is 42");
assert.strictEqual(toTitleCase("to be or not to be"), "To Be Or Not To Be");
assert.strictEqual(toTitleCase("that is the question"), "That Is The Question");
assert.strictEqual(toTitleCase(""), "");

console.log("Coding complete? Click 'Check Solution' to earn rewards!");