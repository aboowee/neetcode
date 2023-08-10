/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
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