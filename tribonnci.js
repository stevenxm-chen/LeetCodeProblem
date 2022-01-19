// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.



// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537


// Constraints:

// 0 <= n <= 37
// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

var tribonacci = function(n) {
    //create an array to store first 3 elements
    const arr = [0, 1, 1];
    //loop over the array the ith element will be the sum of pervious 3
    for (let i = 3; i <= n; i ++) {
      arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }

    return arr[n]
};