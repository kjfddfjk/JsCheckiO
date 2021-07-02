#!/usr/bin/env checkio --domain=js run brackets

// “Great!” Exclaimed Sofia. “Now we have the password.”
// 
// “To what exactly?” Quipped Nikola.
// 
// “Untold treasures, vast riches beyond belief! Gold! Silver! Silicon! Hydraulic Fluid! Anything your heart        desires!”
// 
// “And you’re going to do what with a password to absolutely nothing?” Nikola smirked.
// 
// “Oh... Right...”
// 
// Stephen spoke up. “Well, this door back here has a keypad. Only thing is the brackets look pretty busted up. We        could try fixing it and then punching in the password?”
// 
// “YES! That!” Sofia exclaimed.
// 
// You are given an expression with numbers, brackets and operators.    For this task only the brackets matter. Brackets come in three flavors: "{}" "()" or "[]".    Brackets are used to determine scope or to restrict some expression.     If a bracket is open, then it must be closed with a closing bracket of the same type.     The scope of a bracket must not intersected by another bracket.     In this task you should make a decision, whether to correct an expression or not based on the brackets.     Do not worry about operators and operands.
// 
// Input:An expression with different of types brackets as a string (unicode).
// 
// Output:A verdict on the correctness of the expression in boolean (True or False).
// 
// Precondition:
// There are only brackets ("{}" "()" or "[]"), digits or operators ("+" "-" "*" "/").
// 0 < len(expression) < 103
// 
// 
// END_DESC

import assert, {
    strict
} from "assert";

function brackets(expr: string): boolean {
    let stack = [];
    for (let each of expr) {
        if (isOpen(each)) {
            // console.log(`Push${each}`);
            stack.push(each);
        } else if (isClose(each)) {
            if (stack.length == 0) {
                // console.log(`Empty stack for close '${each}'`);
                return false;
            } else if (!isMatch(stack.pop(), each)) {
                // console.log(`Not match ${each}`);
                return false;
            }
        }
    }
    // console.log("End loop: " + stack);
    return (stack.length == 0);
}

function isOpen(bracket: string): boolean {
    return (bracket == "{" || bracket == '[' || bracket == '(');
}

function isClose(bracket: string): boolean {
    return (bracket == "}" || bracket == ']' || bracket == ')');
}

function isMatch(open: string, close: string): boolean {
    const pairs = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    return pairs[close] === open;
}

console.log('Example:');
console.log(brackets("(5+3)*2+1)"));

// These "asserts" are used for self-checking
assert.equal(brackets("((5+3)*2+1)"), true);
assert.equal(brackets("{[(3+1)+2]+}"), true);
assert.equal(brackets("(3+{1-1)}"), false);
assert.equal(brackets("[1+1]+(2*2)-{3/3}"), true);
assert.equal(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false);
assert.equal(brackets("[(3)+(-1)]*{3}"), true);
assert.equal(brackets("(((([[[{{{3}}}]]]]))))"), false);
assert.equal(brackets("[1+202]*3*({4+3)}"), false);
assert.equal(brackets("({[3]})-[4/(3*{1001-1000}*3)/4]"), true);
assert.equal(brackets("[[[1+[1+1]]])"), false);
assert.equal(brackets("(((1+(1+1))))]"), false);
assert.equal(brackets("2+3"), true);

console.log("Coding complete? Click 'Check' to earn cool rewards!");