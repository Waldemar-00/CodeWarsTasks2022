const minDevisor = (n) =>{
    if(n===1)return 1;
    for(i=2; i<=n; i++){
        if(n%i===0)return i;
    }
}

const smallestDivisor = (num) => {
    const smallestDivisor = (num) => {
        const iter = (acc) => {
            if (acc > num / 2) {
                return num;
            }
            if (num % acc === 0) {
                return acc;
            }
            return iter(acc + 1);
        };

        return iter(2);
    }
}