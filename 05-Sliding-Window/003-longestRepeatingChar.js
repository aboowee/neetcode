/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.



Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.


Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// THIS IS INCORRECT. DOES NOT HANDLE IF REPLACING BACKWARDS
// var characterReplacement = function(s, k) {
//   //Input: string of letters and Number of letters that can be replaced
//   //Output: longest substring containing same letter

//   //LOGIC
//     //Initiate current longest string
//     //Initiate left
//     //Iterate through string
//       //Maybe a while loop for each index until hits k times
//         //If current index matched last, increase longest string
//         //If not, replace to match last index

//   let longestString = 0;
//   let currentCounter = 1;
//   let right = 0;
//   let replaced = 0;

//   for (let i = 0; i < s.length; i++) {
//     right = i + 1;
//     while (replaced <= k && right < s.length) {
//       if (s[right] !== s[i]) {
//         replaced++;
//         if (replaced > k) {
//           break;
//         }
//         currentCounter++;
//       } else {
//         currentCounter++;
//       }
//       right++;
//     }
//     longestString = Math.max(longestString, currentCounter);
//     currentCounter = 1;
//     replaced = 0;
//   }

//   return longestString;
// };

var characterReplacement = function(s, k) {
  let longestString = 0;
  let leftPointer = 0;
  let letterCounter = {};

  for (let i = 0; i < s.length; i++) {
    letterCounter[s[i]] ? letterCounter[s[i]]++ : letterCounter[s[i]] = 1;
    while ((i - leftPointer + 1) - Math.max(...Object.values(letterCounter)) > k) {
      letterCounter[s[leftPointer]]--;
      leftPointer++;
    }
    longestString = Math.max(longestString, i - leftPointer + 1);
  }
  return longestString;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));