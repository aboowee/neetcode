/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let storage = {};
  let result = [];
  let sorted = [];

  for (var numb of nums) {
      if (!storage[numb]) {
          storage[numb] = 1;
      } else {
          storage[numb]++
      }
  }
  for (var key in storage) {
      sorted.push([key, storage[key]])
  }
  sorted.sort((a,b) => {
      return b[1] - a[1]
  });
  for (let i = 0; i < k; i++) {
      result.push(sorted[i][0])
  }
  console.log(sorted)
  return result
};