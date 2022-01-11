'use strict'
function string(str) {
    if (str.length === 0 || !str.trim())return false;
    str = str.trim().replace(/\s+/g, ' ').toLowerCase();
   
    let arr = str.split(' ');
    
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i][0] == '#') array.push(arr[i][0] + arr[i][1].toUpperCase() + arr[i].slice(2));
        else array.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    let newStr;
    if (array[0][0] == '#') newStr = array.join('');
    else newStr = '#' + array.join('');
    if (newStr.length > 140) return false;
    return newStr;
}
console.log(string(' CaT                                                                                                                          CAt  '));