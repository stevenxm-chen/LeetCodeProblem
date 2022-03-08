// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false


// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.


// Follow up: Could you use search pruning to make your solution faster with a larger board?

/*
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  if (board === null || board.length === 0 || word.length===0) return false;

  let m = board.length
  let n = board[0].length

  for(let i = 0; i < m; i ++){
      for(let j = 0; j < n; j++){
          if(dfs(i, j, word, board)) return true

      }
  }
  return false
};

function dfs (i, j, word, board) {
if (word === '') return true;

if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return false;

if (board[i][j] !== word[0]) return false;

let char = board[i][j]

  board[i][j] = '*'

  let result = dfs(i, j + 1, word.substring(1), board)
  || dfs (i + 1, j, word.substring(1), board)
  || dfs (i - 1, j, word.substring(1), board)
  || dfs (i, j - 1, word.substring(1), board);

 board[i][j] = char
 return result;
}