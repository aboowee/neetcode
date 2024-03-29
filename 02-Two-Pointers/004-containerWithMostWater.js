/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/*
Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/

/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//   let maxVolume = 0;
//   let volume = 0;
//   let start = 0;
//   let end = height.length-1;

//   while (start < end) {
//       //Multiple start height * end height * index difference to get volume
//       //If higher than current Max, replace
//       volume = Math.min(height[start], height[end]) * (end - start);
//       if (volume > maxVolume) {
//           maxVolume = volume
//       }
//       if (height[start] >= height[end]) {
//           end--
//       } else {
//           start++
//       }
//   }
//   return maxVolume
// };

var maxArea = function(height) {
    let maxVolume = 0;
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        maxVolume = Math.max(maxVolume, Math.min(height[start], height[end]) * (end - start));
        if (height[start] > height[end]) {
            end--;
        } else {
            start++;
        }
    }
    return maxVolume;
  };

  console.log(maxArea([1,8,6,2,5,4,8,3,7]));