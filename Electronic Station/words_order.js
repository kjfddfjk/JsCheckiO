#!/usr/bin/env checkio --domain=js run words-order

// You have a text and a list of words. You need to check if the words in a list appear in the same order as in the given text.
// 
// Cases you should expect while solving this challenge:
// 
// a word from the list is not in the text - your function should return False;any word can appear more than once in a text - use only the first one;two words in the given list are the same - your function should return False;the condition is case sensitive, which means 'hi' and 'Hi' are two different words;the text includes only English letters and spaces.Input:Two arguments. The first one is a given text, the second is a list of words.
// 
// Output:A bool.
// 
// 
// END_DESC

import assert from "assert";

function wordsOrder(text: string, words: string[]): boolean {
    // your code here
    let splited = text.split(" ");
    console.log(`Text: ${text}, Words: ${words}`);
    // for(let i = 0; i < words.length - 1; i++) {
    //     if(words.includes(words[i], i + 1)) {
    //         console.log(`Duplicate word: ${words[i]}`)
    //         return false;
    //     } else {
    //         console.log(`Unique ${words[i]} in ${words.slice(i + 1)}`)
    //     }
    // }
    let indexes: Number[] = [];
    for(let word of words) {
        let temp = splited.indexOf(word);
        if(temp == -1) {
            console.log(`Not found: ${word}`)
            return false;
        }
        console.log(`Push index: ${temp}`)
        indexes.push(temp);
    }
    console.log(`Indexes: ${indexes}`);
    for(let i = 0; i < indexes.length - 1; i++) {
        if(indexes[i] < indexes[i + 1])
            continue;
        console.log(`Wrong order: ${i}, indexes[i]: ${indexes[i]}`)
        return false;
    }
    return (indexes[indexes.length - 1] != -1);
}

console.log('Example:');
console.log(wordsOrder('hi world im here', ['world', 'here']));

// These "asserts" are used for self-checking
assert.equal(wordsOrder('hi world im here', ['world', 'here']), true);
assert.equal(wordsOrder('hi world im here', ['here', 'world']), false);
assert.equal(wordsOrder('hi world im here', ['world']), true);
assert.equal(wordsOrder('hi world im here',
 ['world', 'here', 'hi']), false);
assert.equal(wordsOrder('hi world im here',
 ['world', 'im', 'here']), true);
assert.equal(wordsOrder('hi world im here',
 ['world', 'hi', 'here']), false);
assert.equal(wordsOrder('hi world im here', ['world', 'world']), false);
assert.equal(wordsOrder('hi world im here',
 ['country', 'world']), false);
assert.equal(wordsOrder('hi world im here', ['wo', 'rld']), false);
assert.equal(wordsOrder('', ['world', 'here']), false);
assert.equal(wordsOrder('hi world world im here',
 ['world', 'im', 'here', 'world']), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");