#!/usr/bin/env checkio --domain=js run changing-direction-2

// You are given a sequence of integers. Your task in this mission is to find, how many times the sorting direction was changed in the given sequence. If the elements are equal - the previous sorting direction remains the same, if the sequence starts from the same elements - look for the next different to determine the sorting direction.
// 
// Let's look at the scheme:
// 
// 
// 
// There are three sorting directions:on the chunk1, 2, 2- up (increasing);on the chunk2, 1- down (decreasing);and on the chunk1, 2, 2- up again.So, you have two points of changing the sorting direction: #1 - from up to down, and #2 - from down to up. That's the result your function should return.
// 
// Input:Arrayof integers(number).
// 
// Output:An integer(number).
// 
// Preconditions:the sequence is non-empty;the elements are positive integers.
// 
// 
// END_DESC

import assert from "assert";
import { dir } from "console";
import { get } from "http";

function changingDirection(elements: number[]): number {
    let directions = new Array();
    directions.push(getDirection(elements[0], elements[1]));
    for(let i = 1; i < elements.length; i++) {
        let direction = getDirection(elements[i-1], elements[i]);
        if(0 == direction) {
            continue;
        }
        if(direction != directions[directions.length - 1]) {
            if(directions[directions.length - 1] == 0) {
                directions[directions.length - 1] = direction;
            } else {
                directions.push(direction);
            }
        }
    }
    return directions.length - 1;
}

function getDirection(a: number, b: number): number {
    if(a == b)
        return 0;
    return a > b ? -1 : 1;
}

assert.strictEqual(changingDirection([1, 2, 3, 4, 5]), 0);
assert.strictEqual(changingDirection([1, 2, 3, 2, 1]), 1);
assert.strictEqual(changingDirection([6,6,6,4,1,2,5,9,7,8,5,9,4,2,6]), 7);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");