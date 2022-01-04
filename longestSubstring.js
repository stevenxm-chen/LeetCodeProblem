// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) {
  let maxStr = '';
  let currStr = '';

  for (let i = 0; i < s.length; i++) {
      let letter = s[i];
      index = currStr.indexOf(letter);

      if(index > -1) {
          if (currStr.length > maxStr.length) {
            maxStr = currStr;
          }
        currStr = currStr.slice(index + 1) + letter;
      } else {
        currStr += letter;
      }
  }
if(currStr.length > maxStr.length) {
  maxStr = currStr
}
return maxStr.length
  };