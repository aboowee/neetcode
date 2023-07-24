/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s){
  let left = 0, right = s.length - 1;
  while (left < right) {
      if (!isAlphaNumeric(s[left]))
          left++;
      else if (!isAlphaNumeric(s[right]))
          right--;
      else if (s[left].toLowerCase() !== s[right].toLowerCase())
          return false;
      else {
          left++;
          right--;
      }
  }
  return true;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}