/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   let storage = {};

//   if (!nums.length) {
//     return false;
//   }

//   storage[nums[0]] = 0;

//   for (let i = 1; i < nums.length; i++) {
//     //Checks if in storage. 0 comes back as false so therefore must check if there is a number
//       if (typeof storage[target - nums[i]] === "number") {
//           return [storage[target-nums[i]], i]
//       }
//       storage[nums[i]] = i
//   }

//   return false;
// };

function twoSum(nums, target) {
  let numberIndexTracker = {};
  numberIndexTracker[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
    if (numberIndexTracker.hasOwnProperty(target - nums[i])) {
      return [numberIndexTracker[target - nums[i]], i]
    }
    numberIndexTracker[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))