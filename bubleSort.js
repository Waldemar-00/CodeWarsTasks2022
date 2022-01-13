
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let array = arr.slice();
let inn = 0;
let out = 0;


function arrFu(arr) {
    
for(let a = arr.length - 1; a > 0; a--) {
    let swap = false;
    for(let b = 0; b < a; b++) {
 
        if(arr[b] > arr[b + 1]) {

            let change = arr[b];
            arr[b] = arr[b + 1];
            arr[b + 1] = change;
  swap = true; 
        }
        
  inn++;

    }
    out++;

if(!swap)break;

} 
return arr;
} 

console.log(arrFu(arr));
console.log({inn} , {out} );


/*
let count = 0;
let co = 0;
 let swapped;
 do{
     swapped = false;
array.forEach((item, index, array, thisArg) => {
    if(item > array[index + 1]) {
    
        array[index] = array[index + 1];
        array[index + 1] = item;
        
        swapped = true;
        
    } 
    count ++;
})
co ++;
}while(swapped);

alert(array);
console.log(count, co);
*/