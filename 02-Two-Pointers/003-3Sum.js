/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  let pointerOne = 0
  let pointerTwo = nums.length-1;
  let midpoint = Math.floor((pointerOne+pointerTwo)/2)

  while (pointerOne < midpoint && pointerTwo > midpoint) {
      if (nums[pointerOne] + nums[midpoint] + nums[pointerTwo] === 0) {
          result.push(nums[pointerOne] + nums[midpoint] + nums[pointerTwo])
      }
  }

};