// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.



// Example 1:


// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:


// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1


// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

var uniquePathsWithObstacles = function(obstacleGrid) {
  // setup fist row and first column. if there is obstacle then is 0 otherwise equal to pervious one
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 0) {
    obstacleGrid[0][0] = 1;
  } else {
    return 0;
  }

  for (let r = 1; r < m; r++) {
    if (obstacleGrid[r][0] === 1) {
      obstacleGrid[r][0] = 0;
    }  else {
      obstacleGrid[r][0] = obstacleGrid[r - 1][0];
    }
  }

  for (let c = 1; c < n; c++) {
    if (obstacleGrid[0][c] === 1) {
      obstacleGrid[0][c] = 0;
    } else {
      obstacleGrid[0][c] = obstacleGrid[0][c - 1];
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }

  return obstacleGrid[m - 1][n - 1];
}