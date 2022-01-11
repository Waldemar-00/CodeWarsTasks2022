
function zeroToEnd(arr) {
    let i = 0;
    let newArrZero = [];
    let newArrAll = [];
    while ( i < arr.length) {
        if (arr[i] === 0) {
          newArrZero.push(arr[i]);
        } else {
            newArrAll.push(arr[i]);
        }
    i++;
    }
    return newArrAll.concat(newArrZero);
}
console.log(zeroToEnd([0, 0, 1, 0, 0, 1, 2,]));

// arr.concat(arr.splice(i, 1));