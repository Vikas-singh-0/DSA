/**
✅ Problem 1: Remove Duplicates from Sorted Array (LC 26)
Level: Simple
Pattern: Two-pointer (slow/fast)
Key Idea: Keep a "write pointer" for unique elements.
👉 Amazon loves this as a warmup.} arr 
example: [1,1,2] => [1,2]
[2,3,4,4,5,5,5,5,6] => [2,3,4,5,6]
 */

// using extra array
function removeDuplicates(arr) {
  let s = 0;
  let f = 1;
  const newArr = [];
  newArr.push(arr[0]);
  for (let i= 1; i < arr.length; i++) {
    if (arr[f] === arr[s]) {
      f++;
    } else {
      newArr.push(arr[f]);
      s = f;
      f++;
    }
  }
  return newArr;
}

// in place
function removeDuplicatesInPlace(arr) {
  let s =0;
  let f = 1;
  for (let i= 1; i < arr.length; i++) {
    if (arr[f] === arr[s]) {
      f++;
    } else {
      arr[s+1] = arr[f];
      s++;
      f++;
    }
  }
  return arr.slice(0, s+1);
}

let nums = [
  1,1,1,1,1, 2,2,2, 3,3,3,3,3, 4,4, 5,5,5,5,5,5,5, 
  6,6,6,6,6, 7,7,7, 8,8,8,8,8,8, 9,9,9,9, 10,10,10,
  11,11,11,11,11, 12,12,12,12, 13,13,13,13,13,13, 
  14,14,14,14,14,14, 15,15,15, 16,16,16,16,16,16,
  17,17,17,17,17, 18,18,18, 19,19,19,19,19, 20,20,20
];
console.log(removeDuplicates(nums));
console.log(removeDuplicatesInPlace(nums));
