// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/*
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // iterate over strs, set curr to [curr] and starts to find anagram
  //if yes, grop them in to curr else leave it for later

  const result = [];

  let left = 0;
  let right = strs.length - 1;
  const hasGrouped = {};

  for (let i = 0; i < strs.length; i++) {
    const curr = strs[i];
    if (hasGrouped[curr]) {
      continue;
    }

    hasGrouped[curr] = true;
    const group = [curr]
    for (let j = i + 1; j < strs.length; j++) {
      const compare = strs[j]


      if (isAnagram (curr, compare)) {
        group.push(compare);
        hasGrouped[compare] = true;
      }
    }

    result.push(group)
  }

  return result;
};

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const obj = {};

  for (let c of str1) {
    obj[c] = (obj[c] || 0) + 1;
  }

  for (let l of str2) {
    if (!obj[l]) {
      return false;
    }
    obj[l]--;
  }
  return true
}