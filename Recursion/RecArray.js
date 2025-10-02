function RecArray(arr) {
  if (arr.length === 0) {
    return arr;
  }

  RecArray(arr.slice(0, arr.length -1));
  console.log(arr);
}

RecArray([2,3,5,1,6]);