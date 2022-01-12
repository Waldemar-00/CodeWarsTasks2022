
function maxCakes(recipe, available) {
  let recipeArr = Object.keys(recipe);
  let availableArr = Object.keys(available);
    let arr = [];
   
  for (let i = 0; i < recipeArr.length; i++) {
      if (recipeArr[i] !== availableArr[i]) return 0;
      arr.push(available[availableArr[i]] / recipe[recipeArr[i]]);
  }
  let rezult = Math.min(...arr);
  return Math.floor(rezult);
}
 console.log(maxCakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));


 