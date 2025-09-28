// Function to count the frequency of each element in an array
/** Problem Statement:
Given an array of integers, return a map with the frequency count of each element.
Input: [1, 2, 2, 3, 3, 3]
Output: Map { 1 => 1, 2 => 2, 3 => 3 }
*/

function freqCount(arr) {
  const freqMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
  }
  return freqMap;
}

// Example usage:
let arr = [1, 2, 2, 3, 3, 3];
console.log(freqCount(arr)); // Output: Map { 1 => 1, 2 => 2, 3 => 3 }
// Example usage:
arr = [1, 2, 2, 3, 3, 3];
console.log(freqCount(arr)); // Output: Map { 1 => 1, 2 => 2, 3 => 3 }