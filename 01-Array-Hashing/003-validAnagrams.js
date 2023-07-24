/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  if (s.length !== t.length) {
      return false;
  }

  let sortedS = s.split('').sort();
  let sortedT = t.split('').sort();

  for (let i = 0; i < sortedS.length; i++) {
      if (sortedS[i] !== sortedT[i]) {
          return false
      }
  }
  return true;
};