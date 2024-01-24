/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.



Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// var minEatingSpeed = function(piles, h) {
//   //Input = array of numbers bananas, time limit in hours
//   //Output = rate of eating

//   let [min, max] = [1, Math.max(...piles)]
//   while (min < max) {
//       let avgRate = ~~((min+max)/2);
//       let timeSpent = 0;
//       for (let i = 0; i < piles.length; i++) {
//           timeSpent += Math.ceil(piles[i]/avgRate);
//       }
//       if (timeSpent > h) {
//           min = avgRate + 1
//       } else if (timeSpent <= h) {
//           max = avgRate
//       }
//   }
//   return max
// };

var minEatingSpeed = function(piles, h) {
    //Input is piles of banana and time limit to each
    //Output is how fast to eat piles per hour

    //LOGIC
    //Set a minimum rate and a maximum rate (max is max pile[i])
    //Initialize time spent and increase timeframe iterating through piles
    //If time > h, increase min to avg rate + 1
    //If time < or equal to h, let the max be avg rate
    let minimumRate = 1;
    let maximumRate = Math.max(...piles);
    let averageRate = Math.floor((maximumRate+minimumRate)/2);

    while (minimumRate < maximumRate) {
        let timeTaken = 0;
        for (let i = 0; i < piles.length; i++) {
            timeTaken += Math.ceil(piles[i]/averageRate);
        }
        if (timeTaken > h) {
            minimumRate = averageRate + 1;
        } else {
            maximumRate = averageRate;
        }
        averageRate = Math.floor((maximumRate+minimumRate)/2);
    }

    return maximumRate;

}

console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 5));