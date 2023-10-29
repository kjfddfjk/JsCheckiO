#!/usr/bin/env checkio --domain=js run inside-block

// When it comes to city planning it's important to understand the borders of various city structures.    Parks, lakes or living blocks can be represented as closed polygon and can be described using    cartesian coordinates on a map. We need a functionality to determine if a point (a building or a    tree) lies inside the structure.
// 
// For the purpose of this mission, a city structure may be considered a polygon represented as a    sequence of vertex coordinates on a plane or map. The vertices are connected sequentially with    the last vertex in the list connecting to the first. We are given the coordinates of the point    which we need to check. If the point of impact lies on the edge of the polygon then it should be    considered inside of it. For this mission, you need to determine whether the given point lies    inside the polygon.
// 
// 
// 
// For example, on the left image you see a polygon which is described by[[2, 1], [1, 5],[5, 7], [7, 7], [7, 2]]and the point at[2, 7]. The result isfalse.
// For the right image the point lies on the edge and gets counted as inside the polygon,    making the resulttrue.
// 
// Input:Two arguments. Polygon coordinates as aarrayof arrays with two    integers(number)each.    A checking point coordinates as array of two integers.
// 
// Output:Whatever the point inside the polygon or not as logic value(boolean).
// 
// Preconditions:all(x ≥ 0 and y ≥ 0 for x, y in polygon);point[0] ≥ 0 and point[1] ≥ 0.
// 
// 
// END_DESC

import assert from "assert";

function isInside(polygon : number[][], point : number[]) {
    let inside = false;
    let x = point[0];
    let y = point[1];
  
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      let xi = polygon[i][0];
      let yi = polygon[i][1];
      let xj = polygon[j][0];
      let yj = polygon[j][1];
  
      let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
  
      if (intersect) {
        inside = !inside;
      }
    }
  
    return inside;
  
    // let boundaryCount = 0;
    // let pointCount = 0;
  
    // for (let i = 0; i < polygon.length; i++) {
    //   const vertex1 = polygon[i];
    //   const vertex2 = polygon[(i + 1) % polygon.length];
  
    //   if (vertex1[1] === vertex2[1] && vertex1[1] === point[1] && point[0] > Math.min(vertex1[0], vertex2[0]) && point[0] < Math.max(vertex1[0], vertex2[0])) {
    //     // Point is on the boundary
    //     return true;
    //   }
  
    //   if ((vertex1[1] > point[1]) !== (vertex2[1] > point[1])) {
    //     const intersectionX = (vertex2[0] - vertex1[0]) * (point[1] - vertex1[1]) / (vertex2[1] - vertex1[1]) + vertex1[0];
  
    //     if (intersectionX > point[0]) {
    //       boundaryCount++;
    //     } else if (intersectionX === point[0]) {
    //       // Point is on the boundary
    //       return true;
    //     }
    //   }
  
    //   if (vertex1[1] === point[1] && vertex2[1] > point[1] && vertex1[0] < point[0]) {
    //     pointCount++;
    //   } else if (vertex2[1] === point[1] && vertex1[1] > point[1] && vertex2[0] < point[0]) {
    //     pointCount++;
    //   }
    // }
  
    // return boundaryCount % 2 === 1 || pointCount % 2 === 1;
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