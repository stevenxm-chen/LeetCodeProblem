// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1


// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104


var maxArea = function (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  //using 2 pointer;
  while (i < j) {
    //length is j - i; width is the smaller height;
    let length = j - i;
    let width = Math.min(height[i], height[j]);
    let area = width * length;

    if (area > max) {
      max = area;
    }
    // this is IMPORTANT!! if height[j] is larger, the height is always at i, so we need to move i to change it.
    if (height[i] < height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    }
  }

  return max;
};