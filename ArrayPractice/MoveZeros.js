// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]





var moveZeroes = function(nums) {

  // iterate over nums if 0, moves it to back;
   let i = 0, j = i + 1;

  while (j < nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      nums[i] = nums[j];
      nums[j] = 0;
    } else if ((nums[i] !== 0 && nums[j] === 0) || nums[i] !== 0 && nums[j] !== 0) {
      i++;
      j++;
      continue;
    } else if (nums[i] === 0 && nums[j] === 0) {
      j ++;
      continue;
    }
  }
};