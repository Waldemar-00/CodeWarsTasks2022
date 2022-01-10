const primeNumber = (n) => {
    
    let i;
    while(i<=n){
        (n%i===0 && i!==1 || i!==n)? false : true;
        i++;
    }
}
console.log(primeNumber(30));