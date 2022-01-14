function QuickSort(arr)
{
   if (arr.length == 0) return [];
    
   let a = [];
   let b = [];
   
    for (let i = 1; i < arr.length; i++) { 
 if (arr[ i ] < arr[0]) a[a.length] = arr[ i ];
      else b[b.length] = arr[ i ];
     }
     i++;
return QuickSort(a).concat(arr[0],QuickSort(b) );
}
let i = 0;
let arr = [3, 4, 2, 5, 1, 0, 10, 9, 7];
console.log(QuickSort(arr), i);