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

  // sort each string and store it in object;

  const map = {};

  for (let str of strs) {
    // sort each string and reconstruct it
    const key = [...str].sort().join('');
   //if there is not this string yet just create one array to hold it
    if (!map[key]) {
      map[key] = [];
    }
    // push this string to it
    map[key].push(str);
  }
  // just need to return all the values into an array;
  return Objects.values(map)
};

