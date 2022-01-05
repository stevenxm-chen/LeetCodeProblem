// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = function(nums, target) {

  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    if (hash[target - n] !== undefined) {
      return [i, hash[target - n]];
    }
    //assing index to the object for constant lookup
    // so only loop up once
    hash[n] = i;
  }
};