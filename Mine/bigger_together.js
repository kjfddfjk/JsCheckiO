#!/usr/bin/env checkio --domain=js run bigger-together

// Your mission here is to find a difference between the maximally positive and maximally negative numbers. Those numbers can be found by concatenating the given array of numbers.
// 
// Let’s check an example. If you have numbers 1,2,3, then 321 is the maximum number, and 123 - is the minimum. The difference between those numbers is 198. But if you have numbers 4, 3 and 12 then 4312 is the maximum number, and 1234 - is the minimum. As you can see, a simple order is not what we are looking for here.
// 
// Input:A list of positive integers.
// 
// Output:An integer.
// 
// Precondition:All elements of the list can't be less than 0
// The list can't be empty
// 
// 
// END_DESC

import assert from "assert";
// const assert = require('assert');

let increase = true;

function count(a: number[]): number {
    let sum = parseInt(a.join(""));
    // console.log(`Count:[${a}] => ${sum}`);
    return sum;
}

function biggerTogether(a: number[]): number {
    // your code here
    // numbers.sort((a, b) => {})
    console.log(`\tTest:[${a}]`);
    let maxArray = [...a].sort((b, a) => {
        if (a.toString().length == b.toString().length) {
            console.log(`Length equal, a:${a}, b:${b} => ${a - b}`);
            return a - b;
        }
        let astring = a.toString();
        let bstring = b.toString();
        let alength = astring.length;
        let blength = bstring.length;
        let maxlength = alength > blength ? alength : blength;
        if (alength > blength) {
            let tmp = Array(Math.ceil(alength / blength)).fill(bstring);
            bstring = tmp.join("");
            console.log(`tmp:${tmp}, bstring:${bstring}, slice:${bstring.slice(0, alength)}`);
            bstring = bstring.slice(0, alength);
        } else {
            let tmp = Array(Math.ceil(blength / alength)).fill(astring);
            astring = tmp.join("");
            console.log(`tmp:${tmp}, astring:${astring}, slice:${astring.slice(0, blength)}`);
            astring = astring.slice(0, blength);
        }

        for (let i = 0; i < maxlength; i++) {
            if (astring[i] != bstring[i]) {
                console.log(`i(${i}), astring:${astring}, bstring:${bstring} => ${parseInt(astring[i]) - parseInt(bstring[i])}`);
                return parseInt(astring[i]) - parseInt(bstring[i]);
            }
        }
        console.log(`Length equal, alength:${alength}, blength:${blength} => ${alength - blength}`);
        return alength - blength;
    });
    let maxValue = count(maxArray);
    let minArray = [...a].sort((a, b) => {
        if (a.toString().length == b.toString().length) {
            console.log(`Length equal, a:${a}, b:${b} => ${a - b}`);
            return a - b;
        }
        let astring = a.toString();
        let bstring = b.toString();
        let alength = astring.length;
        let blength = bstring.length;
        let maxlength = alength > blength ? alength : blength;
        if (alength > blength) {
            let tmp = Array(Math.ceil(alength / blength)).fill(bstring);
            bstring = tmp.join("");
            console.log(`tmp:${tmp}, bstring:${bstring}, slice:${bstring.slice(0, alength)}`);
            bstring = bstring.slice(0, alength);
        } else {
            let tmp = Array(Math.ceil(blength / alength)).fill(astring);
            astring = tmp.join("");
            console.log(`tmp:${tmp}, astring:${astring}, slice:${astring.slice(0, blength)}`);
            astring = astring.slice(0, blength);
        }

        for (let i = 0; i < maxlength; i++) {
            if (astring[i] != bstring[i]) {
                console.log(`i(${i}), astring:${astring}, bstring:${bstring} => ${parseInt(astring[i]) - parseInt(bstring[i])}`);
                return parseInt(astring[i]) - parseInt(bstring[i]);
            }
        }
        console.log(`Length equal, alength:${alength}, blength:${blength} => ${alength - blength}`);
        return alength - blength;
    });
    let minValue = count(minArray);
    console.log(`Max:[${maxArray}], count:${maxValue}`);
    console.log(`Min:[${minArray}], count:${minValue}`);
    console.log(`Difference: ${maxValue - minValue}`);
    return maxValue - minValue;
}


function quickSort(arr: number[], left: number, right: number): number[] {

    if (left < right) {
        let partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr: number[], left: number, right: number): number { // 分区操作
    var pivot = selectPivot(arr, left, right), // 设定基准值（pivot）
        index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (needSwap(arr, i, pivot)) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}


function swap(array: number[], index1: number, index2: number) {
    let strings = "";
    if (increase) {
        strings = `Increase`;
    } else {
        strings = `Decrease`;
    }
    // console.log(`${strings} swap, [${index1}]=${array[index1]}, [${index2}]=${array[index2]}, origin:[${array}]`);
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function needSwap(array: number[], a: number, b: number): boolean {
    if (increase) {
        return isBigger(array, a, b);
    }
    return isLower(array, a, b);
}

function isBigger(array: number[], a: number, b: number): boolean {
    let strings = "isBigger";
    if (array[a].toString().length == array[b].toString().length) {
        console.log(`${strings} lengthEqual ${array[a] > array[b]}, [${array}] a[${a}]:${array[a]}, b[${b}]:${array[b]}`);
        return array[a] > array[b];
    }
    let testArray = [...array];
    swap(testArray, a, b);
    var ocount = count(array);
    var tcount = count(testArray);
    console.log(`${strings} a(${a}):${array[a]} > b(${b}):${array[b]} ${ocount > tcount}, origin[${array}]:${ocount}, check[${testArray}]:${tcount}`);
    return ocount > tcount;
}

function isLower(array: number[], a: number, b: number): boolean {
    let strings = "isLower";
    if (array[a].toString().length == array[b].toString().length) {
        console.log(`${strings} lengthEqual ${array[a] < array[b]}, [${array}] a[${a}]:${array[a]}, b[${b}]:${array[b]}`);
        return array[a] < array[b];
    }
    let testArray = [...array];
    swap(testArray, a, b);
    var ocount = count(array);
    var tcount = count(testArray);
    console.log(`${strings} a(${a}):${array[a]} < b(${b}):${array[b]} ${ocount < tcount}, origin[${array}]:${ocount}, check[${testArray}]:${tcount}`);
    return ocount < tcount;
}

function selectPivot(arr: number[], left: number, right: number): number {

    let mid = (right + left) >> 1; //计算数组中间的元素的下标
    //使用三数取中法选择枢轴
    if (needSwap(arr, mid, right)) {
        swap(arr, mid, right);
    }
    if (needSwap(arr, left, right)) {
        swap(arr, left, right);
    }
    if (needSwap(arr, left, mid)) {
        swap(arr, left, mid);
    }
    console.log(`select pivot: [${arr}], left:${left}<-pivot, mid: ${mid}, right: ${right}`);
    return left;
}

// console.log('Example:');
// console.log(biggerTogether([1, 2, 3, 4]));

// These "asserts" are used for self-checking
assert.strictEqual(biggerTogether([3, 12, 22, 32]), 2099889);
assert.equal(biggerTogether([1, 2, 3, 4]), 3087);
assert.equal(biggerTogether([1, 2, 3, 4, 11, 12]), 32099877);
assert.equal(biggerTogether([0, 1]), 9);
assert.equal(biggerTogether([100]), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");