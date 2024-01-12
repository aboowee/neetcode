/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

/*
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  //Input is array of numbers
  //Output is number of consecutive values
  //Constraint O(n)

  //Tracker for CURRENT indexed value
  //At current index, check if next value is in array.
    //If so, increase number
    //If not, add to tracker

  if (!nums.length) {
    return 0;
  }

  let sortedNums = nums.sort((a, b) => (a - b));
  let currentStreak = 1;
  let maximum = 1;

  for (let i = 1; i < nums.length; i++) {
    if (sortedNums[i] === sortedNums[i-1]) {
      continue;
    }
    if (sortedNums[i] === sortedNums[i-1] + 1) {
      currentStreak++;
    } else {
      maximum = Math.max(currentStreak, maximum);
      currentStreak = 1;
    }
  }

  return Math.max(maximum, currentStreak);
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));