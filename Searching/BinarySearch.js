// Iterative approach

function BinarySearch(arr, item) {
  let lowerIndex = 0;
  let higherIndex = arr.length;
  while (lowerIndex < higherIndex) {
    let midIndex = Math.ceil((lowerIndex + higherIndex) / 2);
    if (arr[midIndex] === item) return midIndex;
    if (arr[midIndex] > item) {
      higherIndex = midIndex;
    } else {
      lowerIndex = midIndex;
    }
  }
  return -1;
}

// recursive approach

function BinaryRec(arr, item) {
  if (arr.length === 1) return -1;
  let low = 0;
  let high = arr.length;
  let mid = Math.ceil(high / 2);
  if (arr[mid] == item) return mid;
  if (arr[mid] > item) {
    high = mid;
  } else {
    low = mid;
  }
  return BinaryRec(arr.slice(low, high), item);
}
let arr = [1, 2, 3, 4];
console.log(BinaryRec(arr, 3));
