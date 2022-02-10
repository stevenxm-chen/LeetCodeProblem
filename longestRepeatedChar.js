// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.


// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

/*
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

  const storage = {};
  let mostRepeated = 0;
  let start = 0;
  let max = 0

  for (let i = 0; i < s.length; i++) {

    //count chars up to this point
    storage[s[i]] === undefined ? storage[s[i]] = 1 : storage[s[i]] ++;

   // keep the max value updated
    mostRepeated = Math.max(mostRepeated, storage[s[i]]);

    // window length is i - start + 1;
    // window length - mostReptated is the length of char need to be replace
    // when this number is > k, we need shrink the window size and reset the letter count.
    if (i - start + 1 - mostRepeated > k) {
      storage[s[start]] --;
      start ++
    }
    max = Math.max(max, i - start + 1);
  }


  return max;
};