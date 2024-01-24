/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.



Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
//   //Start is first array
//   //Last is last array
//   //Look into first digit and last of each array starting with middle array
//   //If target within range, check that array
//   //Otherwise change start and last
//   let start = 0;
//   let end = matrix.length-1;

//   while (start <= end) {
//       let midArray = ~~((start+end)/2);
//       if (matrix[midArray][0] <= target && matrix[midArray][matrix[midArray].length -1] >= target) {
//           for (let i = 0; i < matrix[midArray].length; i++) {
//               if (matrix[midArray][i] === target) {
//                   return true
//               }
//           }
//       } else if (matrix[midArray][0] > target) {
//           end = midArray - 1;
//       } else {
//           start = midArray + 1
//       }
//   }
//   return false
};

var searchMatrix = function(matrix, target) {
    //Input is nested array of ascending numbers
    //Output is boolean if target exists
    //LOGIC
        //Since each array is ascending and within the array is ascending
        //Look into middle nested array. Search first and last index of array
        //If target is within > binary search that array
        //If target is lower than first index, end = mid - 1
        //If target is higher than last value, start = mid + 1

    let arrayStart = 0;
    let arrayEnd = matrix.length - 1;
    let arrayMid = ~~((arrayStart+arrayEnd)/2);
    let nestedStart = 0;
    let nestedEnd = matrix[0].length - 1;
    let nestedMid = ~~((nestedStart+nestedEnd)/2);

    while (arrayStart <= arrayEnd) {
        if (matrix[arrayMid][0] <= target && matrix[arrayMid][nestedEnd] >= target) {
            while (nestedStart <= nestedEnd) {
                if (matrix[arrayMid][nestedMid] === target) {
                    return true;
                } else if (matrix[arrayMid][nestedMid] > target) {
                    nestedEnd = nestedMid - 1;
                } else {
                    nestedStart = nestedMid + 1;
                }
                nestedMid = ~~((nestedStart+nestedEnd)/2);
            }
            return false;
        } else if (matrix[arrayMid][0] > target) {
            arrayEnd = arrayMid - 1;
        } else {
            arrayStart = arrayMid + 1;
        }
        arrayMid = ~~((arrayStart+arrayEnd)/2);
    }

    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));