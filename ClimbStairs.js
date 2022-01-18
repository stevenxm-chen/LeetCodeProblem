// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/*
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

  //fibonacci sequence

  /*
1 -> 1
2 -> 2 (1+1 | 2+0)
3 -> 3 (1+1+1 | 2+1 | 1+2)
4 -> 5 (1+1+1+1 | 2+1+1 | 2+2 | 1+2+1 | 1+1+2)
and so on

This is exactly a fibonacci sequence
Each next amount of steps equals to sum of previous 2
1 -> 2 -> 3 -> 5 -> 8 -> 13
*/

  const arr = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};