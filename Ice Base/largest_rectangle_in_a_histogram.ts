#!/usr/bin/env checkio --domain=js run largest-rectangle-in-a-histogram

// "Your power to choose can never be taken from you.
// It can be neglected and it can be ignored.
// But if used, it can make all the difference."
// ― Steve Goodier
// 
// You have a histogram. Try to find the size of the biggest rectangle you can build out of the histogram bars.
// 
// Input:An array of all rectangles’ heights on the histogram.
// 
// Output:Area of the biggest rectangle.
// 
// Example:
// 
// largestHistogram([5]) == 5
// largestHistogram([5, 3]) == 6
// largestHistogram([1, 1, 4, 1]) == 4
// largestHistogram([1, 1, 3, 1]) == 4
// largestHistogram([2, 1, 4, 5, 1, 3, 3]) == 8
// How it is used:There is no way the solution you come up with will be of any use in real life. So, just have fun here!
// 
// Precondition:
// 0 < len(data) < 1000
// 
// 
// 
// 
// 
// END_DESC

import assert from "assert";

function largestHistogram(values: number[]): number {
    if(!values) {
        return 0;
    }
    let max = values[0];
    for(let i = 0; i < values.length; i++) {
        let iMax = values[i];
        for(let j = i + 2; j <= values.length; j++) {
            iMax = Math.max(iMax, Math.min(...values.slice(i, j)) * (j - i));
        }
        max = Math.max(max, iMax);
    }
    return max;
}

console.log("Example:");
// console.log(largestHistogram([5]));

// These "asserts" are used for self-checking
// assert.equal(largestHistogram([5]), 5);
// assert.equal(largestHistogram([5, 3]), 6);
// assert.equal(largestHistogram([1, 1, 4, 1]), 4);
// assert.equal(largestHistogram([1, 1, 3, 1]), 4);
assert.equal(largestHistogram([2, 1, 4, 5, 1, 3, 3]), 8);

console.log("Coding complete? Click 'Check' to earn cool rewards!");