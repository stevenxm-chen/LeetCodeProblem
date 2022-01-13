// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.



// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0


// Constraints:

// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

var threeSumClosest = function (nums, target) {

  let sum = 0;
  let diff = 1000;
  const storage = {};

  // sort the array
  nums = nums.sort((a, b) => a - b);

  //iterate over nums i is first num, j 2nd. k 3rd
  for (let i = 0; i < nums.length; i++) {

    let j = i + 1;
    let k = nums.length - 1;

    debugger

    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        if (sum - target < diff) {
          diff = sum - target;
          storage[diff] = sum;
        }
        k--;
      } else {
        if (target - sum < diff) {
          diff = target - sum;
          storage[diff] = sum;
        }
        j++;
      }
    }
  }
    return storage[diff];
};