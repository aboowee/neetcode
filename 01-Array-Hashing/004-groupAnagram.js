/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  //Input is an array of strings
  //Output is an array of array of anagrams
  let storage = {};

  for (let str of strs) {
      let sorted = str.split('').sort().join('')
      if (!storage[sorted]) {
          storage[sorted] = [str];
      } else {
          storage[sorted].push(str)
      }
  }

  return Object.values(storage)

  //Create storage
    //Iterate through string array
      //Iterate through storage
        //Check if current array string is an anagram with storage string
        //If so, add to that storage
        //If not, set that storage

  //Return storage in correct format

};