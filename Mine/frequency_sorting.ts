#!/usr/bin/env checkio --domain=js run frequency-sorting

// Sort the given sequence so that its elements should be grouped and those groups end up in the decreasing frequency order, that is, the number of times element appears in the sequence. If two elements have the same frequency, their groups should end up according to the natural...
// 
// The mission is locked because the "Mine" station is still closed for you. Open the station and get access to all of the missions on it.
// END_DESC

import assert from "assert";

function frequencySorting(numbers: number[]): number[] {
    // init a map, key is the number, value is the frequency
    var map = new Map<number, number>();
    numbers.forEach(element => {
        map.has(element) ? map.set(element, map.get(element)! + 1) : map.set(element, 1);
    });
    // sort the map by value
    const sortedMap = new Map([...map.entries()].sort((a, b) => {
        // if (b[1] - a[1] === 0) {
        //     return a[0] - b[0]; // sort by natural order if frequency is equal
        // }
        // return b[1] - a[1]; // sort by frequency
        // More elegant way to sort by frequency and then natural order
        return (b[1] - a[1] === 0) ? a[0] - b[0] : b[1] - a[1];
    }));
    const result: number[] = [];
    sortedMap.forEach((value, key) => {
        result.push(...Array(value).fill(key));
    });
    return result;
}

console.log("Example:");
console.log(JSON.stringify(frequencySorting([1, 2, 3, 4, 5])));

// These "asserts" are used for self-checking
assert.deepStrictEqual(frequencySorting([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(
    frequencySorting([3, 4, 11, 13, 11, 4, 4, 7, 3]),
    [4, 4, 4, 3, 3, 11, 11, 7, 13]
);
// Add more test case with asserts, need longer array



console.log("Coding complete? Click 'Check Solution' to earn rewards!");