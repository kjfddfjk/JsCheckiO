#!/usr/bin/env checkio --domain=js run roman-numerals

// .numeral-table {    margin: auto;    border-collapse: collapse;    text-align: center;  }  .numeral-table * {    border: 1px solid black;    padding: 8px;    width: 50%;  }
// END_DESC

import assert from "assert";
const map = new Map<number, string>();
map.set(1000, 'M');
map.set(500, 'D');
map.set(100, 'C');
map.set(50, 'L');
map.set(10, 'X');
map.set(5, 'V');
map.set(1, 'I');
const keyArray = Array.from(map.keys());

function romanNumerals(data: number): string {
    // let result = '';
    // for(let i : number = 0; i < map.size && data; i++){
    //     const key = keyArray[i];
    //     const value: string = map.get(key)!;
    //     if(data >= key){
    //         if(Math.floor(data / key) !== 4){
    //             result += value.repeat(Math.floor(data / key));
    //             data %= key;
    //         } else {
    //             result += value + map.get(keyArray[i - 1]);
    //             data -= key * 4;
    //         }
    //     }
    //     if(!(i % 2) && Math.floor(10 * data / key) === 9) {
    //         result += map.get(keyArray[++i + 1]) + value;
    //         data %= key / 10;
    //     }
    // }
    // return result;
    const romanMap: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    };

    let result = '';
    let remainder = data;

    Object.keys(romanMap)
    .reverse()
    .forEach((key) => {
        const value = parseInt(key);
        while (remainder >= value) {
        result += romanMap[value];
        remainder -= value;
        }
    });

    return result;
}

console.log('Example:');
// console.log(romanNumerals(1));

// These "asserts" are used for self-checking
assert.equal(romanNumerals(1), 'I');
assert.equal(romanNumerals(10), 'X');
assert.equal(romanNumerals(50), 'L');
assert.equal(romanNumerals(100), 'C');
assert.equal(romanNumerals(500), 'D');
assert.equal(romanNumerals(1000), 'M');
assert.equal(romanNumerals(3999), 'MMMCMXCIX');
assert.equal(romanNumerals(99), 'XCIX');
assert.equal(romanNumerals(88), 'LXXXVIII');
assert.equal(romanNumerals(587), 'DLXXXVII');
assert.equal(romanNumerals(2387), 'MMCCCLXXXVII');
assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII');
assert.equal(romanNumerals(76), 'LXXVI');
assert.equal(romanNumerals(6), 'VI');
assert.equal(romanNumerals(13), 'XIII');
assert.equal(romanNumerals(44), 'XLIV');
assert.equal(romanNumerals(473), 'CDLXXIII');

console.log("Coding complete? Click 'Check' to earn cool rewards!");