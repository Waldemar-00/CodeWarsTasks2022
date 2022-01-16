

function showPrime(n) {
    for(let i = 2; i < n; i++) {
      if(IsPrime(i)) console.log (i);
    }
}

function IsPrime(i) {//this function is flag
    for(let j = 2; j < i; j ++) {
        if(i % j === 0) return false;
    }
    return true;
}
showPrime(20);