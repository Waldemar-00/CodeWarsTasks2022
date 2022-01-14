
let arr = [1, 4, 5, 2, 0, 3];

function swap(arr, i, j) {
    let item = arr[i];
    arr[i] = arr[j];
    arr[j] = item;
}

let swapped;
let count = 0;

do {
    swapped = false;
for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i + 1]) {
        swap(arr, arr[i], arr[i + 1]);
    swapped = true;
    }    


    for(let i = arr.length - 1; i > 0; i--) {
        if(arr[i] < arr[i - 1]) {
            swap(arr, arr[i], arr[i - 1]);
     swapped = true;
        }
    }
} 

count ++;
}while(swapped);
console.log(arr, count);