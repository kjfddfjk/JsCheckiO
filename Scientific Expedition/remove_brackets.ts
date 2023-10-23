#!/usr/bin/env checkio --domain=js run remove-brackets

// Before solving this mission, you can try to solve the"Brackets"mission.
// 
// Your task is to restore the balance of open and closed brackets by removing the unnecessary ones,     while trying to use the minimum number of deletions.
// 
// Only 3 types of brackets (), [] and {} can be used in the given string.
// 
// Only a parenthesis can close a parenthesis. That is, in this expression "(}" - the brackets aren’t balanced.     In an empty string, i.e., in a string that doesn’t contain any brackets - the brackets are balanced,     but removing all of the brackets isn’t considered to be an optimal solution.
// 
// If there are more than one correct answer,     then you should choose the one where the character that can be removed is closer to the beginning.     For example, in this case  "[(])",  the correct answer will be "()",     since the removable brackets are closer to the beginning of the line.
// 
// Input:A string of characters () {} []
// 
// Output:A string of characters () {} []
// 
// 
// END_DESC

import assert from "assert";

function removeBrackets(line: string, first: boolean = true): string {
    let array = new Array();
    array.push(line);
    do{
        let current = array.shift();
        if(isBracketBalance(current)){
            return current;
        }
        for(let i = 0; i < current.length; i++){
            if(isBracketBalance(current.slice(0, i) + current.slice(i + 1))){
                return current.slice(0, i) + current.slice(i + 1);
            }
            array.push(current.slice(0, i) + current.slice(i + 1));
        }
    } while(array.length > 0);
    return "";
}

function isBracketBalance(line: string): boolean{
    let bracket = line.replace(/[^(){}\[\]]/g, '');
    let previous = bracket;
    do{
        bracket = bracket.replace(/\(\)|\{\}|\[\]/g, '');
    } while(bracket !== previous && (previous = bracket));
    return !bracket;
}
console.log('Example:');
console.log(removeBrackets('(()()'));

// These "asserts" are used for self-checking
assert.equal(removeBrackets('(()()'), '()()');
assert.equal(removeBrackets('[][[['), '[]');
assert.equal(removeBrackets('[[(}]]'), '[[]]');
assert.equal(removeBrackets('[[{}()]]'), '[[{}()]]');
assert.equal(removeBrackets('[[[[[['), '');
assert.equal(removeBrackets('[[[[}'), '');
assert.equal(removeBrackets(''), '');
assert.equal(removeBrackets('[(])'), '()');

console.log("Coding complete? Click 'Check' to earn cool rewards!");