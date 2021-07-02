#!/usr/bin/env checkio --domain=js run sort-array-by-element-frequency

// Sort the given Array so that its elements end up in the decreasing frequency order, that is, the number of times they appear in elements. If two elements have the same frequency, they should end up in the same order as the first appearance in the Array.
// 
// Input:Array
// 
// Output:Array
// 
// Precondition:elements can be ints or strings
// 
// The mission was taken from Python CCPS 109 Fall 2018. It's being taught for Ryerson Chang School of Continuing Education byIlkka Kokkarinen
// 
// 
// END_DESC

import assert from "assert";

function frequencySort(items: any[]): any[] {
    if(items.length <= 1) {
        return items;
    }
    let count = new Map();
    for (let each of items) {
        if (!count.has(each)) {
            console.log(`New ${each}`);
            count.set(each, 1);
        } else {
            count.set(each, count.get(each) + 1);
            console.log(`Add ${each} = ${count.get(each)}`);
        }
    }
    console.log('RESULT:\n');
    for (let [key, value] of count) {
        console.log(key + ' = ' + value)
    }
    let sorted = new Map([...count].sort((a, b) => {
        return b[1] - a[1];
    }));
    console.log('\nSORTED:\n');
    for (let [key, value] of sorted) {
        console.log(key + ' = ' + value)
    }
    let result = [];
    for (let [key, value] of sorted) {
        result = result.concat(Array(value).fill(key));
    }
    console.log(result);
    return result;
}

console.log('Example:');
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));

// These "asserts" are used for self-checking and not for an auto-testing
assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepEqual(frequencySort([]), []);
assert.deepEqual(frequencySort([1]), [1]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");