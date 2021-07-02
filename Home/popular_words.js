#!/usr/bin/env checkio --domain=js run popular-words

// In this mission your task is to determine the popularity of certain words in the text.
// 
// At the input of your function are given 2 arguments: the text and the array of words the popularity of which you need to determine.
// 
// When solving this task pay attention to the following points:
// 
// The words should be sought in all registers. This means that if you need to find a word "one" then words like "one", "One", "oNe", "ONE" etc. will do.The search words are always indicated in the lowercase.If the word wasn’t found even once, it has to be returned in the dictionary with  0 (zero) value.Input:The text and the search words array.
// 
// Output:The dictionary where the search words are the keys and values are the number of times when those words are occurring in a given text.
// 
// Precondition:
// The input text will consists of English letters in uppercase and lowercase and whitespaces.
// 
// 
// END_DESC

"use strict";

function popularWords(text: string, words: string[]) {
    // your code here
    let splited = text.split(/\s+/);
    let result = {};
    for (let each of words) {
        result[each] = 0;
    }
    for (let each of splited) {
        let current = each.toLowerCase();
        if (current in result) {
            result[current] += 1;
        }
    }
    console.log("result " + result);
    return result;
    // console.log(`splited[0] = ${splited[0]}, type = ${typeof(splited[0])}`);
    // let result = new Map();
    // for (let each of words) {
    //     result.set(each, 0);
    // }
    // console.log("data")
    // for (const [k, v] of result.entries()) {
    //     console.log("key: " + k, v);
    // }

    // for (let each of splited) {
    //     // console.log(`each: '${each.toLowerCase()}', type: "${typeof(each.toLowerCase())}"`);
    //     if (result.has(each.toLowerCase())) {
    //         result.set(each.toLowerCase(), result.get(each.toLowerCase()) + 1);
    //     }
    // }
    // console.log(`result = ${result}, type = ${typeof(result)}`);
    // console.log("values: " + result.values());
    // return [...result.values()];
}


console.log('Example:')
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']))