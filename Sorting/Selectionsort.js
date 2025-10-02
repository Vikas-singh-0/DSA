// [2,4,1,5,6,3]
function Selectionsort(arr) {

  for (let i=0; i < arr.length; i++) {
    let min = i+1;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (arr[i] > arr[min]) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  console.log(arr);
}

Selectionsort([435,4,534,534,52,3,424,324,32,4,35,4,65,76,7])

