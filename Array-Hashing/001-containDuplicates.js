//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let storage = {}
    for (let i = 0; i < nums.length; i++) {
      if (typeof storage[nums[i]] === "number") {
          return true
      } else {
          storage[nums[i]]=nums[i]
      }
    }
    return false
};