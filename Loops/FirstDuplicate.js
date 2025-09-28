// Given an array of integers, find the first duplicate value in the array. If there are no duplicates, return -1.

/** Problem Statement:
Input: [2, 1, 3, 5, 3, 2]
Output: 3 (the first duplicate is 3)
*/

function FirstDuplicate(arr) {
  const seen = new Map();
  for (let i =0; i< arr.length; i++) {
    if (seen.has(arr[i])) {
      return arr[i];
    }
    seen.set(arr[i], true);
  }
  return -1;
}


