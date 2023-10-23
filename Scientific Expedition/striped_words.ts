#!/usr/bin/env checkio --domain=js run striped-words

// Our robots are always working to improve their linguistic skills.    For this mission, they research the Latin alphabet and its applications.
// 
// The alphabet contains both vowel and consonant letters (yes, we divide the letters).
// Vowels --A E I O U Y
// Consonants --B C D F G H J K L M N P Q R S T V W X Z
// 
// You are given a block of text with different words.     These words are separated by white spaces...
// 
// The mission is locked for your account. You can become an Awesome User and unlock all the missions on CheckiO or you can use quest points (10 QT) to unlock the mission
// END_DESC

import assert from "assert";

function stripedWords(line: string): number {
    line = line.toUpperCase();
    let words = line.split(/[\s,.!?]+/);
    let stripedWordsCount = 0;
    for (let word of words) {
        if (word.length < 2) {
            continue;
        }
        if(!/\d/i.test(word) && /[aeiouy]/i.test(word) && !/[aeiouy]{2,}/i.test(word)
            && /[BCDFGHJKLMNPQRSTVWXZ]/i.test(word) && !/[BCDFGHJKLMNPQRSTVWXZ]{2,}/i.test(word)) {
            stripedWordsCount++;
        }
    }
    return stripedWordsCount;
}

// console.log("Example:");
// console.log(stripedWords("My name is ,,,"));

// These "asserts" are used for self-checking
// assert.strictEqual(stripedWords("My name is ..."), 3);
// assert.strictEqual(stripedWords("Hello world"), 0);
// assert.strictEqual(stripedWords("A quantity of striped words."), 1);
assert.strictEqual(stripedWords("Dog,cat,mouse,bird.Human."), 3);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");