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
  var str = '';
  var max = 0;
  var storage = {};
  var start = 0

  //iterate the string, using obj to track letters
  while (start < s.length) {
    for (let i = start; i < s.length; i++) {
      // if repeated, cal the length and store it to max
      if (!storage[s[i]]) {
        storage[s[i]] = 1;
        str += s[i];
         if (i === s.length - 1 && str.length > max) {
          return str.length;
        }
      } else {
        if (str.length > max) {
          max = str.length;
          break;
        } else {
            break;
        }
      }
    }
      str = '';
      storage = {};
      start++;
  }

    return max;
  };