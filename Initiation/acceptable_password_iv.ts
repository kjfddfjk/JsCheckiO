#!/usr/bin/env checkio --domain=js run acceptable-password-iv

// In this mission you need to create a password verification function.
// 
// The verification conditions are:
// 
// the length should be bigger than 6;should contain at least one digit, but it cannot consist of just digits;if the password is longer than 9 - previous rule is not required.Input:A string(string).
// 
// Output:A logic value(boolean).
// 
// 
// END_DESC

import assert from "assert";

function isAcceptablePassword(password: string): boolean {
    return /^(?=.*\d)(?=.*[^\d]).{7,}$|^.{9,}$/.test(password);
    // return /^(?=.*\d)(?=.*[^\d])(?!^\d+$).{7,}$|^.{9,}$/.test(password);
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("short54"), true);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("notshort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
assert.strictEqual(isAcceptablePassword("1234567"), false);
assert.strictEqual(isAcceptablePassword("12345678910"), true);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");