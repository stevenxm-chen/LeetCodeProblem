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
    pal(i, i); // odd palindrome
    pal(i, i + 1); // even pal
  }

  // helper function to find longest pal, left and right are index
  const pal = (left, right) => {
    // this while loop is searching from midpoint, to outer edge. so as long as s[left] and s[right] are equal, it is pal.
    while (left >= 0 && s[left] === s[right]) {
      left--;
      right++;
    };
    // when the while loop stoped, the left and right are outside of the pal, so need to restore back.
    left++;
    right--;

   //check the length of the pal. right and left are indexes, so need to + 1 for the length calculation
    if (maxPal.length < right - left + 1) {
      //slice is not including the right index so need to do right + 1;
      maxPal = s.slice(left, right+1);
    }
  }

  return maxPal;
};
