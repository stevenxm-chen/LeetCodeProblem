// Given an m x n matrix, return all elements of the matrix in spiral order.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  // use helper function to iterate use 1 or -1 for direction
 const result = [];

if (matrix[0].length === 1) {
 matrix.forEach((sub) => result.push(sub[0]))
 return result;
}


while (matrix.length) {
 loop(matrix)
}


function loop (matrix) {

let col = matrix[0].length;

for (let z = 0; z < col; z++) {
  result.push(matrix[0].shift())
  if (matrix[0].length === 0) {
    matrix.shift();
  }
}

  if (!matrix.length) {
    return;
  }

for (let i = 0; i < matrix.length; i++) {
  result.push(matrix[i].pop());
  if (!matrix[i].length) {
    matrix.splice(i, 1)
  }
}
  if (!matrix.length) {
    return;
  }
 let row = matrix.length;

  for (let j = matrix[row - 1].length - 1; j >= 0; j--) {
    result.push(matrix[row - 1].pop());
    if(matrix[row - 1].length === 0) {
      matrix.pop();
    }
  }
  if (!matrix.length) {
    return;
  }

  for (let k = matrix.length - 1; k >= 0; k--) {
    result.push(matrix[k].shift())
    if (!matrix[k].length) {
      matrix.splice(k, 1)
    }
  }
}

return result;
};

