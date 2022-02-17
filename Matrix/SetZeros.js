// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.



// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  // iteratre over matrix;
  //if matriz[i][j] = 0  set zeros;

const zeros = []

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 0) {
      zeros.push([i, j]);
    }
  }
}

for (let cor of zeros) {
  let row = cor[0];
  let col = cor[1];

 for (let k = 0; k < matrix[row].length; k++) {
    matrix[row][k] = 0;
  }
  matrix.forEach((val) => val[col] = 0) ;
}

};