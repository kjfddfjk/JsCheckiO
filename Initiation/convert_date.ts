#!/usr/bin/env checkio --domain=js run convert-date

// This function should take a date string in the formatdd/mm/yyyyand convert it to the formatyyyy-mm-dd. If the input is not in the correct format, the function should return an error message"Error: Invalid date.".
// 
// 
// 
// Input:String(string).
// 
// Output:String(string).
// 
// Examples:
// 
// assert.strictEqual(convertDate("25/12/2021"), "2021-12-25");
// assert.strictEqual(convertDate("01/01/2000"), "2000-01-01");
// assert.strictEqual(convertDate("15/06/1995"), "1995-06-15");
// assert.strictEqual(convertDate("29/02/2020"), "2020-02-29");
// Preconditions:the input should be a string: date ∈ string;the input should match the pattern: dd/mm/yyyy, where 01 ≤ dd ≤ 31, 01 ≤ mm ≤ 12, and 1900 ≤ yyyy ≤ 2100.
// 
// 
// END_DESC

import assert from "assert";

function convertDate(date: string): string {
    // your code here
    if(!date.match(/^\d{2}\/\d{2}\/\d{4}$/)){
        return "Error: Invalid date.";
    }
    const [day, month, year] = date.split("/");
    const d = new Date(`${year}-${month}-${day}`);
    if(d.getDate() === Number(day) && d.getMonth() === Number(month) - 1 && d.getFullYear() === Number(year)){
        return `${year}-${month}-${day}`;
    }
    return "Error: Invalid date.";
}

console.log("Example:");
console.log(convertDate("01/01/2023"));

// These "asserts" are used for self-checking
assert.strictEqual(convertDate("25/12/2021"), "2021-12-25");
assert.strictEqual(convertDate("01/01/2000"), "2000-01-01");
assert.strictEqual(convertDate("15/06/1995"), "1995-06-15");
assert.strictEqual(convertDate("29/02/2020"), "2020-02-29");
assert.strictEqual(convertDate("10/10/2010"), "2010-10-10");
assert.strictEqual(convertDate("31/05/1985"), "1985-05-31");
assert.strictEqual(convertDate("07/08/1960"), "1960-08-07");
assert.strictEqual(convertDate("02/09/1999"), "1999-09-02");
assert.strictEqual(convertDate("30/04/1975"), "1975-04-30");
assert.strictEqual(convertDate("29/02/2019"), "Error: Invalid date.");
assert.strictEqual(convertDate("30/04/1975/1"), "Error: Invalid date.");

console.log("Coding complete? Click 'Check Solution' to earn rewards!");