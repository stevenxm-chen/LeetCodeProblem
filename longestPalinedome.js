// Given a string s, return the longest palindromic substring in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function(s) {
  let maxPal = '';

  for (let i = 0; i < s.length; i ++) {
    pal(i, i);
    pal(i, i + 1);
  }

  const pal = (left, right) => {
    while (left >= 0 && s[left] === s[right]) {
      left--;
      right++;
    };
    left++;
    right--;

    if (maxPal.length < right - left + 1) {
      maxPal = s.slice(left, right+1);
    }
  }

  return maxPal;
};
