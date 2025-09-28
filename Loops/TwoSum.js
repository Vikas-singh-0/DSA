// Two sum problem
/** Problem Statement:
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

Input: [2, 7, 11, 15], target = 9

Output: [0, 1] (since 2 + 7 = 9)
*/

// brute force approach
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// optimized approach using a hash map
function twoSumOptimized(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
}
// Example usage:
const nums = [2, 7, 11, 15];
const target = 26;
console.log(twoSumBruteForce(nums, target)); // Output: [0, 1]
console.log(twoSumOptimized(nums, target));   // Output: [0, 1]
