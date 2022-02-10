// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.



// Example 1:

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
// Example 2:

// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".


// Constraints:

// 1 <= s.length <= 1000
// s consists only of lowercase English letters.

var longestPalindromeSubseq = function(s) {

  // set up dp as 2d matrix,  row is i column is j
  // i and j are pointer index in the string,  dp[i][j] is the current substring
  // when i = j, it is just one letter, then should equal to 1
  // when s[i] = s[j] which means start and end are pairs so the length should be 2 + max pal in the rest of substring
  // when not equal, then shold be taking max length of sub Pal.

  const dp = Array(s.length).fill().map(() => Array(s.length).fill(0));
  // we want to iterate from the very bottom of the matrix
  for (let i = s.length - 1; i >= 0; i --) {
    for (let j = 0; j < s.length; j++) {
      if (i > j) {
        continue;
      }

      if (i === j) {
        dp[i][j] = 1;
      } else if (s[i] === s[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1] [j])
      }
    }
  }

  return dp[0][s.length - 1];
};