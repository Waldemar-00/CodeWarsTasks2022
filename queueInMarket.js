function queueTime(customers, n) {
    customers.sort( (a, b) => a - b );
      let array = [];
     
      for (let i = 0; i < n; i++) {   
       array.push([]);
      }
      let k = 0;
      for (let j = 0; j < customers.length; j+= n) {
      for (let i = 0; i < n; i++) {
      if (k === customers.length)break;
        array[i].push(customers[k]);
          k++;
     }
  }
  
  
  let arrEnd = [0];
  for (let i = 0; i < array.length; i++) {
      let sum = 0;
     for (let j = 0; j < array[i].length; j++) {
       sum +=  array[i][j];
      
     }
     
     arrEnd.push(sum);
  }
  arrEnd.sort( (a,b) => a - b );
  let ourTime = arrEnd[arrEnd.length - 1];
  return ourTime;
  }
  console.log(queueTime([44,38,43,42,18,11,26,19,19,32,6,3,35,41,47,31,34,49,38,15,25,39 ], 5));