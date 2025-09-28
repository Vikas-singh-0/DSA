// Function to find all pairs of elements in an array that sum up to a specific target

function findComplementPairs(arr, target) {
  const complements = [];
  const seen = new Set();
  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      complements.push([complement, num]);
    }
    seen.add(num);
    console.log(seen);
    
  }
  return complements;
}
// Example usage:
const array = [15, 22, 34, 4, 51, 6];
const targetSum = 55;
const pairs = findComplementPairs(array, targetSum);
console.log(pairs); // Output: [ [ 51, 4 ] ]