#!/usr/bin/env checkio --domain=js run inside-block

// When it comes to city planning it's important to understand the borders of various city structures.    Parks, lakes or living blocks can be represented as closed polygon and can be described using    cartesian coordinates on a map . We need functionality to determine is a point (a building or a    tree) lies inside the structure.
// 
// For the purpose of this mission, a city structure may be considered a polygon represented as a    sequence of vertex coordinates on a plane or map. The vertices are connected sequentially with    the last vertex in the list connecting to the first. We are given the coordinates of the point    which we need to check. If the point of impact lies on the edge of the polygon then it should be    considered inside it. For this mission, you need to determine whether the given point lies    inside the polygon.
// 
// 
// END_DESC

import assert from "assert";

function isInside(polygon, point) {
    let polygons = new Array();
    for (let p of polygon) {
        polygons.push([p[0] - point[0], p[1] - point[1]]);
    }
    let count = 0; // count number of segments crossing positive x - axis
    for (let i = 0; i < polygons.length; i++) {
        let p1 = polygons[i];
        let p2 = polygons[(i + 1) % polygons.length];
        if (p2[1] * p1[1] <= 0) { // crosses x axis, different y signs
            if (p1[1] == 0 && 0 == p2[1]) { // both y - coords 0
                if (p1[0] >= 0 || p2[0] >= 0) {
                    return true;
                } else {
                    let x_int = p2[0] - p2[1] * (p2[0] - p1[0]) / (p2[1] - p1[1]);
                    if (x_int == 0) {
                        return true;
                    } else if (x_int > 0) {
                        count = count + 1;
                    }
                }
            }
        }
        for (let [u, v] of [
                [p1, p2],
                [p2, p1]
            ]) {
            // console.log(`for (let [${u}, ${v}] of [[${p1}, ${p2}], [${p2}, ${p1}]]) {`);
            if (u[1] == 0 && u[0] >= 0 && u[1] > v[1]) {
                count = count + 1;
            }
        }
    }
    console.log(`Count:${count}`);
    return count % 2 == 1;
}

console.log('Example:');
console.log(isInside([
        [1, 1],
        [1, 3],
        [3, 3],
        [3, 1]
    ],
    [2, 2]));

// These "asserts" are used for self-checking
assert.equal(isInside([
        [1, 1],
        [1, 3],
        [3, 3],
        [3, 1]
    ],
    [2, 2]), true);
assert.equal(isInside([
        [1, 1],
        [1, 3],
        [3, 3],
        [3, 1]
    ],
    [4, 2]), false);
assert.equal(isInside([
        [1, 1],
        [4, 1],
        [2, 3]
    ],
    [3, 2]), true);
assert.equal(isInside([
        [1, 1],
        [4, 1],
        [1, 3]
    ],
    [3, 3]), false);
assert.equal(isInside([
        [2, 1],
        [4, 1],
        [5, 3],
        [3, 4],
        [1, 3]
    ],
    [4, 3]), true);
assert.equal(isInside([
        [2, 1],
        [4, 1],
        [3, 2],
        [3, 4],
        [1, 3]
    ],
    [4, 3]), false);
assert.equal(isInside([
        [1, 1],
        [3, 2],
        [5, 1],
        [4, 3],
        [5, 5],
        [3, 4],
        [1, 5],
        [2, 3]
    ],
    [3, 3]), true);
assert.equal(isInside([
        [1, 1],
        [1, 5],
        [5, 5],
        [5, 4],
        [2, 4],
        [2, 2],
        [5, 2],
        [5, 1]
    ],
    [4, 3]), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");