/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/*
Example 1:

Input: nums = [-1,0,1,2,-1,-4]  [-2, -1, 0, 1, 2]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  //input is array of numbers
  //output is array of combinations where sum = 0

  //LOGIC
  //Sort the nums
  //For loop on nums
    //While loop for left (i+1) and right (nums.length)
    //Similar to 2 sums, if total is > greater than sum, right--
    //Else left ++

  let combinations = [];
  let sorted = nums.sort((a,b) => a-b);
  let left, right, sum;
  let lastLeft, lastRight;

  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) {
      break;
    }
    if (i > 0 && sorted[i] === sorted[i-1]) {
      continue;
    }
    left = i + 1;
    right = sorted.length - 1;
    while (left < right) {
      sum = sorted[i] + sorted[left] + sorted[right];
      if (sum === 0) {
        combinations.push([sorted[i], sorted[left], sorted[right]]);
        lastLeft = sorted[left];
        lastRight = sorted[right];
        while (left < right && sorted[left] === lastLeft) {
          left++;
        }
        while (left < right && sorted[right] === lastRight) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return combinations;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));
console.log(threeSum([-2,-1, 0, 1, 2]));