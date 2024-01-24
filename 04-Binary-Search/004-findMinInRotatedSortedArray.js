/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times
*/

/**
 * @param {number[]} nums
 * @return {number}
 */


var findMin = function(nums) {
  //Input is a rotated array
  //Output is minimum value in array
  //Constraint - must be in O(logn) time complexity

  //LOGIC
    //Look at middle value
    //IF middle is higher than left, search right
    //ELSE search left

    let start = 0;
    let end = nums.length - 1;

    let min = nums[0];

    while (start <= end) {
      let mid = ~~((start+end)/2);

      if (nums[end] > nums[start]) {
        min = Math.min(min, nums[start]);
        break;
      }

      min = Math.min(min, nums[mid]);

      if (nums[mid] >= nums[start]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return min;
};

// console.log(findMin([3,4,5,1,2]));
// console.log(findMin([4,5,6,7,0,1,2]));
// console.log(findMin([11,13,15,17]));
console.log(findMin([18,13,15,17]));