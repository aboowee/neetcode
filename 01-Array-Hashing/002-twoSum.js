/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let storage = {};
  storage[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
      if (typeof storage[target - nums[i]] === "number") {
          return [storage[target-nums[i]], i]
      }
      storage[nums[i]] = i
  }

};