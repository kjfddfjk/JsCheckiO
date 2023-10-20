// #!/usr/bin/env checkio --domain=js run all-permutations

// Given a string, return all possiblepermutationsof its characters, sorted alphabetically.
// 
// 
// 
// Input:String(string).
// 
// Output:Arrayof strings(string).
// 
// Examples:
// 
// assert.deepStrictEqual(stringPermutations("ab"), ["ab", "ba"]);
// assert.deepStrictEqual(stringPermutations("abc"),...The mission is locked because the "Home" station is still closed for you. Open the station and get access to all of the missions on it.
// END_DESC

import assert from "assert";

function stringPermutations(s: string): string[] {
    // For each character in the string, we will insert it into each position of the permutations of the substring
    // For example, for string "abc", we will insert "a" into each position of the permutations of "bc"
    // "bc" has two permutations: "bc" and "cb"
    // Insert "a" into "bc" at each position: "abc", "bac", "bca"
    // Insert "a" into "cb" at each position: "acb", "cab", "cba"
    // Ordering string s by alphabetical order, we will get the result
    if (s.length <= 1) {
        return [s];
    }
    // Change result from array to set()
    // const result = new Set<string>();
    //
    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i];
    //     const remainingChars = s.slice(0, i) + s.slice(i + 1);
    //     const permutations = stringPermutations(remainingChars);
    //
    //     for (let j = 0; j < permutations.length; j++) {
    //         let permutation  = permutations[j];
    //         for (let k : number = 0; k < permutation.length; k++ )
    //             addValueToSetIfNotExist(result, permutation.slice(0, k) + char + permutation.slice(k));
    //     }
    // }
    // return Array.from(result).sort();

    const result = new Array<string>();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const remainingChars = s.slice(0, i) + s.slice(i + 1);
        const permutations = stringPermutations(remainingChars);

        for (let j = 0; j < permutations.length; j++) {
            !result.push(char + permutations[j]);
        }
    }
    return Array.from(result).sort();
}

function addValueToSetIfNotExist(set: Set<string>, value: string) {
    if (!set.has(value)) {
        set.add(value);
    }
}

console.log("Example:");
// console.log(stringPermutations("ab"));

// These "asserts" are used for self-checking
assert.deepStrictEqual(stringPermutations("aab"), ["aab","aab","aba","aba","baa","baa"]);
// assert.deepStrictEqual(stringPermutations("ab"), ["ab", "ba"]);
// assert.deepStrictEqual(stringPermutations("abc"), [
//     "abc",
//     "acb",
//     "bac",
//     "bca",
//     "cab",
//     "cba",
// ]);
// assert.deepStrictEqual(stringPermutations("a"), ["a"]);
// assert.deepStrictEqual(stringPermutations("abcd"), [
//     "abcd",
//     "abdc",
//     "acbd",
//     "acdb",
//     "adbc",
//     "adcb",
//     "bacd",
//     "badc",
//     "bcad",
//     "bcda",
//     "bdac",
//     "bdca",
//     "cabd",
//     "cadb",
//     "cbad",
//     "cbda",
//     "cdab",
//     "cdba",
//     "dabc",
//     "dacb",
//     "dbac",
//     "dbca",
//     "dcab",
//     "dcba",
// ]);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");