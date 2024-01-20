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
  let combination = [];

  function combinationCreator (openIncr, closeIncr) {
      if (openIncr === closeIncr && openIncr === n) {
        result.push(combination.join(""));
      }
      if (openIncr < n) {
        combination.push('(');
        combinationCreator(openIncr + 1, closeIncr);
        combination.pop();
      }
      if (closeIncr < openIncr) {
        combination.push(')');
        combinationCreator(openIncr, closeIncr + 1);
        combination.pop();
      }
    }

  combinationCreator(0,0);
  return result;

};

console.log(generateParenthesis(2));