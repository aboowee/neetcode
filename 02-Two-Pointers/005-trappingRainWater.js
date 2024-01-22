/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
*/

/*
Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let totalArea = 0;
  let currentArea = 0;
  let left = 0;
  let right = 2;

  while (left <= height.length - 3) {
    while (right <= height.length - 1 && height[right] < height[left] && right > left + 1) {
      if (height[right-1] > height[left]) {
        left = right - 1;
      }
      if (height[right-1] < height[left]) {
        currentArea += height[left] - height[right - 1];
      }
      if (right === height.length - 1 && height[right] < height[left]) {
        currentArea = 0;
        right = left + 1;
        break;
      }
      right++;
    }
    left = right;
    right+= 2;
    totalArea += currentArea;
    currentArea = 0;
    //Keep moving right pointer hitting equal or higher height
      //Get the max height (math.min perimeters) and iterate between to add
    //Start becomes end. For each start, keep making end go until equal or higher OR to end
  }

  return totalArea;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));