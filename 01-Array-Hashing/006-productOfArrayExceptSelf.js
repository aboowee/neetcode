/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/*
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // let result = [];
  // for (let i = 0; i < nums.length; i++) {
  //     let product = 1
  //     for (let j = 0; j < nums.length; j++) {
  //         if (j === i) {
  //             continue;
  //         }
  //         product *= nums[j]
  //     }
  //     result.push(product)
  // }
  // return result;

  //Input is numbers array
  //Output is array of numbers excluding self
  //Constraint is O(n) without division operator

  //Create an object tracking index
  const n = nums.length;
  const result = new Array(n).fill(1);
  // [1, 1, 1, 1]
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < n; i++) {
  // [1, 1, 1, 1]
  // [1, 3, 1, 1]
  // [1, 3, 12, 1]
  // [1, 3, 12, 60]
      result[i] *= leftProduct;
      //Ignoring current index pretty much
      leftProduct *= nums[i];
      //Multiply by current index for next multiplication
  // 3
  // 12
  // 60
  }

  for (let i = n - 1; i >= 0; i--) {
  // [1, 3, 12, 60]
  // [1, 3, 72, 60]
  // [1, 90, 72, 60]
  // [120, 90, 72, 60]
      result[i] *= rightProduct;
      rightProduct *= nums[i];
  // 6
  // 30
  // 120
  }

  return result;
  // [120, 90, 72, 60]
};
console.log(productExceptSelf([3,4,5,6]));