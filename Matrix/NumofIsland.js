// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  // use dfs as helper function

// edgecase;

if (!grid) return 0;

let island = 0;

const dfs = (i, j) => {
  // base case;
  // when out of bounce
  if (i >= grid.length || i < 0 || j < 0 || j >= grid[0].length) return;
  //when is water or visited
  if (grid[i][j] === 'x' || grid[i][j] === '0') return;


  grid[i][j] = 'x';

  // recursive
  dfs (i, j + 1);
  dfs (i + 1, j)
  dfs (i, j - 1);
  dfs (i - 1, j);
}

// invoke dfs
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[0].length; j++) {

    if (grid[i][j] === '1') {
      island++;
      dfs(i, j);
    }
  }
}

return island;
};