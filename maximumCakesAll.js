 
 function maxCakes(recipe, available) {
    let recipeArr = Object.keys(recipe);
    let availableArr = Object.keys(available);
      let arr = [];
      

    for (let i = 0; i < recipeArr.length; i++) {
        let flag = false;
        for (let j = 0; j < availableArr.length; j++) {
        if (recipeArr[i] === availableArr[j]) {
            arr.push(available[availableArr[j]] / recipe[recipeArr[i]]);
            flag = true;
        }
      }
      if (!flag) return 0;
    }
    let rezult = Math.min(...arr);
    return Math.floor(rezult);
  }
   console.log(maxCakes({ sugar: 200, eggs: 1, flour: 500,}, {flour: 1200,  eggs: 5, milk: 200}));
  
  
   