function twoNumberSum(array, targetSum) {

  let sub = {}

  for (let index = 0; index < array.length; index++) {
    
    let key = targetSum - array[index]
    
    if(sub[key] == undefined) {
     sub[array[index]] = key;
    }
    else {
      return [array[index], key];
    }
  }
  return []
}

  let array = [-7, -5, -3, -1, 0, 1, 3, 5, 7];
  let targetSum = -5

  console.log(twoNumberSum(array, targetSum))

// Foot Notes:
// Mistakes
// issues faced, how to push or add an element to an Object 
// First did it like sub[{array[index]}:key]
// Than sub[val:key]
// out of them were {val: 1, val: 3} which were Wrong
// object should be added like this
// const obj = { a: 1 };
// const bKey = 'b';
// obj[bKey] = 2;
// obj['c'] = 3;
// obj = { a: 1, b: 2, c: 3 }
// especially when val has its own value

// Second mistake 
// was testing in if condition if the hash store has an element or not with ! sub[key]
// It works fine for many except if it returns 0 which is !0, !false implies true which is wrong 
// sub[key] should be tested for undefined when there is no existing 