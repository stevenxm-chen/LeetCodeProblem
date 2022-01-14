// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
// 6 --> 110  it is just 3(11) + 0

// Constraints:

// 0 <= n <= 105
// Follow up:

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

/*
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(num) {

  let result =[]
  for (let i=0;i<=num;i++){
      if (i === 0){
          result.push(0)
          continue
      }
      if (i === 1 || i===2){
          result.push(1)
          continue
      }

      if (i%2 === 0){
        //REMEMBER when even beats at i same as result[i / 2]
          result.push(result[i/2])
      } else {
        //REMEMBER when odd just use previous one + 1
          result.push(result[i - 1)] + 1)
      }

  }

  return result
};