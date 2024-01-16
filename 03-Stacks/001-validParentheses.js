/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  let stack = [];
  let brackets = {'}': '{', ']': '[', ')': '('};
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
          stack.push(s[i])
      } else if (stack.pop() !== brackets[s[i]]) {
          return false;
      }
  }
  if (!stack.length) {
      return true;
  }
  return false
};

var isValid = function(s) {

    //Iterate through string, and store bracket
    //If encountering a close bracket, check if last stack item is the opening
      //If so, remove and continue
      //If not, return false
    //Check if stack is empty at end
    let stack = [];
    let brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let bracket of s) {
        if (!brackets[bracket]) {
            stack.push(bracket);
        } else if (brackets[bracket] === stack.pop()) {
            continue;
        } else {
            return false;
        }
    }

    return stack.length ? false : true;

  };

  console.log(isValid("()"));