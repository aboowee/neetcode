/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//   let start = 0;
//   let end = nums.length;

//   while (start <= end) {
//       let midpoint = ~~((start+end)/2);
//       if (nums[midpoint] === target) {
//           return midpoint;
//       } else if (nums[midpoint] > target) {
//           end = midpoint - 1
//       } else {
//           start = midpoint + 1
//       }
//   }
//   return -1;
// };

var search = function(nums, target) {
    //Input array of ascending numbers, and target number
    //Output is index of target

    //LOGIC
        //While start <= end
        //Search middle
            //If it is, return
            //If higher, start is middle + 1
            //If lower, end is middle - 1
            //Recalc middle

    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((end + start)/2);

    while (start <= end) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((end+start)/2);
    }

    return -1;
}

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([1,2,3,4,5], 6));