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

  let maxPal = '';

  for (let i = 0; i < s.length; i++) {
    pal(i, i);
    pal(i, i + 1);
  }

  function pal (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    left ++;
    right --;

    if (maxPal.length < right - left + 1) {
      maxPal = s.slice(left, right + 1);
    }
  }

  return maxPal;
};