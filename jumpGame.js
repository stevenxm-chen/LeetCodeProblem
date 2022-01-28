// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

/*
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   //create dp each dp[i] is false;
//   //dp[0] = true

//   if(nums.length === 1) {
//     return true;
//   }
//   let index = nums[0];
//   let move = true;
//   const last = nums.length - 1
//   for (let i = 0; i < nums.length - 1; i++) {
//     currStep = nums[i];

//     while (currStep > 0) {
//       if (i + currStep + nums[i + currStep] > index) {
//         index = i + currStep + nums[i + currStep];
//       }
//       if (index >= last) {
//         return true
//       }
//       currStep--;
//     }
//     if (!move) {
//       break;
//     }

//   }
//   return false;
// };
var canJump = function (nums) {
  //create dp each dp[i] is false;
  //dp[0] = true

  if(nums.length === 1) {
    return true;
  }

  let maxIndex = nums[0];
  const last = nums.length - 1

  for (i = 0; i < maxIndex; i++) {
    let currStep = nums[i]
    if(maxIndex >= last) {
      return true;
    } else if (i + currStep + nums[i + currStep] > maxIndex) {
      maxIndex = i + currStep + nums[i + currStep];
    } else if (i + currStep > maxIndex) {
      maxIndex = i + currStep
    }
  }
  return false;
};