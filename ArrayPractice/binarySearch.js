// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  // use midpoint to conduct binary search
let index;

const binary = (start, end) => {

 let mid = Math.floor((start + end) / 2);

 if (nums[mid] === target) {
   index = mid;
   return
 }

 if (start > end) return;

 if (nums[mid] > target) {
   binary (start, mid - 1);
 } else if (nums[mid] < target) {
   binary (mid + 1, end);
 }

}
binary (0, nums.length - 1)

return index !== undefined ? index : -1
};