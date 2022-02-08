// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().



// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

var strStr = function(haystack, needle) {

  // iterate over haystack, find the one match needles

  if (haystack === needle || needle === '') {
    return 0
  }


  let len = needle.length

  for (let i = 0; i <= haystack.length; i++) {
    const str = haystack.slice(i, i + len);

    if (str === needle) {
      return i;
    }
  }

  return - 1
};