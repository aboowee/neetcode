/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

/*
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
//   let storage = {};
//   let result = [];
//   let sorted = [];

//   for (var numb of nums) {
//       if (!storage[numb]) {
//           storage[numb] = 1;
//       } else {
//           storage[numb]++
//       }
//   }
//   for (var key in storage) {
//       sorted.push([key, storage[key]])
//   }
//   sorted.sort((a,b) => {
//       return b[1] - a[1]
//   });
//   for (let i = 0; i < k; i++) {
//       result.push(sorted[i][0])
//   }
//   return result

let storage = new Map();
for (let num of nums) {
    if (!storage.get(num)) {
        storage.set(num, 1);
    } else {
        storage.set(num, storage.get(num) + 1)
    }
}
storage.forEach((item, key) => {console.log(item, key)})
console.log(storage);
};

console.log(topKFrequent([1,1,1,2,2,3,3], 2))