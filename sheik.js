const optimizedBubbleSort = (arr) => {
  let hasSwapped = false;
  let outerLoopIterationCount = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        hasSwapped = true;
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    if (!hasSwapped) {
      return outerLoopIterationCount;
    } else {
      hasSwapped = false;
    }
    outerLoopIterationCount++;
    console.log(arr);
  }
  return outerLoopIterationCount;
  
}
let arr = [1, 2, 3, 5, 4, 0, 8, 7, 6, 9];
alert(arr);

console.log(optimizedBubbleSort(arr));