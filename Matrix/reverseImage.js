// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

var rotate = function(matrix) {
  // approach 1, rotate by each number using helper function;

//   function turn (r, c, length) {

//     let temp = matrix[length - c][r]
//     let count = 4;

//     while (count > 0) {
//      let save = matrix[r][c];
//       matrix[r][c] = temp;
//       temp = save

//       let x = r;
//       r = c;
//       c = length - x;

//       count --;
//     }

//   }

// let len = matrix.length - 1;
// let j = 0;
// let i = 0;
// while (j < len) {
//   for ( k = j; k < len - j; k++) {
//     turn(i, k, len )
//   }
//   j ++
//   i ++
// }


// approach 2   reverse the symtery and then revedrse the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      //swap symetry
      let temp = matrix[i][j];

      matrix[i][j] = matrix[j][i];

      matrix[j][i] = temp;

    }
  }

 for (let row of matrix) {
   row.reverse();
};

};