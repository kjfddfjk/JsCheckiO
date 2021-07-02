#!/usr/bin/env checkio --domain=js run between-markers-simplified

// You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.
// 
// This is a simplified version of theBetween Markersmission.
// 
// The initial and final markers are always different.The initial and final markers are always 1 char size.The initial and final markers always exist in a string and go one after another.Input:Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
// 
// Output:A string.
// 
// Precondition:There can't be more than one final and one initial markers.
// 
// 
// END_DESC

import assert from "assert";

function betweenMarkers(line: string, left: string, right: string): string {
    // your code here
    let begin = line.indexOf(left);
    let end = line.indexOf(right);
    if (begin < end) {
        return line.slice(begin + 1, end);
    }
    return "";
    // if(begin > -1 && end > -1) {
    // }
    // if(begin > -1){
    //     return line.slice(begin + 1);
    // }
    // if(end > -1) {
    //     return 
    // }
    // return '';
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));

// These "asserts" are used for self-checking
assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert.equal(betweenMarkers('What is ><', '>', '<'), '');
assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');

console.log("Coding complete? Click 'Check' to earn cool rewards!");