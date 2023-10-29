#!/usr/bin/env checkio --domain=js run compress-list

// A given sequence should be "compressed" in a way so, instead of two (or more) equal elements, staying one after another, there should be only one in the result sequence.
// 
// 
// 
// Input:Array.
// 
// Output:"Compressed"array.
// 
// 
// END_DESC

import assert from "assert";

function compress(items: number[]): number[] {
    return items.filter((item, index, array) => !index || item !== array[index - 1]);
}

console.log("Example:");
console.log(JSON.stringify(compress([5, 5, 5, 4, 5, 6, 6, 5, 5, 7, 8, 0, 0])));

// These "asserts" are used for self-checking
assert.deepStrictEqual(
    compress([5, 5, 5, 4, 5, 6, 6, 5, 5, 7, 8, 0, 0]),
    [5, 4, 5, 6, 5, 7, 8, 0]
);
assert.deepStrictEqual(compress([1, 1, 1, 1, 2, 2, 2, 1, 1, 1]), [1, 2, 1]);
assert.deepStrictEqual(compress([7, 7]), [7]);
assert.deepStrictEqual(compress([]), []);
assert.deepStrictEqual(compress([1, 2, 3, 4]), [1, 2, 3, 4]);
assert.deepStrictEqual(compress([9, 9, 9, 9, 9, 9, 9]), [9]);
assert.deepStrictEqual(
    compress([9, 9, 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9]),
    [9, 0, 9]
);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");