
function rgbToHex(r, g, b) {
    let rezult ='';
    let arr = [];
    arr.push(r, g ,b);
    arr.forEach(element => {
        element = parseInt(element);
        if (element === 0 || element < 0) element = '00';
       if (element > 255) element = 255;
      let hex = element.toString(16).toUpperCase();
      if(hex.length === 1) hex = '0' + hex;
        rezult += hex;
        
});
return rezult;
}
console.log(rgbToHex(  155, 255, 255));