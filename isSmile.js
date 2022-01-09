 
 function isSmile(arr) {
     let count = 0;
    for (let i of arr) {
        if (i[0] === ':' || i[0] === ';') {
            if (i[1] === '-' || i[1] === '~') {
                if (i[2] === ')' || i[2] === 'D') {
                    count++;
                }
            }else if (i[1] === ')' || i[1] === 'D') count++;
        }
    }
    return count;
 }
 console.log(isSmile([':-)', ';-)', ':)', ':D', ':))']));