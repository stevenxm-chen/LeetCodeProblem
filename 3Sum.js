// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

var threeSum = function (nums) {
  const result = [];

  if (nums.length < 3) {
    return result;
  }

   nums = nums.sort((a,b) => a - b);
  //iterate over nums, create sum in the loop

  let first = 0;

  while (first < nums.length) {
    //nums are sort if sum > 0 there is no need to go further.

    if (nums[first] > 0) {
      break;
    }
     let sum = nums[first];


     //if duplitcate sum just no need to run again
     if (sum === nums[first - 1]) {
       first ++
       continue;
     }

    let j = first + 1;
    let k = nums.length - 1;
    debugger

   while (j < k) {
      let total = sum + nums[j] + nums[k];

    if (total === 0) {
      result.push([sum, nums[j], nums[k]]);
      while (nums[j] === nums[j + 1]) {
        j++;
      }
      while (nums[k - 1] === nums[k]) {
        k--;
      }
      j++;
      k--;
    } else if (total > 0) {
      k--;
    } else {
      j++;
    }
   }
    first ++;
  }


  return result;
};