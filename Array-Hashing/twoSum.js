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