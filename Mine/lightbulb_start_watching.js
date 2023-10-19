#!/usr/bin/env checkio --domain=js run lightbulb-start-watching

// This is the second mission in the lightbulb series. I will try to make each following task slightly more complex.
// 
// You have already learned how to count the amount of time a light bulb has been on, or how long a room has been lit. Now let's add one more parameter - the counting start time.
// 
// This means that the light continues to turn on and off as before. But now, as a result of the function, I want not only to know how long there was light in the room, but how long the room was lit, starting from a certain moment.
// 
// One more argument is added –start_watching, and if it’s not passed, we count as in the previous version of the program for the entire period.
// 
// Input:Two arguments and only the first one is required. The first one is an array of Date objects and the second one is a Date object.
// 
// Output:A number of seconds as an integer.
// 
// Precondition:
// 
// The array of pressing the button is always sorted in ascending orderThe array of pressing the button has no repeated elementsThe amount of elements is always even (the light will eventually be off)The minimum possible date is 1970-01-01The maximum possible date is 9999-12-31
// END_DESC

import assert from "assert";

function sumLight(els: Date[], startWatching?: Date): number {
    // how long the light bulb has been turned on
    let seconds = 0;
    let e = 0;
    while(e < els.length) {
        if(startWatching.getTime() < els[e + 1].getTime()) {
            console.log(`S:${startWatching.getTime()}, E:${els[e].getTime()}, ${startWatching.getTime() > els[e].getTime()}`);
            console.log(`First End:${els[e + 1].getTime()} -  start:${(startWatching.getTime() > els[e].getTime()) ? startWatching.getTime() : els[e].getTime()} = ${els[1].getTime() - els[0].getTime()} / 1000`);
            seconds += (els[e + 1].getTime() - (startWatching.getTime() > els[e].getTime()) ? startWatching.getTime() : els[e].getTime()) / 1000;
            console.log(`Update:${seconds}`);
            break;
        }
        e += 2;
    } 
    for(; e < els.length; e += 2) {
        seconds += (els[e + 1].getTime() - els[e].getTime()) / 1000;
    }
    // your code here
    return seconds;
}

console.log('Example:');
console.log(sumLight([
        new Date(2015, 1, 12, 10, 0, 0),
        new Date(2015, 1, 12, 10, 0, 10),
    ],
    new Date(2015, 1, 12, 10, 0, 5)));

assert.equal(sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 0, 10),
],
new Date(2015, 1, 12, 10, 0, 5)), 5)
    
assert.equal(sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 0, 10),
], new Date(2015, 1, 12, 10, 0, 0)), 10)
    
assert.equal(sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 10, 10),
    new Date(2015, 1, 12, 11, 0, 0),
    new Date(2015, 1, 12, 11, 10, 10),
], new Date(2015, 1, 12, 11, 0, 0)), 610)
    
assert.equal(sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 10, 10),
    new Date(2015, 1, 12, 11, 0, 0),
    new Date(2015, 1, 12, 11, 10, 10),
], new Date(2015, 1, 12, 11, 0, 10)), 600)

assert.equal(sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 10, 10),
    new Date(2015, 1, 12, 11, 0, 0),
    new Date(2015, 1, 12, 11, 10, 10),
], new Date(2015, 1, 12, 10, 10, 0)), 620)

assert.equal(sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 10, 10),
    new Date(2015, 1, 12, 11, 0, 0),
    new Date(2015, 1, 12, 11, 10, 10),
    new Date(2015, 1, 12, 11, 10, 10),
    new Date(2015, 1, 12, 12, 10, 10),
], new Date(2015, 1, 12, 12, 10, 10)), 0)

assert.equal(sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 10, 10),
    new Date(2015, 1, 12, 11, 0, 0),
    new Date(2015, 1, 12, 11, 10, 10),
    new Date(2015, 1, 12, 11, 10, 10),
    new Date(2015, 1, 12, 12, 10, 10),
], new Date(2015, 1, 12, 12, 9, 10)), 60)

console.log("The second mission in series is done? Click 'Check' to earn cool rewards!");