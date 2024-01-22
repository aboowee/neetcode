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
// var trap = function(height) {
//   let totalArea = 0;
//   let leftMax = 0;
//   let rightMax = 0;

//   for (let i = 0; i < height.length; i++) {
//     let j = i;
//     while (j < height.length) {
//       if (height[j] > rightMax) {
//         rightMax = height[j];
//       }
//       j++;
//     }
//     j = i;
//     while (j >= 0) {
//       if (height[j] > leftMax) {
//         leftMax = height[j];
//       }
//       j--;
//     }
//     totalArea += Math.min(rightMax, leftMax) - height[i];
//     leftMax = 0;
//     rightMax = 0;
//   }

//   return totalArea;
// };

var trap = function(height) {
  let totalArea = 0;
  let left = 0, right = height.length-1;
  let leftMax = 0, rightMax = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        totalArea += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        totalArea += rightMax - height[right];
      }
      right--;
    }
  }
  return totalArea;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));