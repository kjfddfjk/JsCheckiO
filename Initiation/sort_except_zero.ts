#!/usr/bin/env checkio --domain=js run sort-except-zero

// Sort the integers in sequence in sequence. But the position of zeros should not be changed.
// 
// Input:Arrayof integers(number).
// 
// 
// 
// Output:Arrayof integers(number).
// 
// Precondition:
// 
// All numbers are non-negative.
// 
// 
// END_DESC

import assert from "assert";

function exceptZero(items: number[]): number[] {
    const zeroIndices = items.map((el, i) => el === 0 ? i : -1).filter(index => index !== -1);
    const sortedItems = items.filter(el => el !== 0).sort((a, b) => a - b);
    zeroIndices.forEach((index, i) => sortedItems.splice(index, 0, 0));
    return sortedItems;
}

console.log("Example:");
console.log(JSON.stringify(exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7])));

// These "asserts" are used for self-checking
assert.deepStrictEqual(
    exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7]),
    [1, 3, 0, 0, 4, 4, 5, 0, 7]
);
assert.deepStrictEqual(
    exceptZero([0, 2, 3, 1, 0, 4, 5]),
    [0, 1, 2, 3, 0, 4, 5]
);
assert.deepStrictEqual(exceptZero([0, 0, 0, 1, 0]), [0, 0, 0, 1, 0]);
assert.deepStrictEqual(exceptZero([4, 5, 3, 1, 1]), [1, 1, 3, 4, 5]);
assert.deepStrictEqual(exceptZero([0, 0]), [0, 0]);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");