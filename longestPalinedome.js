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
  //helper function if it is palinedome
  // max to store longest pal
  // curr for store current pal

  //edge case if string is empty and just one letter;

  // if the string is pal. return string.

  // create substrings from string's length if not reduce one

  const isPal = (str) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  // if s is not pal, assume maxpal is s's length - 1
  let maxLen = s.length;
  let start = 0;
  let end = start + maxLen;

  while (maxLen > 0) {

    let curr = s.slice(start, end)

    if (isPal(curr)) {
      return curr;
    } else if (end === s.length) {
      maxLen--;
      start = 0;
      end = maxLen;
    } else {
      start++;
      end++;
    }
  }

};