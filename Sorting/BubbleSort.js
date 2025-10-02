function BubbleSort(arr) {
  for (let i=0; i< arr.length; i++) {
    for (let j =0; j < arr.length -1 ; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr;
}

console.log(BubbleSort([234,3,4,35,435,34,5234,23423,5,345,345]));