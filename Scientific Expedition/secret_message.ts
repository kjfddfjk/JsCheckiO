#!/usr/bin/env checkio --domain=js run secret-message

// "Where does a wise man hide a leaf? In the forest.    But what does he do if there is no forest? ... He grows a forest to hide it in."
// -- Gilbert Keith Chesterton
// 
// Ever tried to send a secret message to someone without using the postal service? You could use newspapers to tell    your secret. Even if someone finds your message, it's easy to brush them off as paranoid and as a    conspiracy theorist. One of the simplest ways to hide a secret message is to use capital letters. Let's find some of    these secret messages.
// 
// You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
// 
// For example: text =    "How are you?Eh, ok.Low orLower?Ohhh.",    if we collect all of the capital letters, we get the message "HELLO".
// 
// Input:A text as a string (unicode).
// 
// Output:The secret message as a string or an empty string.
// 
// Precondition:0 < len(text) ≤ 1000
// all(ch in string.printable for ch in text)
// 
// 
// END_DESC

import assert from "assert";

function findMessage(message: string) : string {
    return message.match(/[A-Z]/g)?.join("") || "";
}

console.log('Example:');
console.log(findMessage(('How are you? Eh, ok. Low or Lower? '
 + 'Ohhh.')));

// These "asserts" are used for self-checking
assert.equal(findMessage(('How are you? Eh, ok. Low or Lower? '
 + 'Ohhh.')), 'HELLO');
assert.equal(findMessage('hello world!'), '');
assert.equal(findMessage('HELLO WORLD!!!'), 'HELLOWORLD');

console.log("Coding complete? Click 'Check' to earn cool rewards!");