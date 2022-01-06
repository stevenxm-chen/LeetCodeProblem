// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

var productExceptSelf = function (nums) {
  const answer = [];
  const obj = {};
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (curr === 0) {
      !obj[curr] ? obj[curr] = 1 : obj[curr]++;
      continue;
    }

    product *= curr;
  }

  for (let num of nums) {
    if (num === 0 && obj[num] < 2) {
      answer.push(product);
    } else if (num === 0 && obj[num] >= 2) {
      answer.push(0);
    } else if (obj['0'] === undefined) {
      answer.push(product / num)
    } else {
      answer.push(0);
    }
  }

  return answer;
};