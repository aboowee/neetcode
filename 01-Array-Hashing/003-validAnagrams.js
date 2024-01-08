/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
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

// var isAnagram = function(s, t) {

//     let sortedS = s.split('').sort().join('');
//     let sortedT = t.split('').sort().join('');

//     return sortedS === sortedT;
//   };