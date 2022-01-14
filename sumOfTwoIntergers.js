// Given two integers a and b, return the sum of the two integers without using the operators + and -.



// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5


// Constraints:

// -1000 <= a, b <= 1000

/*
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function(a, b) {
  const arr = [];
  let isNev = false;
if ((a < 0 && b < 0) || (Math.abs(b) > Math.abs(a) && b < 0) ||  (Math.abs(a) > Math.abs(b) && a < 0)) {
 isNev = true;
}
if(a * b >= 0) {
 for (let i = 0; i < Math.abs(a); i++) {
   arr.push(0);
 }

 for (let j = 0; j < Math.abs(b); j++) {
   arr.push(0);
 }
} else {
 let larger, smaller
 if (Math.abs(a) >= Math.abs(b)) {
   larger = a;
   smaller = b;
 } else {
   larger = b;
   smaller = a;
 }

 for (let k = 0; k < Math.abs(larger); k++) {
   arr.push(0);
 }

 for (let l = 0; l < Math.abs(smaller); l++) {
   arr.pop();
 }
}

if (isNev) {
 return -arr.length;
} else {
 return arr.length;
}

};