// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1


// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104


// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

/*
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {

   if (nums.length === 0) {
     return 0;
   }

   let sub = [nums[0]];

   for (let i = 0; i < nums.length; i++) {
     const curr = nums[i];
     if (curr > sub[sub.length - 1]) {
       sub.push(curr);
     } else {
       index = binary (sub, curr);
       sub[index] = curr;
     }
   }

   function binary (arr, target) {
     let start = 0;
     let end = arr.length - 1;

     while (end > start) {
       mid = Math.floor((start + end) / 2);
       if (arr[mid] === target) {
         return mid;
       } else if (arr[mid] > target) {
         end = mid;
       } else {
         start = mid + 1;
       }
     }
     return end;
   }
    return sub.length;
};