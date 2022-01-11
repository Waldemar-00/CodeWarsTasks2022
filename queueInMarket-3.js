function queueTime(customers, n) {
    let w = new Array(n).fill(0);
    console.log(w);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
      
    }
    return Math.max(...w);
  }
  console.log(queueTime([44,38,43,42,18,11,26,19,19,32,6,3,35,41,47,31,34,49,38,15,25,39 ], 5));