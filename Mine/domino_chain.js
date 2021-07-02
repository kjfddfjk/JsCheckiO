#!/usr/bin/env checkio --domain=js run domino-chain

// You have a Domino box. Domino tiles contain two numbers from 0 (empty) to 6. Tiles are unordered and 1-6 is the same as 6-1. The double-six set contains 28 unique tiles - all combinations of number pairs.
// 
// Several tiles fell out of the box. You should try to line up a chain from these tiles, compiling them to each other's suitable sides (sides with the same numbers). Thus, you can get a continuous chain of tiles. In some cases, such a chain will not be the only one.
// 
// For example, you've ended up these tiles:
// 1-5, 2-5, 3-5, 4-5, 3-4
// So, with them you can build two complete chains:
// 1-5, 5-3, 3-4, 4-5, 5-2
// 1-5, 5-4, 4-3, 3-5, 5-2
// 
// 
// Your goal in this missionis to count how many complete chains you can make using all of the given dominoes.
// 
// Note.Chains must be unique. An inverted chain is not considered as unique: "1-2, 2-3, 3-4, 4-5" and "5-4, 4-3, 3-2, 2-1" are the same chain.
// 
// Input:String with the description of the domino tiles. Like this one: "5-4, 4-3, 3-2, 2-1".
// 
// Output:Integer. The maximum number of complete chains that you can build using all of the given tiles.
// 
// Precondition:5<= len(given_tiles)<= 17
// 
// 
// END_DESC

import assert from "assert";

let length: number = 0;
let pairs: string[]; // Store each pair, e.g. '0-2'
let order: number[]; // Get the order of pair, value start from 1, 0 reserve as undefined. e.g. order[2] = 1, means pairs[2] is the first of chain
let positives: boolean[]; // Use to check pair is reverse or not
let solutions: string[]; // Store each solution, e.g. "5-4, 4-3, 3-2, 2-1" as a single solution
let firstOrderRecord; // No any order been mark at beginning, also need to list all possiblity, thus need object to store what which place where firstOrder point to.

function getSolutionIndex(chain: string): number {
    if (solutions.length == 0) {
        return -1
    }
    let stringifyReverse = chain.split("").reverse().join("").replaceAll(" ,", ", ");
    for (let i = 0; i < solutions.length; i++) {
        // console.log(`Compare: solutions[${i}]: [${solutions[i]}], chain: [${chain}] => ${solutions[i] === chain}, stringifyReverse:[${stringifyReverse}] => ${solutions[i] == stringifyReverse}`);
        if (solutions[i] === chain || solutions[i] == stringifyReverse) {
            return i;
        }
    }
    return -1;
}

function initialize() {
    firstOrderRecord = {
        current: 0,
        positive: true
    }
    solutions = new Array();
}

function setFirstOrder(): number {
    if (firstOrderRecord.current == length) {
        return -1;
    }
    order = Array(length).fill(0);
    positives = Array(length).fill(true);
    let temp = firstOrderRecord.current;
    order[temp] = 1;
    positives[temp] = firstOrderRecord.positive;
    if (firstOrderRecord.positive) {
        firstOrderRecord.positive = false;
    } else {
        firstOrderRecord.current += 1;
        firstOrderRecord.positive = true;
    }
    return temp;
}

function fitNext(index: number, nextMatch: number, startFrom: number, startPositive: boolean) {
    let test: number;
    let fitPair: string = pairs[index];
    let positive: boolean = positives[index];
    let fitChar: string = fitPair.charAt(positive ? 2 : 0);
    // console.log(`fitNext, index:'${index}', nextMatch:'${nextMatch}', startFrom:'${startFrom}', startPositive: ${startPositive}, fitPair:"${fitPair}", positive:'${positive}', fitChar:'${fitChar}'`);
    // not the first time for parent function doChain() calling this fitNext
    if (!startPositive) {
        startFrom++;
    }
    // console.log(`for(let i = ${startFrom}; i < ${pairs.length}; i++)`);
    for (let i = startFrom; i < pairs.length; i++) {
        if (order[i] != 0) {
            // console.log(`continue loop, i: ${i}, order[${i}]: ${order[i]}`);
            continue;
        }
        test = isMatch(fitChar, pairs[i]);
        // console.log(`matching loop, i: ${i}, order[${i}]: ${order[i]}, isMatch=${test}`);
        if (test == 0) {
            continue;
        }
        order[i] = nextMatch;
        positives[i] = test > 0 ? true : false;
        // console.log(`fitNext match, i: '${i}', order: ${order[i]}, positives: ${positives[i]}`);
        return i;
    }
    return -1;
}

function isMatch(fitChar: string, next: string): number {
    switch (fitChar) {
        case next[0]:
            return 1;
        case next[2]:
            return -1;
        default:
            return 0;
    }
}

function dominoChain(line: string): number {
    // console.log(`\nSolving [${line}]`);
    pairs = line.split(", ");
    length = pairs.length;
    initialize();
    while (true) {
        let next = setFirstOrder();
        if (next == -1) {
            break;
        }
        doChain(next, 2);
    }
    // console.log(`\tDone, total length: ${solutions.length}`);
    // for (let i = 0; i < solutions.length; i++) {
    //     console.log(`\tsolution[${i}]: [${solutions[i]}]`);
    // }
    return solutions.length;
}

function backTo(step: number) {
    // let before = getChainString(order, positives);
    for (let i = 0; i < length; i++) {
        if (order[i] >= step) {
            order[i] = 0;
            positives[i] = true;
        }
    }
    // let after = getChainString(order, positives);
    // console.log(`backTo(${step}), [${before}] => [${after}]`);
}

function doChain(index, nextMatch) {
    // printChain(order, positives, `Just in doChain(${index}, ${nextMatch})`);
    for (let thisMatch = 0, positive = true; thisMatch < length; positive ? positive = false : (thisMatch++, positive = true)) {
        let next = fitNext(index, nextMatch, thisMatch, positive);
        if (next < 0) {
            // No any match, return and backTo lastStep
            // console.log(`no fitNext(${index}, ${nextMatch}, ${thisMatch}, ${positive})`);
            return;
        } else {
            // fitNext success
            thisMatch = next;
            positive = positives[next];
        }
        // if all element is match
        if (nextMatch < length) {
            // console.log(`doChain(${next}, ${nextMatch + 1})`);
            doChain(next, nextMatch + 1);
        } else {
            let chainString = getChainString(order, positives);
            // All match check if this solution contains in solutions
            let test = getSolutionIndex(chainString);
            // console.log(`\t\tgetChainIndex(${order}) = ${test}`);
            // Not found, its new solution
            if (test < 0) {
                // console.log(`\tsolutions[${solutions.length}]: [${chainString}]`)
                solutions.push(chainString);
            }
            // There is only 1 element can be match, loop is not neccessary
            return;
        }
        // Keep looping, until all possibility of this step is shown
        backTo(nextMatch);
    }
}

function printChain(chainOrder: number[], postives: boolean[], prefix: string): string {
    let stringArray: string[] = new Array(length);
    for (let index = 0; index < length; index++) {
        if (chainOrder[index] == 0) {
            continue;
        }
        stringArray[chainOrder[index] - 1] = blockString(index, positives[index]);
    }
    // console.log(`test stringArray: [${stringArray}]`);
    let out = stringArray.join(", ");
    console.log(`${prefix}: [${out}]`);
    return `${out}`;
}

function getChainString(chainOrder: number[], positives: boolean[]): string {
    let stringArray: string[] = new Array(length);
    for (let index = 0; index < length; index++) {
        if (chainOrder[index] == 0) {
            continue;
        }
        stringArray[chainOrder[index] - 1] = blockString(index, positives[index]);
    }
    let out = stringArray.join(", ");
    return `${out}`;
}

function blockString(index: number, positive: boolean): string {
    if (positive) {
        return pairs[index];
    } else {
        return pairs[index].split("").reverse().join("");
    }
}


// console.log('Example:');
// console.log(dominoChain('0-2, 0-5, 1-5, 1-3, 5-5'));

// These "asserts" are used for self-checking
assert.equal(dominoChain('0-2, 0-5, 1-5, 1-3, 5-5'), 1);
assert.equal(dominoChain('1-5, 2-5, 3-5, 4-5, 3-4'), 2);
assert.equal(dominoChain('0-5, 1-5, 2-5, 3-5, 4-5, 3-4'), 0);
assert.equal(dominoChain('0-1, 0-2, 1-3, 1-2, 3-4, 2-4'), 6);
assert.equal(dominoChain('0-1, 0-2, 1-3, 1-2, 3-4, 2-4, 3-0, 0-4'), 0);
assert.equal(dominoChain('1-2, 2-2, 2-3, 3-3, 3-1'), 5);
assert.equal(dominoChain('1-4, 3-4, 0-4, 0-5, 4-5, 2-4, 2-5'), 0);
assert.equal(dominoChain('1-4, 1-5, 0-2, 1-6, 4-6, 4-5, 5-6'), 0);
assert.equal(dominoChain('1-2, 2-3, 2-4, 3-4, 2-5, 2-6, 5-6'), 8);
assert.equal(dominoChain('1-2, 2-3, 3-1, 4-5, 5-6, 6-4'), 0);
assert.equal(dominoChain('1-2, 1-4, 1-5, 1-6, 1-1, 2-5, 4-6'), 28);
console.log("Coding complete? Click 'Check' to earn cool rewards!");