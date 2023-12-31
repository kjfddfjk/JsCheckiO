#!/usr/bin/env checkio --domain=js run sort-by-extension

// You are given a list of files. You need to sort this list by the file extension.     The files with the same extension should be sorted by name.
// 
// Some possible cases:
// 
// Filename cannot be an empty string;Files without the extension should go before the files with one;Filename ".config" has an empty extension and a name ".config";Filename "config." has an empty extension and a name "config.";Filename "table.imp.xls" has an extension "xls" and a name "table.imp";Filename ".imp.xls" has an extension "xls" and a name ".imp".Input:A list of filenames.
// 
// Output:A list of filenames.
// 
// 
// END_DESC


import assert from "assert";

function sortByExt(files) {
    let arr = [];
    for (let x of files) { 
        let a =  x.split(/[\.]/g).filter(i => i.length > 0); 
        let b = '';
        if (a.length >= 2 && !x.endsWith('.'))
            b = a[a.length - 1];
    arr.push([b, x.replace(b, '')]);
    }
    return arr.sort().map(x => x[1].concat(x[0]));
}

// console.log('My Example:');
// console.log(sortByExt(['1.cad', '1.bat', '1.aa']));

// These "asserts" are used for self-checking
assert.deepStrictEqual(sortByExt(['1.cad', '1.bat', '1.aa']), ['1.aa', '1.bat', '1.cad']);
assert.deepStrictEqual(sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']), ['1.aa', '1.bat', '2.bat', '1.cad']);
assert.deepStrictEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.bat']), ['.bat', '1.aa', '1.bat', '1.cad']);
assert.deepStrictEqual(sortByExt(['1.cad', '1.bat', '.aa', '.bat']), ['.aa', '.bat', '1.bat', '1.cad']);
assert.deepStrictEqual(sortByExt(['1.cad', '1.', '1.aa']), ['1.', '1.aa', '1.cad']);
assert.deepStrictEqual(sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']), ['1.aa', '1.bat', '1.cad', '1.aa.doc']);
assert.deepStrictEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.aa.doc']), ['1.aa', '1.bat', '1.cad', '.aa.doc']);
assert.deepStrictEqual(sortByExt(['1.aa', '.bat', '1.bat', '1.cad']), ['.bat', '1.aa', '1.bat', '1.cad']);
console.log(sortByExt(["1.cad","1.bat","1.aa","2.bat"]));

console.log("Coding complete? Click 'Check' to earn cool rewards!");
