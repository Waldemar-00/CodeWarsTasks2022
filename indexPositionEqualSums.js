
function equalSums(arr) {
    let sum = 0;

    for (let i of arr) {
    sum += i;
}

if (sum - arr[0] === 0) return 0;

for (let i = 1; i < arr.length; i++) {
    let compare = (sum - arr[i]) / 2;
    let sumJ = 0;

    for (let j = 0; j < i; j++) {
       
        sumJ += arr[j];

    }

    if (compare === sumJ) return i;
}
return -1;
}

console.log( equalSums([1, 1, 1, 21, -24, 2]) );