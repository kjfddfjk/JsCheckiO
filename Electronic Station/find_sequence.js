#!/usr/bin/env checkio --domain=js run find-sequence

// “There’s nothing here...” sighed Nikola.
// 
// “You’re kidding right? All treasure is buried treasure! It wouldn’t be treasure otherwise!” SaidSofia. “Here, take these.” She produced three shovels from a backpack that seemed to appear out of thin air.
// 
// “Where did you get-”
// 
// “Don’t ask questions. Just dig!” She hopped on the shovel and began digging furiously.
// 
// CLUNK
// 
// “Hey we hit something.” Stephen exclaimed in surprise.
// 
// “It’s the treasure!” Sofia was jumping up and down in excitement.
// 
// The trio dug around the treasure chest and pulled it out of the hole and wiped the dirt off. Sofia tried grabbing        the lid but it was locked. Nikola studied the locking mechanism.
// 
// “I’ve seen this type of lock before. It’s pretty simple. We just need to check whether there is a sequence of 4        or more matching numbers and output a bool.”
// 
// “Easy enough. Let’s open this sucker up!” Sofia was shaking in excitement.
// 
// You are given a matrix of NxN (4≤N≤10).    You should check if there is a sequence of 4 or more matching digits.    The sequence may be positioned horizontally, vertically or diagonally (NW-SE or NE-SW diagonals).
// 
// Input:A matrix as a list of lists with integers.
// 
// Output:Whether or not a sequence exists as a boolean.
// 
// Precondition:
// 0 ≤ len(matrix) ≤ 10
// all(all(0 < x < 10 for x in row) for row in matrix)
// 
// 
// END_DESC

import assert from "assert";

function findSequence(values: number[][]): boolean {
    // your code here
    let size = values.length;
    console.log(`SIZE ${size}\n`);
    const min = 3;
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size - min; j++) {
            console.log(`-- ${i}, ${j}\n`);
            if(values[i][j] == values[i][j + 1] && values[i][j] == values[i][j + 2] && values[i][j] == values[i][j + 3]) {
                return true;
            }
        }
    }
    for(let i = 0; i < size - min; i++) {
        for(let j = 0; j < size; j++) {
            console.log(`|| ${i}, ${j}\n`);
            if(values[i][j] == values[i + 1][j] && values[i][j] == values[i + 2][j] && values[i][j] == values[i + 3][j]) {
                return true;
            }
        }
    }
    for(let i = min; i < size; i++) {
        for(let j = 0; j < size - min; j++) {
            console.log(`\\\\ ${i}, ${j}\n
            \tvalues[${i    }][${j + 3}]=${values[i    ][j + 3]}\n
            \tvalues[${i - 1}][${j + 2}]=${values[i - 1][j + 2]}\n
            \tvalues[${i - 2}][${j + 1}]=${values[i - 2][j + 1]}\n
            \tvalues[${i - 3}][${j    }]=${values[i - 3][j    ]}`);
            if(values[i][j + 3] == values[i - 1][j + 2]
            && values[i][j + 3] == values[i - 2][j + 1]
            && values[i][j + 3] == values[i - 3][j    ]) {
                return true;
            }
        }
    }
    for(let i = min; i < size; i++) {
        for(let j = 0; j < size - min; j++) {
            if(values[i][j] == values[i - 1][j + 1]
            && values[i][j] == values[i - 2][j + 2]
            && values[i][j] == values[i - 3][j + 3]) {
                console.log(`// i:${i}, j:${j}\n
                \tvalues[${i    }][${j    }]=${values[i    ][j    ]}\n
                \tvalues[${i - 1}][${j + 1}]=${values[i - 1][j + 1]}\n
                \tvalues[${i - 2}][${j + 2}]=${values[i - 2][j + 2]}\n
                \tvalues[${i - 3}][${j + 3}]=${values[i - 3][j + 3]}`);
                return true;
            }
        }
    }
    // for(let i = min; i < size; i++) {
    //     for(let j = 0; j < size - min; j++) {
    //         if(values[i][i + j - 3] == values[i - 1][i + j - 2]
    //         && values[i][i + j - 3] == values[i - 2][i + j - 1]
    //         && values[i][i + j - 3] == values[i - 3][i + j]) {
    //             console.log(`// i:${i}, j:${j}\n
    //             \tvalues[${i    }][${i + j - 3}]=${values[i    ][i + j - 3]}\n
    //             \tvalues[${i - 1}][${i + j - 2}]=${values[i - 1][i + j - 2]}\n
    //             \tvalues[${i - 2}][${i + j - 1}]=${values[i - 2][i + j - 1]}\n
    //             \tvalues[${i - 3}][${i + j    }]=${values[i - 3][i + j    ]}`);
    //             return true;
    //         }
    //     }
    // }
    return false;
}

// assert.equal(findSequence([[1, 2, 1, 1],
//  [1, 1, 4, 1],
//  [1, 3, 1, 6],
//  [2, 7, 2, 5]]), true);
// assert.equal(findSequence([
//  [7, 2, 3, 1, 6],
//  [6, 1, 2, 6, 4],
//  [5, 1, 6, 2, 1],
//  [4, 6, 4, 1, 6],
//  [5, 4, 7, 2, 1]]), true);
// assert.equal(findSequence([[7, 1, 4, 1],
//  [1, 2, 5, 2],
//  [3, 4, 1, 3],
//  [1, 1, 8, 1]]), false);
// assert.equal(findSequence([[2, 1, 1, 6, 1],
//  [1, 3, 2, 1, 1],
//  [4, 1, 1, 3, 1],
//  [5, 5, 5, 5, 5],
//  [1, 1, 3, 1, 1]]), true);
// assert.equal(findSequence([
//  [7, 1, 1, 8, 1, 1],
//  [1, 1, 7, 3, 1, 5],
//  [2, 3, 1, 2, 5, 1],
//  [1, 1, 1, 5, 1, 4],
//  [4, 6, 5, 1, 3, 1],
//  [1, 1, 9, 1, 2, 1]]), true);
// assert.equal(findSequence([[2, 6, 2, 2, 7, 6, 5],
//  [3, 4, 8, 7, 7, 3, 6],
//  [6, 7, 3, 1, 2, 4, 1],
//  [2, 5, 7, 6, 3, 2, 2],
//  [3, 4, 3, 2, 7, 5, 6],
//  [8, 4, 6, 5, 2, 9, 7],
//  [5, 8, 3, 1, 3, 7, 8]]), false);
// assert.equal(findSequence([[1, 7, 6, 1, 8, 5, 1],
//  [7, 9, 1, 7, 2, 8, 6],
//  [5, 1, 4, 5, 8, 8, 3],
//  [8, 6, 3, 9, 7, 6, 9],
//  [9, 8, 9, 8, 6, 8, 2],
//  [1, 7, 2, 4, 9, 3, 8],
//  [9, 9, 8, 6, 9, 2, 6]]), false);
// assert.equal(findSequence([[6, 9, 1, 1, 6, 2],
//  [5, 9, 7, 8, 2, 5],
//  [2, 1, 1, 7, 9, 8],
//  [1, 8, 1, 4, 7, 4],
//  [7, 8, 5, 4, 5, 1],
//  [6, 4, 8, 8, 1, 8]]), false);
// assert.equal(findSequence([[2, 7, 6, 2, 1, 5, 2, 8, 4, 4],
//  [8, 7, 5, 8, 9, 2, 8, 9, 5, 5],
//  [5, 7, 7, 7, 4, 1, 1, 2, 6, 8],
//  [4, 6, 6, 3, 2, 7, 6, 6, 5, 1],
//  [2, 6, 6, 9, 8, 5, 5, 6, 7, 7],
//  [9, 4, 1, 9, 1, 3, 7, 2, 3, 1],
//  [5, 1, 4, 3, 6, 5, 9, 3, 4, 1],
//  [6, 5, 5, 1, 7, 7, 8, 2, 1, 1],
//  [9, 5, 7, 8, 2, 9, 2, 6, 9, 3],
//  [8, 2, 5, 7, 3, 7, 3, 8, 6, 2]]), false);
// assert.equal(findSequence([[1, 9, 7, 8, 9, 3, 6, 5, 6, 2],
//  [4, 9, 4, 8, 3, 4, 8, 8, 5, 9],
//  [2, 8, 5, 5, 7, 8, 6, 1, 3, 6],
//  [6, 4, 7, 6, 9, 1, 4, 5, 7, 8],
//  [4, 7, 7, 9, 8, 8, 8, 8, 4, 4],
//  [3, 7, 3, 2, 1, 9, 1, 8, 9, 1],
//  [4, 7, 2, 4, 8, 1, 2, 3, 6, 2],
//  [4, 4, 1, 3, 3, 3, 9, 2, 6, 7],
//  [8, 6, 1, 9, 3, 5, 8, 1, 7, 5],
//  [7, 3, 6, 5, 3, 6, 6, 4, 8, 2]]), true);
// assert.equal(findSequence([[1, 6, 1, 7],
//  [4, 7, 3, 6],
//  [3, 5, 7, 9],
//  [8, 6, 6, 9]]), false);
// assert.equal(findSequence([[1, 2, 4, 6, 3],
//  [2, 5, 2, 6, 3],
//  [8, 7, 5, 9, 5],
//  [2, 1, 1, 4, 3],
//  [4, 2, 7, 5, 1]]), false);
// assert.equal(findSequence([[2, 3, 6, 5, 6, 2, 8, 3, 7, 4],
//  [6, 9, 5, 9, 7, 6, 8, 5, 1, 6],
//  [6, 8, 2, 6, 1, 9, 3, 6, 6, 4],
//  [5, 8, 3, 2, 3, 8, 7, 4, 6, 4],
//  [2, 3, 1, 4, 5, 1, 2, 5, 6, 9],
//  [5, 4, 8, 7, 5, 5, 8, 4, 9, 5],
//  [9, 7, 9, 9, 5, 9, 9, 8, 1, 2],
//  [5, 1, 7, 4, 8, 3, 4, 1, 8, 8],
//  [5, 3, 3, 2, 6, 1, 4, 3, 8, 8],
//  [4, 8, 1, 4, 5, 8, 8, 7, 4, 7]]), true);
// assert.equal(findSequence([[7, 7, 4, 4, 8],
//  [7, 4, 5, 5, 6],
//  [6, 6, 5, 2, 8],
//  [6, 2, 3, 8, 4],
//  [6, 1, 3, 1, 2]]), false);
// assert.equal(findSequence([[7, 9, 1, 7, 6, 7, 5, 9, 6],
//  [5, 5, 9, 3, 1, 6, 7, 4, 7],
//  [1, 7, 5, 2, 3, 1, 6, 4, 7],
//  [2, 2, 2, 8, 7, 2, 6, 6, 9],
//  [5, 6, 4, 2, 6, 7, 3, 4, 7],
//  [5, 5, 6, 4, 9, 4, 3, 1, 7],
//  [7, 3, 2, 3, 2, 4, 4, 7, 3],
//  [3, 6, 9, 7, 2, 5, 6, 2, 5],
//  [4, 1, 3, 9, 4, 2, 4, 8, 4]]), true);
assert.equal(findSequence([
    [2, 7, 6, 2, 1, 5, 2, 8, 4, 4], 
    [8, 7, 5, 8, 9, 2, 8, 9, 5, 5], 
    [5, 7, 7, 7, 4, 1, 1, 2, 6, 8], 
    [4, 6, 6, 3, 2, 7, 6, 6, 5, 1], 
    [2, 6, 6, 9, 8, 5, 5, 6, 7, 7], 
    [9, 4, 1, 9, 1, 3, 7, 2, 3, 1], 
    [5, 1, 4, 3, 6, 5, 9, 3, 4, 1], 
    [6, 5, 5, 1, 7, 7, 8, 2, 1, 1], 
    [9, 5, 7, 8, 2, 9, 2, 6, 9, 3], 
    [8, 2, 5, 7, 3, 7, 3, 8, 6, 2]]), false);
    
console.log("Coding complete? Click 'Check' to earn cool rewards!");