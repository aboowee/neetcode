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