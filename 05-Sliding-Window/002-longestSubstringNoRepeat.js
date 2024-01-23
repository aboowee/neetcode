/*
Given a string s, find the length of the longest
substring
 without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  //LOGIC
    //Iterate through string
    //Check If unique with substring left to i,
      //If unique, increase count for unique
      //If not unique, max unique is equal to unique counter and unique counter becomes 0
  if (!s.length) {
    return 0;
  }

  let uniqueTracker = {};
  let maxUnique = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    while (uniqueTracker[s[i]]) {
      delete uniqueTracker[s[start]];
      start++;
    }
      uniqueTracker[s[i]] = 1;
      maxUnique = Math.max(maxUnique, i - start + 1);

  }

  return maxUnique;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"));