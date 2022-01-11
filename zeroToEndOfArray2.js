function zeroToEnd(arr) {
    let newArrZero = [];
    let newArrAll = [];
    for (let i of arr) {
        if (i === 0) {
          newArrZero.push(i);
        } else {
            newArrAll.push(i);
        }
    }
    return newArrAll.concat(newArrZero);
}
console.log(zeroToEnd([0, 0, 1, 0, 0, 1, 2,]));
