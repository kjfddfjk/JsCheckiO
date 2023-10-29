#!/usr/bin/env checkio --domain=js run zigzag-array

// Your function should create anarrayofarrays, that represents a two-dimensional grid with the given number of rows and cols.
// 
// This grid should contain integers(number)fromstarttostart + rows * cols - 1in ascending order, but the elements of every odd-index row have to be listed in descending order, so that when read in ascending order, the numbers zigzag through the two-dimensional grid.
// 
// 
// 
// Input:Two integers(number)- rows and columns. One optional integer(number)- start.
// 
// Output:Arrayofarrays.
// 
// The mission was taken from Python CCPS 109 Fall 2018. It is taught for Ryerson Chang School of Continuing Education byIlkka Kokkarinen
// 
// 
// END_DESC

import assert from "assert";

function createZigzag(
    rows: number,
    cols: number,
    start: number = 1
): number[][] {
    return Array.from({ length: rows }, (_, i) =>
        Array.from(
            { length: cols },
            (_, j) =>
                start +
                (i % 2 === 0 ? i * cols + j : (i + 1) * cols - j - 1)
        )   
    );
    
}

console.log("Example:");
console.log(JSON.stringify(createZigzag(3, 5)));

// These "asserts" are used for self-checking
assert.deepStrictEqual(createZigzag(3, 5), [
    [1, 2, 3, 4, 5],
    [10, 9, 8, 7, 6],
    [11, 12, 13, 14, 15],
]);
assert.deepStrictEqual(createZigzag(5, 1), [[1], [2], [3], [4], [5]]);
assert.deepStrictEqual(createZigzag(3, 3, 5), [
    [5, 6, 7],
    [10, 9, 8],
    [11, 12, 13],
]);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");