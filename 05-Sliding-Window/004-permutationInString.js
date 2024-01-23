/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.



Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false


Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  //Input is s2 which is string and s1 which is smaller
  //Output is if s2 contains a portion of s1

  //LOGIC
    //Sort s1
    //Iterate through s2.length
    //Window size of s1.length
    //Sort s2 window to see if matches s1

  let left = 0;
  let trackerS1 = new Array(26).fill(0);
  let trackerS2 = new Array(26).fill(0);
  let matches = 0;

  if (s2.length < s1.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    trackerS1[s1[i].charCodeAt(0) - 97]++;
    trackerS2[s2[i].charCodeAt(0) - 97]++;
  }

  for (let j = 0; j < trackerS1.length; j++) {
    if (trackerS1[j] === trackerS2[j]) {
      matches++
    }
  }

  for (let k = s1.length; k < s2.length; k++) {
    if (matches === 26) {
      return true;
    }

    let index = s2[k].charCodeAt(0) - 97
    trackerS2[index]++
    if (trackerS2[index] === trackerS1[index]) {
      matches++;
    } else if (trackerS1[index] + 1 === trackerS2[index]) {
      matches--;
    }

    index = s2[left].charCodeAt(0) - 97
    trackerS2[index]--
    if (trackerS2[index] === trackerS1[index]) {
      matches++;
    } else if (trackerS1[index] - 1 === trackerS2[index]) {
      matches--;
    }

    left++;
  }
  return matches === 26;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("ab", "ba"));