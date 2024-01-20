/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  //Would this be recursive?
  //Input is a number which defines number of opening parenthesis
  //Output is array of all combinations

  //Place opening parenthesis, iterate to next, or close
  //Recursively call with another opening

  //Opening and closing parenthesis must equal n
  let result = [];
  let combination = "";

  function combinationCreator (openIncr, closeIncr) {
      if (openIncr === closeIncr === n) {
        return combination;
      }
      if (openIncr < n) {
        combination += '('
        combinationCreator(openIncr + 1, closeIncr);
      }
    }
  }

};

console.log(generateParenthesis(2));