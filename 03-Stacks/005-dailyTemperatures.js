/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function(temperatures) {
//   let daysUntilWarmerTemp = [];
//   let dayTracker = 1;

//   for (let i = 0; i < temperatures.length; i++) {
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[j] > temperatures[i]) {
//         daysUntilWarmerTemp.push(dayTracker)
//         dayTracker = 1;
//         break;
//       } else {
//         dayTracker++
//       }
//     }
//     if (!daysUntilWarmerTemp[i]) {
//       daysUntilWarmerTemp.push(0);
//       dayTracker = 1;
//     }
//   }

//   return daysUntilWarmerTemp;

// };

var dailyTemperatures = function(temperatures) {
  let daysUntilWarmerTemp = new Array(temperatures.length).fill(0);
  let stackTracker = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stackTracker.length && stackTracker[stackTracker.length-1][1] < temperatures[i]) {
      [stackIndex, stackValue] = stackTracker.pop();
      daysUntilWarmerTemp[stackIndex] = i - stackIndex
    }
    stackTracker.push([i, temperatures[i]]);
  }

return daysUntilWarmerTemp;

};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([30,40,50,60]));