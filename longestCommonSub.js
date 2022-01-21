// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.


// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

/*
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    if (text1 === text2) {
      return text1.length;
    }

    let max = '';

   for (let x = 0; x < text1.length; x++) {
     let first = text1[x];
     let sub = '';
     let z = 0;
     if (!text2.includes(text1[x])) {
       continue;
     }

     for (let y = x ; y < text1.length; y++) {
       for (z; z < text2.length; z++) {
         if (text1[y] === text2[z]) {
           sub += text1[y];
           break;
         }
       }
       if (z === text2.length) {
         z = 0;
       }
     }
     if (sub.length > max.length) {
       max = sub
     }
   }
  return max.length;
};
