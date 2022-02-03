// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]


// Constraints:

// 1 <= n <= 8

/*
 * @param {number} n
 * @return {string[]}
 */

 var generateParenthesis = function(n) {
  // set result
  const result = [];

  //use helper function to add ( an )
  //open stands for counts of (  close for )

  function helper (open, close, string) {
    // base case
    if(open === n && close === n) {
      result.push(string)
    }
   //if open count < n then we need more pairs
    if (open < n) {
      helper (open + 1, close, string + '(')
    }
  // open and close should be same, so we need more to close
    if (close < open) {
      helper (open, close + 1, string + ')')
    }
  }
  helper (0, 0, '');

  //return result
  return result;
};