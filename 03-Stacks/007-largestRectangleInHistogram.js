/*
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:

Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//   //input is array of heights
//   //output is largest area

//   //Calc area from 0 to n heights
//   //Redo from i+1 to n heights
//   let maxArea = 0;
//   let maxHeight = 0;

//   for (let i = 0; i < heights.length; i++) {
//     maxHeight = heights[i];
//     maxArea = Math.max(maxHeight, maxArea);
//     for (let j = i + 1; j < heights.length; j++) {
//       maxHeight = Math.min(heights[j], maxHeight);
//       maxArea = Math.max(maxHeight*(j-i+1), maxArea);
//     }
//   }
//   return maxArea;
// };

var largestRectangleArea = function(heights) {
  let maxArea = 0;
  let stack = [];
  let start;
  let index;
  let height;

  for (let i = 0; i < heights.length; i++) {
    start = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, heights[i]]);
  }

  for (let j = 0; j < stack.length; j++) {
    maxArea = Math.max(maxArea, stack[j][1] * (heights.length - stack[j][0]))
  }

  return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));
console.log(largestRectangleArea([2,4]));
console.log(largestRectangleArea([0,9]));
console.log(largestRectangleArea([0,2,0]));