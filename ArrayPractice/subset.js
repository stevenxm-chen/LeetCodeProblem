// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.



// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]


// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/*
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let result = [];
  dfs([], 0);

  //solution idea:  [[]] curr = 1 => [[1]] +[[]] = [[], [1]]
  //[[], [1]] curr = 2 => [[], [1]] + [[2], [1, 2]] => [[],[1], [1, 2], [2]]

  function dfs (curr, index) {
    result.push(curr);
    for (let i = index; i < nums.length; i++) {
      dfs(curr.concat(nums[i]), i + 1)
    }
  }
  return result;
};