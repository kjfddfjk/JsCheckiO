#!/usr/bin/env checkio --domain=js run birthday-party

// I want to know when I will celebrate my birthday.
// 
// The only problem is that often I can't organize a party on the same day as my birthday, because I want to invite a lot of my friends and the most convenient day for them to celebrate is the weekend.
// 
// I was hoping you could help me calculate the party date by the given birthday date, but, as I said before, the date should meet specific requirements:
// 
// It should always be the closes weekend to my birthday.I don't want to celebrate before the birthday.But I'm ok with marking in the day.Input:Date of my birthday.
// 
// Output:Date of the party.
// 
// 
// END_DESC

import assert from "assert";

function birthdayParty(birthday: Date): Date {
    return birthday.getDay() === 6 || birthday.getDay() === 0 ? birthday
        : new Date(birthday.getTime() + (6 - birthday.getDay()) * 24 * 60 * 60 * 1000);
}

console.log("Example:");
console.log(birthdayParty(new Date(2022, 1, 5)));

// These "asserts" are used for self-checking
assert.deepStrictEqual(
    birthdayParty(new Date(2022, 0, 5)),
    new Date(2022, 0, 8)
);
assert.deepStrictEqual(
    birthdayParty(new Date(2022, 1, 21)),
    new Date(2022, 1, 26)
);
assert.deepStrictEqual(
    birthdayParty(new Date(2022, 2, 26)),
    new Date(2022, 2, 26)
);
assert.deepStrictEqual(
    birthdayParty(new Date(2022, 3, 17)),
    new Date(2022, 3, 17)
);
assert.deepStrictEqual(
    birthdayParty(new Date(2022, 2, 30)),
    new Date(2022, 3, 2)
);

console.log("Coding complete? Click 'Check' to earn cool rewards!");