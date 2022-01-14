
function arrSort(arr) {
    if(arr.length === 0) return [];
    
    let x = [];
    let y = [];
    
    for(let i = 1; i < arr.length; i++) {
    if(arr[0] > arr[i])x[x.length] = arr[i];
    else y[y.length] = arr[i];
    }
    return arrSort(x).concat(arr[0], arrSort(y));
} 

let arr = [4, 2, 3, 0, 1, 5];
console.log(arrSort(arr));