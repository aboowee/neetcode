/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  //LOGIC
    //Iterate through stocks
    //Keep track of minimum before current value. Check if minimum value is less than current
      //Calc max profit between current minimum and current value. If more, max
  let max = 0;
  let currentMinimum = prices[0];
  let windowStart = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[windowStart] < currentMinimum) {
      currentMinimum = prices[windowStart];
    }
    if (prices[i] > currentMinimum) {
      max = Math.max(max, prices[i] - currentMinimum);
    }
    windowStart++;
  }

  return max;
};

var maxProfit = function(prices) {
  let max = 0;
  let windowStart = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[windowStart] < prices[i]) {
      max = Math.max(max, prices[i] - prices[windowStart]);
    } else {
      windowStart = i;
    }
  }

  return max;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));