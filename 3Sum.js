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

  //iterate over nums, create sum in the loop
  const past = {}
  const hash = {};
  let first = 0;

  while (first < nums.length) {
    const storage = {};
     let sum = -nums[first];

     //if duplitcate sum just no need to run again
     if (past[-sum] !== undefined) {
       first ++
       continue;
     }

    for (i = first + 1; i < nums.length; i++) {
      if (storage[sum - nums[i]] !== undefined) {
        let combo = [-sum, sum - nums[i], nums[i]].sort();
        if(hash[combo] === undefined) {
          result.push(combo);
          hash[combo] = true;
        }

      }
      storage[nums[i]] = i;
    }
    past[-sum] = 1
    first ++
  }


  return result;
};