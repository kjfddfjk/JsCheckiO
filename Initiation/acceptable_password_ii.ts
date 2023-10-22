#!/usr/bin/env checkio --domain=js run acceptable-password-ii

// In this mission you need to create a password verification function.
// 
// The verification conditions are:
// 
// the length should be bigger than 6;should contain at least one digit.Input:A string(string).
// 
// Output:A logic value(boolean).
// 
// 
// END_DESC

import assert from "assert";

function isAcceptablePassword(password: string): boolean {
    return password.length > 6 && /\d/.test(password);
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);