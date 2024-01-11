/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

/*
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
//   let storage = {};
//   let result = [];
//   let sorted = [];

//   for (var numb of nums) {
//       if (!storage[numb]) {
//           storage[numb] = 1;
//       } else {
//           storage[numb]++
//       }
//   }
//   for (var key in storage) {
//       sorted.push([key, storage[key]])
//   }
//   sorted.sort((a,b) => {
//       return b[1] - a[1]
//   });
//   for (let i = 0; i < k; i++) {
//       result.push(sorted[i][0])
//   }
//   return result


    //Input is array of numbers, top # of frequent numbers
    //Output is array of top frequent numbers

    //Iterate through array and count how many times a number shows up
    //Sort the array by highest count
    //Return [topFrequents] ? Array push by K

    let countStorage = {};
    for (num of nums) {
        if (!countStorage[num]) {
            countStorage[num] = 1;
        } else {
            countStorage[num]++;
        }
    }

    let sorted = Object.entries(countStorage).sort((a,b) => {
        return b[1] - a[1];
    })

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(sorted[i][0]);
    }
    return result;
};

console.log(topKFrequent([1,1,1,2,2,3,3], 2))