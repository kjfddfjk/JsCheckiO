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

function sortByExt(files: string[]): string[] {
    let sorted = files.sort((a, b) => {
        let aex = a.lastIndexOf(".");
        let bex = b.lastIndexOf(".");
        // if (a.slice(0, aex) != b.slice(0, bex)) {
        //     if (a.slice(0, aex) > b.slice(0, bex))
        //         return 1;
        //     return -1;
        // }
        // if (a.slice(aex) > b.slice(bex))
        //     return 1;
        // return -1;
        if (a.slice(aex) != b.slice(bex)) {
            if (a.slice(aex) > b.slice(bex))
                return 1;
            return -1;
        }
        if (a.slice(0, aex) > b.slice(0, bex))
            return 1;
        return -1;
    });
    console.log("sorted = " + sorted);
    return files;
}

console.log('Example:');
console.log(sortByExt(['1.cad', '1.bat', '1.aa']));

// These "asserts" are used for self-checking
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa']), ['1.aa', '1.bat', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']), ['1.aa', '1.bat', '1.cad', '2.bat']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.bat']), ['.bat', '1.aa', '1.bat', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '.aa', '.bat']), ['.aa', '.bat', '1.bat', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.', '1.aa']), ['1.', '1.aa', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']), ['1.aa', '1.bat', '1.cad', '1.aa.doc']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.aa.doc']), ['1.aa', '1.bat', '1.cad', '.aa.doc']);

console.log("Coding complete? Click 'Check' to earn cool rewards!");