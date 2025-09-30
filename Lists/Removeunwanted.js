// [1,2,3,34,1,2,3,14,3] => [1,2,34,1,2,14,3]
/** 
 * 
*/

function removeunwanted(arr, unwanted) {
  let slow = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== unwanted) {
      if(slow !== i) {
        arr[slow] = arr[i];
      }
      slow++;
    }
  }
  return arr.slice(0, slow);
}

console.log(removeunwanted([1, 2, 3, 34, 1, 2, 3, 14, 3, 3, 5 , 3, 7], 3));
